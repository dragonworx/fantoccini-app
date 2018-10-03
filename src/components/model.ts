export type Handler = (key: string, value: any, previousValue: any) => void

export class AbstractModel {
  protected defaults?: any;
  public state: any;
  private listeners: Handler[];

  constructor (props) {
    const self: any = this;
    const Class: any = self.__proto__.constructor;
    console.log(`=> ${Class.name}`);
    this.listeners = [];
    this.defaults = props;
    this.state = {
      ...props
    };
    this.init();
  }

  addListener (handler: Handler) {
    this.listeners.push(handler);
  }

  init () {
    const defaults = this.defaults;
    for (let key in defaults) {
      Object.defineProperty(this, key, {
        get () {
          return this.state.hasOwnProperty(key)
            ? this.state[key]
            : defaults[key];
        },
        set (value) {
          const previousValue = this.state[key];
          this.state[key] = value;
          if (typeof value === 'undefined') {
            delete this.state[key];
          }
          for (let handler of this.listeners) {
            handler(key, this[key], previousValue);
          }
        }
      });
    }

    for (let key in this.state) {
      console.log(`init: "${key}": ${this[key]}`);
    }
  }

  static create (defaults) {
    const Model = (this as any);
    const model = new Model(defaults);
    model.init();
    return model;
  }
}