import { Channel } from "./channel";
import { PlaybackOptions } from './types';

export class Clip {
  protected readonly channels: Map<string, Channel<any>> = new Map();

  constructor (defaultChannels: {[key: string]: any}) {
    Object.keys(defaultChannels).forEach((key: string, value: any) => {
      this.addChannel(key, value);
    });
  }

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

  addChannel (key: string, defaultValue: any, options?: PlaybackOptions) {
    const channel = new Channel(key, defaultValue, options);
    this.channels.set(key, channel);
    return channel;
  }
}
