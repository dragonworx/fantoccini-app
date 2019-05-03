import { Keyframe } from './keyframe';
import { TimelineBound, PlaybackOptions, RepeatDirection } from './types';
import { EasingFn } from './util/easing';

const NOT_PLAYING = -1;
const num = (arg: any) => arg as number;
const toNum = (arg: number) => parseFloat(arg.toFixed(2));

export const defaultOptions: PlaybackOptions = {
    repeat: false,
    repeatDirection: RepeatDirection.Backward,
};

export class Channel<TypeOfChannel> implements TimelineBound {
    public readonly keyframes: Keyframe<TypeOfChannel>[] = [];
    public currentKeyframeIndex: number = -1;
    public options: PlaybackOptions;
    public readonly defaultValue: TypeOfChannel;
    public currentValue: TypeOfChannel;

    constructor (readonly key: string, defaultValue: TypeOfChannel, options: PlaybackOptions = defaultOptions) {
        this.currentValue = this.defaultValue = defaultValue;
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
        const { keyframes, currentKeyframeIndex: currentIndex } = this;
        if (currentIndex === 0) {
            return num(this.defaultValue);
        } else {
            return num(keyframes[currentIndex - 1].value);
        }
    }

    get toValue (): number {
        const { keyframes, currentKeyframeIndex: currentIndex } = this;
        if (currentIndex === 0) {
            return num(keyframes[0].value);
        } else {
            return num(keyframes[currentIndex].value);
        }
    }

    get isOnFirstFrame (): boolean {
        return this.currentKeyframeIndex === 0;
    }

    get isOnLastFrame (): boolean {
        return this.currentKeyframeIndex === this.keyframes.length - 1;
    }

    get currentKeyframe(): Keyframe<any> {
        return this.keyframes[this.currentKeyframeIndex];
    }

    get nextKeyframe (): Keyframe<any> | undefined {
        if (this.isOnLastFrame) {
            return this.options.repeat ? this.keyframes[0] : undefined;
        } else {
            return this.keyframes[this.currentKeyframeIndex + 1];
        }
    }

    get durationMs (): number {
        return this.isEmpty ? 0 :  this.lastKeyframe.elapsedMs;
    }

    addKeyframe (durationMs: number, value: TypeOfChannel, easing?: EasingFn) {
        const { isEmpty, keyframes, lastKeyframe } = this;
        const keyframe = new Keyframe(durationMs, value, easing);
        if (!isEmpty) {
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
        if (this.currentKeyframeIndex === NOT_PLAYING) {
            return timeMs;
        }
        return this.options.repeat ? timeMs % this.durationMs : timeMs;
    }

    seek (elapsedMs: number) {
        const timeMs = this.clippedTimeMs(elapsedMs);
        this.currentKeyframeIndex = this.getKeyframeIndexAt(timeMs);
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
                this.currentValue = toValue as unknown as any;
                this.gotoNextKeyframe();
                return;
            }

            if (currentKeyframe.easing !== undefined && typeof currentKeyframe.value === 'number') {
                let easedParametric = currentKeyframe.easedParametric(completed);
                this.currentValue = (fromValue + ((toValue - fromValue) * easedParametric)) as any;
            } else {
                this.currentValue = fromValue as unknown as TypeOfChannel;
            }
        } else {
            this.currentValue = this.defaultValue;
        }
    }

    gotoNextKeyframe () {
        if (this.isOnLastFrame) {
            if (this.options.repeat) {
                this.currentKeyframeIndex = 0;
                console.log({ key: this.key, gotoNext: this.currentKeyframeIndex, type: 'rewind' });
                return;
            }
            // TODO: fire done event (think about events)
            // console.log({ key: this.key, gotoNext: this.currentIndex, type: 'finish' });
        } else {
            this.currentKeyframeIndex++;
            console.log({ key: this.key, gotoNext: this.currentKeyframeIndex, type: 'normal' });
        }
    }
}