import { Channel } from "./channel";

export class Clip {
  protected readonly channels: Map<string, Channel<any>> = new Map();

  get duration () {
    let max = 0;
    for (let [, channel] of this.channels) {
      max = Math.max(max, channel.duration);
    }
    return max;
  }

  keys () {
    return [ ...this.channels.keys() ];
  }

  addChannel (key: string, defaultValue: any) {
    const channel = new Channel(defaultValue);
    this.channels.set(key, channel);
    return channel;
  }

  channel (key: string) {
    return this.channels.get(key);
  }
}
