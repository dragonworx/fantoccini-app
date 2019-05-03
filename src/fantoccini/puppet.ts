import { Clip } from "./clip";
import { PuppetString } from "./string";
import { TimelineBound } from "./types";
import { Channel } from "./channel";

export abstract class Puppet<TypeOfPuppet> implements TimelineBound {
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
            .getActiveChannel(key) // TODO: keep this channel stack idea?
            .seek(elapsedMs);
    }
    (this.target as any).style.display = 'block';
  }

  update (elapsedMs: number) {
    for (let [key, ] of this.channels) {
        // update channel with currentValue
        const channel = this.getActiveChannel(key);
        channel.update(elapsedMs);
        const currentValue = channel.currentValue;
        // update target through string with currentValue
        const string = this.strings.get(key);
        string.value = currentValue;
        // console.log({ elapsedMs, currentValue });
    }
  }

  play (clip: Clip) {
    clip.keys().forEach(key => {
        if (!this.strings.has(key)) {
            // polymorphic lazy-init <string> if first use
            const string = this.createString(key);
            this.addString(key, string);
        }
        // put clip channel data on top ~ TODO: replace? use clip collection instead?
        this.channels
            .get(key)
            .push(clip.channel(key));
        console.log('start');
    });
  }
}
