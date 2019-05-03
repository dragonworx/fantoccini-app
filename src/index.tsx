/**
 * fantoccin-app
 */

import { Player, Clip } from './fantoccini';
import { DomPuppet, DomPuppetStrings } from './fantoccini-dom';

// create clip animation
const clip = new Clip({
    left: 0,
});

// create playing objects
const player = new Player();
const puppet = new DomPuppet('test');
// const { left, top, opacity } = puppet.strings;
player.add(puppet);
puppet.play(clip);
