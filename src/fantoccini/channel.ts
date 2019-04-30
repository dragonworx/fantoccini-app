import { Keyframe } from './keyframe';
import { TimelineBound } from './types';
import { EasingFn } from './util/easing';

const NOT_PLAYING = -1;
const num = (arg: any) => arg as number;
const toNum = (arg: number) => parseFloat(arg.toFixed(2));

export interface ChannelOptions {
    loop?: boolean;
}

export const defaultOptions: ChannelOptions = {
    loop: false,
};

export class Channel<TypeOfChannel> implements TimelineBound {
    public readonly keyframes: Keyframe<TypeOfChannel>[] = [];
    public currentIndex: number = -1;
    public options: ChannelOptions;
    public readonly defaultValue: TypeOfChannel;
    public value: TypeOfChannel;

    constructor (readonly key: string, defaultValue: TypeOfChannel, options: ChannelOptions = defaultOptions) {
        this.value = this.defaultValue = defaultValue;
        this.options = options;
    }

    get isEmpty () {
        return this.keyframes.length === 0;
    }

    get keyframeCount () {
        return this.keyframes.length;
    }

    get firstKeyframe (): Keyframe<any> {
        return this.keyframes[0];
    }

    get lastKeyframe () {
        const keyframes = this.keyframes;
        return keyframes[keyframes.length - 1];
    }

    get fromValue (): number {
        const { keyframes, currentIndex } = this;
        if (currentIndex === 0) {
            return num(this.defaultValue);
        } else {
            return num(keyframes[currentIndex - 1].value);
        }
    }

    get toValue (): number {
        const { keyframes, currentIndex } = this;
        if (currentIndex === 0) {
            return num(keyframes[0].value);
        } else {
            return num(keyframes[currentIndex].value);
        }
    }

    get isOnFirstFrame (): boolean {
        return this.currentIndex === 0;
    }

    get isOnLastFrame (): boolean {
        return this.currentIndex === this.keyframes.length - 1;
    }

    get currentKeyframe(): Keyframe<any> {
        return this.keyframes[this.currentIndex];
    }

    get nextKeyframe (): Keyframe<any> | undefined {
        if (this.isOnLastFrame) {
            return this.options.loop ? this.keyframes[0] : undefined;
        } else {
            return this.keyframes[this.currentIndex + 1];
        }
    }

    get durationMs (): number {
        return this.isEmpty ? 0 :  this.lastKeyframe.elapsedMs;
    }

    addKeyframe (durationMs: number, value: TypeOfChannel, easing?: EasingFn) {
        const { isEmpty, keyframes, lastKeyframe } = this;
        const keyframe = new Keyframe(durationMs, value, easing);
        if (!isEmpty) {
            // TODO: update if keyframe array changes
            keyframe.timeMs = lastKeyframe.timeMs + lastKeyframe.durationMs;
        }
        keyframes.push(keyframe);
        return this;
    }

    extend (durationMs?: number) {
        const { lastKeyframe } = this;
        const duration = durationMs === undefined ? lastKeyframe.durationMs : durationMs;
        const value = lastKeyframe.value;
        return this.addKeyframe(duration, value);
    }

    getKeyframeIndexAt (timeMs: number): number | null {
        const { keyframes } = this;
        const l = keyframes.length;
        for (let i = 0; i < l; i++) {
            const keyframe = keyframes[i];
            if (timeMs >= keyframe.timeMs && timeMs <= keyframe.elapsedMs) {
                return i;
            }
        }
    }

    clippedTimeMs (timeMs: number) {
        if (this.currentIndex === NOT_PLAYING) {
            return timeMs;
        }
        return this.options.loop ? timeMs % this.durationMs : timeMs;
    }

    seek (elapsedMs: number) {
        const timeMs = this.clippedTimeMs(elapsedMs);
        this.currentIndex = this.getKeyframeIndexAt(timeMs);
    }

    update (elapsedMs: number) {
        if (!this.isEmpty) {
            const { currentKeyframe, fromValue, toValue } = this;
            const timeMs = this.clippedTimeMs(elapsedMs);
            const completed = currentKeyframe.parametric(timeMs);

            // console.log({
            //     ci: toNum(this.currentIndex),
            //     el: elapsedMs,
            //     gp: globalComplete,
            //     lp: localComplete,
            // });

            if (completed >= 1) {
                this.value = toValue as unknown as any;
                this.gotoNextFrame();
                return;
            }

            if (currentKeyframe.easing !== undefined && typeof currentKeyframe.value === 'number') {
                let easedParametric = currentKeyframe.easedParametric(completed);
                this.value = (fromValue + ((toValue - fromValue) * easedParametric)) as any;
            } else {
                this.value = fromValue as unknown as TypeOfChannel;
            }
        }
    }

    gotoNextFrame () {
        if (this.isOnLastFrame) {
            if (this.options.loop) {
                this.currentIndex = 0;
                console.log({ key: this.key, gotoNext: this.currentIndex, type: 'rewind' });
                return;
            }
            // TODO: fire done event (think about events)
            // console.log({ key: this.key, gotoNext: this.currentIndex, type: 'finish' });
        } else {
            this.currentIndex++;
            console.log({ key: this.key, gotoNext: this.currentIndex, type: 'normal' });
        }
    }
}