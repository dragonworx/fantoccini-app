type Getter = (target: any, key: string) => any;
type Setter = (target: any, key: string, value: any) => void;

export class Property<T> {
  constructor(
    public readonly key: string,
    public readonly target: any,
    private readonly getter?: Getter,
    private readonly setter?: Setter
  ) {
    
  }

  get value() {
    const { getter, key, target } = this;
    return getter ? getter(target, key) : this.target[this.key];
  }

  set value(value: T) {
    const { setter, key, target } = this;
    if (setter) {
      setter(target, key, value);
    } else {
      target[key] = value;
    }
  }
}
