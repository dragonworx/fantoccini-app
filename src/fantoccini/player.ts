import { Timeline } from "./timeline";
import { Puppet } from "./puppet";

export class Player {
    private readonly timeline: Timeline;
    private readonly puppets: Puppet<any>[] = [];

    constructor () {
        this.timeline = new Timeline();
    }

    add (puppet: Puppet<any>) {
        this.puppets.push(puppet);
        this.timeline.add(puppet);
    }
}