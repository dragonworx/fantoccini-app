import { Property } from "./property";
import { Channel } from "./channel";

interface PropertyMap {
  [key: string]: Property<any>;
}

interface ObjectMap {
  [key: string]: any;
}

interface ChannelMap {
  [key: string]: Channel<any>;
}

interface PuppetIteration {
  key: string;
  channel: Channel<any>;
  property: Property<any>;
}

export class Puppet {
  protected readonly properties: PropertyMap = {};
  protected readonly channels: ChannelMap = {};
  protected readonly keys: string[] = [];

  constructor (
    protected readonly target: any,
    protected readonly defaults?: ObjectMap)
  {
    const defaultStrings = this.defaultStrings;
    const keys = this.keys;
    keys.push.apply(keys, Object.keys(defaultStrings));
    keys.forEach(key => {
      this.attachString(key, defaultStrings[key]);
    });
  }

  get defaultStrings (): ObjectMap {
    return {};
  }

  attachString <T> (key: string, defaultValue?: any) {
    const property = this.createProperty<T>(key, this.target);
    Object.defineProperty(this, key, {
      get() {
        return property.value;
      },
      set(value: T) {
        property.value = value;
      }
    });
    this.properties[key] = property;
    const channel = new Channel(property, defaultValue);
    this.channels[key] = channel;
    this.keys.push(key);
    // attach to instance, should provide typings
    (this as any)[key] = channel;
  }

  detachString (key: string) {
    delete this.properties[key];
    delete this.channels[key];
  }

  protected createProperty<T> (key: string, target: any) {
    return new Property<T>(key, target);
  }

  prop (key: string) {
    return this.properties[key];
  }

  get (key: string) {
    return this.properties[key].value;
  }

  set (key: string, value: any) {
    return (this.properties[key].value = value);
  }

  addKeyframe <T> (key: string, timeMs: number, value: T) {
    const channel = this.channels[key];
    channel.addKeyframe(timeMs, value);
  }

  addRelKeyframe <T> (key: string, delayMs: number, value: T) {
    const channel = this.channels[key];
    channel.addRelKeyframe(delayMs, value);
  }

  each (fn: (iteration: PuppetIteration) => void) {
    this.keys.forEach(key => {
      const channel = this.channels[key];
      const property = this.properties[key];
      fn({ key, channel, property });
    });
  }

  seek (timeMs: number) {
    this.each(({ channel }) => {
      channel.seek(timeMs);
    });
  }

  update (timeMs: number) {
    this.each(({ channel }) => {
      channel.update(timeMs);
    });
  }
}
