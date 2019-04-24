import { Keyframe } from './keyframe';
import { Property } from './property';
import { Easing } from './util/easing';

export class Channel<T> {
    public keyframes: Keyframe<T>[];
    public currentIndex: number = -1;
    public loop: boolean = true;
    public interpolate: boolean = false;

    constructor (private readonly property: Property<T>, defaultValue?: T) {
        const defaultVal = defaultValue ? defaultValue : property.value;
        this.keyframes = [new Keyframe(0, defaultVal)];
    }

    get isEmpty () {
        return this.keyframes.length === 1;
    }

    get firstKeyframe () {
        return this.keyframes[0];
    }

    get lastKeyframe () {
        const keyframes = this.keyframes;
        return keyframes[keyframes.length - 1];
    }

    addKeyframe (timeMs: number, value: T) {
        const keyframes = this.keyframes;
        const keyframe = new Keyframe(timeMs, value);
        keyframes.push(keyframe);
    }

    addRelKeyframe (delayMs: number, value: T) {
        const keyframes = this.keyframes;
        const keyframe = new Keyframe(this.lastKeyframe.timeMs + delayMs, value);
        keyframes.push(keyframe);
    }

    getKeyframeIndexAtTime (timeMs: number): number | undefined {
        const { keyframes } = this;
        const l = keyframes.length - 1;
        if (l === 0) {
            return 0;
        }
        if (timeMs >= this.lastKeyframe.timeMs) {
            return l;
        }
        for (let i = 0; i < l; i++) {
            const keyframe = keyframes[i];
            const nextKeyframe = keyframes[i + 1];
            if (timeMs >= keyframe.timeMs && timeMs < nextKeyframe.timeMs) {
                return i;
            }
        }
    }

    get duration () {
        return this.lastKeyframe.timeMs;
    }

    currentTimeMs (timeMs: number) {
        if (this.loop) {
            return timeMs % this.duration;
        }
        return timeMs;
    }

    seek (rawTimeMs: number) {
        const timeMs = this.currentTimeMs(rawTimeMs);
        this.currentIndex = this.getKeyframeIndexAtTime(timeMs);
    }

    update (rawTimeMs: number) {
        const timeMs = this.currentTimeMs(rawTimeMs);
        const keyframe = this.keyframes[this.currentIndex];
        if (this.isEmpty) {
            this.property.value = keyframe.value;
        } else {
            const nextKeyframe = this.keyframes[this.currentIndex + 1];
            const duration = nextKeyframe.timeMs - keyframe.timeMs;
            const elapsed = Math.min(1, (timeMs - keyframe.timeMs) / duration);
            
            if (this.interpolate && typeof keyframe.value === 'number' && typeof nextKeyframe.value === 'number') {
                let easedElapsed = elapsed;
                if (this.currentIndex === 0) {console.log('ease in');
                    easedElapsed = Easing.inCubic(elapsed);
                }
                if (this.currentIndex === this.keyframes.length - 2) {console.log('ease out');
                    easedElapsed = Easing.outCubic(elapsed);
                }
                const delta = nextKeyframe.value - keyframe.value;
                this.property.value = (keyframe.value + (delta * easedElapsed)) as any;
            } else {
                this.property.value = keyframe.value;
            }
    
            if (elapsed >= 1) {
                this.nextFrame();
            }
        }
    }

    nextFrame () {
        const currentIndex = this.currentIndex;
        this.currentIndex++;
        console.log("nextFrame - was " + currentIndex + " is " + this.currentIndex);
    }
}