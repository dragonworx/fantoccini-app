export type Handler = (key: string, value: any, previousValue: any) => void

export class AbstractModel {
  protected defaults?: any;
  public state: any;
  private listeners: Handler[];

  constructor (defaults: {} = {}) {
    const self: any = this;
    const Class: any = self.__proto__.constructor;
    console.log(`New "${Class.name}"`);
    this.listeners = [];
    this.defaults = defaults;
    this.state = {
      ...defaults
    };
  }

  addListener (handler: Handler) {
    this.listeners.push(handler);
  }

  init () {
    const defaults = this.defaults;
    for (let key in defaults) {
      // console.log(`"${key}": ${JSON.stringify(defaults[key])}`);

      Object.defineProperty(this, key, {
        get () {
          return this.state.hasOwnProperty(key)
            ? this.state[key]
            : defaults[key];
        },
        set (value) {
          const previousValue = this.state[key];
          this.state[key] = value;
          for (let handler of this.listeners) {
            handler(key, value, previousValue);
          }
        }
      });

      for (let key in this.state) {
        console.log('[' + key + '] ' + this[key]);
      }
    }
  }

  static create (defaults) {
    const Model = (this as any);
    const model = new Model(defaults);
    model.init();
    return model;
  }
}