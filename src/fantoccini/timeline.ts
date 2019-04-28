import { Puppet } from "./puppet";
import { TimelineBound } from "./types";

const NOT_PLAYING = -1;

export class Timeline implements TimelineBound {
  private startTimestamp: number = NOT_PLAYING;
  private puppets: Puppet<any>[] = [];
  public elapsedMs: number = NOT_PLAYING;

  constructor (private isPlaying: boolean = true) {
    window.requestAnimationFrame(this.onAnimationFrame);
  }

  get timeMs () {
    return this.elapsedMs;
  }

  onAnimationFrame = (timestamp: DOMHighResTimeStamp) => {
    if (this.isPlaying) {
        if (this.startTimestamp === NOT_PLAYING) {
          this.startTimestamp = timestamp;
          this.seek(0);
        }
        const elapsedMs = timestamp - this.startTimestamp;
        this.elapsedMs = elapsedMs;
        this.update(elapsedMs);
    }

    window.requestAnimationFrame(this.onAnimationFrame);
  }

  add (puppet: Puppet<any>) {
    this.puppets.push(puppet);
  }

  play () {
    this.isPlaying = true;
    this.startTimestamp = NOT_PLAYING;
  }

  seek (elapsedMs: number) {
    this.puppets.forEach(puppet => puppet.seek(elapsedMs));
  }

  update (elapsedMs: number) {
    this.puppets.forEach(puppet => puppet.update(elapsedMs));
  }
}
