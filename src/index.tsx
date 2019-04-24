import { DomElementPuppet, Timeline } from 'fantoccini';

// setup test div
const element = document.createElement('div');
element.setAttribute('id', 'test');
document.getElementById('main').appendChild(element);

// mutate with animation
const puppet = new DomElementPuppet(element);
puppet.addKeyframe('left', 1000, 100);
puppet.addKeyframe('left', 2000, 200);
puppet.addKeyframe('left', 3000, 300);
puppet.addKeyframe('left', 4000, 0);

// setup timeline
const timeline = new Timeline();
timeline.add(puppet);
timeline.play();