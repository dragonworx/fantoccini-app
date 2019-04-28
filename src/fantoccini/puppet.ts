import { Clip } from "./clip";
import { PuppetString } from "./string";
import { TimelineBound } from "./types";
import { Channel } from "./channel";

export class Puppet<TypeOfPuppet> implements TimelineBound {
  protected readonly strings: Map<string, PuppetString<any, any>> = new Map;
  protected readonly channels: Map<string, Channel<any>[]> = new Map;

  constructor(
    protected readonly target: TypeOfPuppet
  ) {
    
  }

  protected createString (key: string) {
    return new PuppetString(this.target, key);
  }

  protected addString (key: string, string: PuppetString<TypeOfPuppet, any>) {
    this.strings.set(key, string);
    if (!this.channels.get(key)) {
        this.channels.set(key, []);
    }
  }

  protected getActiveChannel (key: string) {
      const channels = this.channels.get(key);
      return channels[channels.length - 1];
  }

  seek (elapsedMs: number) {
    for (let [key,] of this.channels) {
        this
            .getActiveChannel(key)
            .seek(elapsedMs);
    }
  }

  update (elapsedMs: number) {
    for (let [key, ] of this.channels) {
        const channel = this.getActiveChannel(key);
        channel.update(elapsedMs);
        const string = this.strings.get(key);
        string.value = channel.value;
    }
  }

  play (clip: Clip) {
    clip.keys().forEach(key => {
        if (!this.strings.has(key)) {
            // lazy-init string if first use
            const string = this.createString(key);
            this.addString(key, string);
        }
        // put clip channel data on top
        this.channels
            .get(key)
            .push(clip.channel(key));
    });
  }
}
