export class Keyframe<TypeOfKeyframe> {
  constructor(public readonly timeMs: number, public readonly value: TypeOfKeyframe) {}
}
