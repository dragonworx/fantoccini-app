import { Project } from 'fantoccini';

const project = new Project();
const sprite = project.newSprite();
project.addSprite(sprite);

sprite.x.channel.addKeyframe(1000, 100);
sprite.x.channel.addKeyframe(2000, 200);
sprite.x.channel.addKeyframe(4000, 300);

sprite.rotation.channel.addKeyframe(1000, 15);
sprite.rotation.channel.addKeyframe(3000, 45);

project.timeline.play();

console.log(project);