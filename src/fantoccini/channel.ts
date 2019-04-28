import { Keyframe } from './keyframe';
import { Easing } from './util/easing';
import { TimelineBound } from './types';
import { thisExpression } from '@babel/types';

export class Channel<TypeOfChannel> implements TimelineBound {
    public keyframes: Keyframe<TypeOfChannel>[];
    public currentIndex: number = -1;
    public loop: boolean = true;
    private hasLooped: boolean = false;
    public interpolate: boolean = false;
    public value: TypeOfChannel;

    constructor (defaultValue: TypeOfChannel) {
        this.value = defaultValue;
        this.keyframes = [new Keyframe(0, defaultValue)];
    }

    get isStatic () {
        return this.keyframes.length === 1;
    }

    get staticKeyframe () {
        return this.keyframes[0];
    }

    get firstKeyframe () {
        return this.keyframes[1];
    }

    get currentKeyframe () {
        return this.keyframes[this.currentIndex];
    }

    get lastKeyframe () {
        const keyframes = this.keyframes;
        return keyframes[keyframes.length - 1];
    }

    get keyframeCount () {
        return this.keyframes.length - 1;
    }

    get duration () {
        return this.lastKeyframe.timeMs;
    }

    addKeyframe (timeMs: number, value: TypeOfChannel) {
        this.keyframes.push(new Keyframe(timeMs, value));
        return this;
    }

    addRelKeyframe (deltaMs: number, value: TypeOfChannel) {
        this.keyframes.push(new Keyframe(this.lastKeyframe.timeMs + deltaMs, value));
        return this;
    }

    getKeyframeIndexAtTime (timeMs: number): number | undefined {
        const { keyframes } = this;
        const l = keyframes.length - 1;
        if (l === 0) {
            // static
            return 0;
        }
        if (timeMs >= this.lastKeyframe.timeMs) {
            // past last keyframe
            return l;
        }
        // return now keyframe from all
        for (let i = 0; i < l; i++) {
            const keyframe = keyframes[i];
            const nextKeyframe = keyframes[i + 1];
            if (timeMs >= keyframe.timeMs && timeMs < nextKeyframe.timeMs) {
                return i;
            }
        }
    }

    currentTimeMs (timeMs: number) {
        if (this.loop) {
            const duration = this.duration + this.firstKeyframe.timeMs;
            const loopedTime = timeMs % duration;
            this.hasLooped = loopedTime < timeMs;
            return loopedTime;
        }
        return timeMs;
    }

    seek (elapsedMs: number) {
        const timeMs = this.currentTimeMs(elapsedMs);
        this.currentIndex = this.getKeyframeIndexAtTime(timeMs);
    }

    update (elapsedMs: number) {
        const timeMs = this.currentTimeMs(elapsedMs);
        const currentIndex = this.currentIndex;
        const keyframes = this.keyframes;
        const keyframe = keyframes[currentIndex];
        const isLastKeyframe = keyframe === this.lastKeyframe;
        let nextKeyframe;
        let duration = 0;
        if (this.loop) {
            if (isLastKeyframe) {
                nextKeyframe = this.firstKeyframe;
                duration = this.firstKeyframe.timeMs;
            } else {
                nextKeyframe = keyframes[currentIndex + 1];
                duration = nextKeyframe.timeMs - keyframe.timeMs;
            }
        } else {
            nextKeyframe = isLastKeyframe ? undefined : keyframes[currentIndex + 1];
            duration = isLastKeyframe ? 0 : nextKeyframe.timeMs - keyframe.timeMs;
        }
        if (this.isStatic) {
            // static
            this.value = keyframe.value;
        } else {
            // animated
            if (nextKeyframe === undefined) {
                // not looping (sitting)
                this.value = keyframe.value;
                console.log("done", currentIndex);
                
            } else {
                // playing
                const elapsed = Math.min(1, Math.abs(timeMs - keyframe.timeMs) / duration);
                console.log(elapsed);
                
                if (this.interpolate && typeof keyframe.value === 'number' && typeof nextKeyframe.value === 'number') {
                    // interpolate
                    let easedElapsed = elapsed;
                    if (currentIndex === 0) {console.log('ease in');
                        easedElapsed = Easing.inCubic(elapsed);
                    }
                    if (currentIndex === this.keyframes.length - 2) {console.log('ease out');
                        easedElapsed = Easing.outCubic(elapsed);
                    }
                    const delta = nextKeyframe.value - keyframe.value;
                    this.value = (keyframe.value + (delta * easedElapsed)) as any;
                } else {
                    // no interpolation
                    this.value = keyframe.value;
                }

                if (elapsed >= 1) {
                    // next keyframe
                    this.currentIndex++;
                    if (this.currentIndex > this.keyframeCount) {
                        this.currentIndex = 1;
                    }
                    console.log('currentIndex ' + this.currentIndex);
                }
            }
        }
    }
}