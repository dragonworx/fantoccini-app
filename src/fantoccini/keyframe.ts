import { EasingFn, Linear } from './util/easing';

export class Keyframe<TypeOfKeyframe> {
  public timeMs: number = 0;

  constructor(
    public readonly durationMs: number, 
    public readonly value: TypeOfKeyframe,
    public readonly easing?: EasingFn,
  ) {

  }

  get elapsedMs (): number {
    return this.timeMs + this.durationMs;
  }

  parametric (timeMs: number) {
    if (timeMs < this.timeMs) {
      return (timeMs + this.timeMs) / this.durationMs;
    }
    return Math.abs(timeMs - this.timeMs) / this.durationMs;
  }

  easedParametric (parametric: number) {
    return this.easing(parametric);
  }
}
