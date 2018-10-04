let lastAxis;
let rootAxis;
const axisPaths = {};

export function enterAxis (id, component) {
  const componentModel = component.$;
  if (lastAxis) {
    lastAxis.__axises[id] = componentModel;
    componentModel.__path = `${lastAxis.__path}.${id}`;
    console.log(`sub-axis ~ id: "${id}" path: "${componentModel.__path}"`);
  } else {
    rootAxis = componentModel;
    componentModel.__path = id;
    console.log(`root-axis ~ id: "${id}" path: "${componentModel.__path}"`);
  }
  lastAxis = componentModel;
  lastAxis.__axises = lastAxis.__axises || {};
  lastAxis.__id = id;
  axisPaths[lastAxis.__path] = lastAxis;
};

export function exitAxis (id, component) {
  const path = component.$.__path;
  const axis = axisPaths[path];
  delete axisPaths[path];
  if (rootAxis === axis) {
    rootAxis = undefined;
  }
};

export function root () {
  return rootAxis;
};

export function select (selector) {
  const axis = axisPaths[selector];
  if (!axis) {
    throw new Error(`Axis not found "${selector}"`)
  }
  return axis;
};

export * from './component';
export * from './model';