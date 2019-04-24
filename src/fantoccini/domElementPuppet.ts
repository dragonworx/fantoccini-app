import { Puppet } from "./puppet";
import { Property } from "./property";

export class DomElementPuppet extends Puppet {
  left: number;
  top: number;
  width: number;
  height: number;

  constructor(protected readonly target: any) {
    super(target);
  }

  init() {
    this.attachString("left");
    this.attachString("top");
    this.attachString("width");
    this.attachString("height");
  }

  createProperty<T>(key: string, target: any) {
    return new Property<T>(
      key,
      this.target,
      /* getter */
      (target: HTMLElement, key: string) => {
        if (key === "left") {
          return target.offsetLeft;
        } else if (key === "top") {
          return target.offsetTop;
        } else if (key === "width") {
          return target.offsetWidth;
        } else if (key === "height") {
          return target.offsetHeight;
        }
      },
      /* setter */
      (target: HTMLElement, key: string, value: number) =>
        (target.style[key as any] = `${value}px`)
    );
  }
}
