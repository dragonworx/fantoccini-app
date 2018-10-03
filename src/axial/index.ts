export * from './component';
export * from './model';

let lastAxis;
let rootAxis;

export function axis (id, component) {
  const componentModel = component.$;
  if (lastAxis) {
    console.log(`sub-axis: "${lastAxis.__id}.${id}"`);
    lastAxis.__axises[id] = componentModel;
  } else {
    console.log(`root-axis: "${id}"`);
    rootAxis = componentModel;
  }
  lastAxis = componentModel;
  lastAxis.__axises = lastAxis.__axises || {};
  lastAxis.__id = id;
}

export function root () {
  return rootAxis;
};

export function select (selector) {
  const parts = selector.split('.');
  let ref = rootAxis;
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    ref = ref.__axises[part];
  }
  return ref;
};