import { Project, Sprite, Scene, color } from 'fantoccini';

const project = new Project();
const scene1 = new Scene('scene1', project);
const scene2 = new Scene('scene2', project);

const sprite1 = new Sprite(scene1, {
  bgFill: color(255, 0, 0)
});

const sprite2 = new Sprite(scene2, {
  bgFill: color(0, 255, 0)
});

scene1.addSprite(sprite1);
scene2.addSprite(sprite2);

sprite1.x.channel.addKeyframe(1000, 100);
sprite1.x.channel.addKeyframe(2000, 200);

// todo: give Scene local time? so start keyframes at 0?
sprite2.rotation.channel.addKeyframe(3000, 5);
sprite2.rotation.channel.addKeyframe(4000, 45);

project.timeline.play();

project.currentSceneName.value = 'scene1'

setTimeout(() => project.currentSceneName.value = 'scene2', 1500);
setTimeout(() => project.currentSceneName.value = 'scene1', 2000);
setTimeout(() => project.currentSceneName.value = 'scene2', 3000);

window['project'] = project;