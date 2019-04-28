/**
 * fantoccin-dom
 */
import { PuppetString, Puppet } from "../fantoccini";

const numericStyleValue = (target: HTMLElement, key: string) => {
    const v = parseFloat(target.style.getPropertyValue(key));
    return isNaN(v) ? 0 : v;
}

export class DomPixelPuppetString extends PuppetString<HTMLElement, number> {
    get value () {
        return numericStyleValue(this.target, this.key);
    }

    set value (value: number) {
        this.target.style.setProperty(this.key, `${value}px`);
    }
}

export class DomPuppet extends Puppet<HTMLElement> {
    createString (key: string) {
        if (key === 'left') {
            return new DomPixelPuppetString(this.target, key);
        }
        return super.createString(key);
    }
}