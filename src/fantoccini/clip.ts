import { Channel, ChannelOptions } from "./channel";

export class Clip {
  protected readonly channels: Map<string, Channel<any>> = new Map();

  get duration () {
    let max = 0;
    for (let [, channel] of this.channels) {
      max = Math.max(max, channel.durationMs);
    }
    return max;
  }

  keys () {
    return [ ...this.channels.keys() ];
  }

  channel (key: string) {
    return this.channels.get(key);
  }

  addChannel (key: string, defaultValue: any, options?: ChannelOptions) {
    const channel = new Channel(key, defaultValue, options);
    this.channels.set(key, channel);
    return channel;
  }
}
