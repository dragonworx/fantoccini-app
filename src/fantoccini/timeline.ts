import { Puppet } from "./puppet";
import { TimelineBound } from "./types";
import { requestAnimationFrame } from './util';

export class Timeline implements TimelineBound {
  private puppets: Puppet<any>[] = [];
  private playStartTimestamp: number | undefined;
  public elapsedMs: number | undefined;

  constructor (private isPlaying: boolean = true) {
    requestAnimationFrame(this.onAnimationFrame);
  }

  get timeMs () {
    return this.elapsedMs;
  }

  onAnimationFrame = (timestamp: DOMHighResTimeStamp) => {
    if (this.isPlaying) {
        if (this.playStartTimestamp === undefined) {
          this.playStartTimestamp = timestamp;
          this.seek(0);
        }

        const elapsedMs = timestamp - this.playStartTimestamp;
        this.elapsedMs = elapsedMs;
        this.update(elapsedMs);
    }

    requestAnimationFrame(this.onAnimationFrame);
  }

  add (puppet: Puppet<any>) {
    this.puppets.push(puppet);
  }

  play () {
    this.isPlaying = true;
    this.playStartTimestamp = undefined;
  }

  seek (elapsedMs: number) {
    this.puppets.forEach(puppet => puppet.seek(elapsedMs));
  }

  update (elapsedMs: number) {
    this.puppets.forEach(puppet => puppet.update(elapsedMs));
  }
}
