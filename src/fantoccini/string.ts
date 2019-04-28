export class PuppetString<TypeOfTarget, TypeOfValue> {
  constructor(
    public readonly target: TypeOfTarget,
    public readonly key: string,
  ) {
  }

  get value(): TypeOfValue {
    return (this.target as any)[this.key] as TypeOfValue;
  }

  set value (value: TypeOfValue) {
    (this.target as any)[this.key] = value;
  }
}
