import { Puppet } from "./puppet";

export class Timeline {
  private isPlaying: boolean = false;
  private startTimestamp?: number;
  private elapsedTimestamp: number = 0;
  private puppets: Puppet[];
  childTimelines: Timeline[];

  constructor (
    private readonly parent: Timeline = undefined,
    private readonly delayMs: number = 0
  ) {
    this.puppets = [];
    this.childTimelines = [];
  }

  get timeMs () {
    return this.elapsedTimestamp;
  }

  onAnimationFrame = (timestamp: DOMHighResTimeStamp) => {
    if (this.isPlaying) {
        if (this.startTimestamp === undefined) {
            this.startTimestamp = timestamp;
          }
          const elapsedTimestamp = timestamp - this.startTimestamp;
          this.elapsedTimestamp = elapsedTimestamp;
      
          for (let puppet of this.puppets) {
            puppet.update(elapsedTimestamp);
          }
    }

    if (this.parent === undefined) {
      window.requestAnimationFrame(this.onAnimationFrame);
    }
  };

  add (puppet: Puppet) {
    this.puppets.push(puppet);
  }

  play () {
    this.isPlaying = true;
    delete this.startTimestamp;
    this.seek(0);
    setTimeout(() => {
      window.requestAnimationFrame(this.onAnimationFrame);
    }, this.delayMs);
  }

  seek (timeMs: number = 0) {
    for (let puppet of this.puppets) {
      puppet.seek(timeMs);
    }
  }
}
