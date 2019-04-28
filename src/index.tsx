/**
 * fantoccin-app
 */

import { Player, Clip } from './fantoccini';
import { DomPuppet } from './fantoccini-dom';

// create clip animation
const clip = new Clip();
const left = clip.addChannel('left', 0);
left
    .addKeyframe(1000, 100)
    .addRelKeyframe(1000, 200)
    .addRelKeyframe(1000, 300)
    .addRelKeyframe(1000, 400);

// create dom element
const element = document.createElement('div');
element.setAttribute('id', 'test');
document.getElementById('main').appendChild(element);

// create puppet
const puppet = new DomPuppet(element);
puppet.play(clip);

// create player
const player = new Player();
player.add(puppet);

// console.log(left.duration);