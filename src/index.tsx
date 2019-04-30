/**
 * fantoccin-app
 */

import { Player, Clip, OutCubic, InCubic, Linear } from './fantoccini';
import { DomPuppet } from './fantoccini-dom';

// create clip animation
const loop = { loop: true };
const clip = new Clip();
const left = clip.addChannel('left', 0, loop);
const top = clip.addChannel('top', 0);
const opacity = clip.addChannel('opacity', 0, loop);
left
    .addKeyframe(1000, 100, InCubic)
    .addKeyframe(1000, 200)
    .addKeyframe(1000, 300)
    .addKeyframe(1000, 400, OutCubic)
    .extend();
top
    .addKeyframe(1000, 100, InCubic)
    .addKeyframe(1000, 200)
    .addKeyframe(1000, 300)
    .addKeyframe(1000, 400, OutCubic)
    .extend();
opacity
    .addKeyframe(1000, 1, Linear)
    .extend(3000)
    .addKeyframe(1000, 0, Linear);

// create dom element
const element = document.createElement('div');
element.setAttribute('id', 'test');
document.getElementById('main').appendChild(element);
element.style.display = 'none';

// create playing objects
const puppet = new DomPuppet(element);
const player = new Player();
player.add(puppet);
puppet.play(clip);

console.log(clip);