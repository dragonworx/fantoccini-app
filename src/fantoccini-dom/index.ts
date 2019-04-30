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

export class DomNumericPuppetString extends PuppetString<HTMLElement, number> {
    get value () {
        return (this.target as any)[this.key];
    }

    set value (value: number) {
        this.target.style.setProperty(this.key, `${value}`);
    }
}

const targetPixelStringKeys = [
    'left',
    'top',
    'right',
    'bottom',
];

const numericStringKeys = [
    'opacity',
];

export class DomPuppet extends Puppet<HTMLElement> {
    createString (key: string) {
        const { target } = this;
        if (targetPixelStringKeys.indexOf(key) > -1) {
            return new DomPixelPuppetString(target, key);
        } else if (numericStringKeys.indexOf(key) > -1) {
            return new DomNumericPuppetString(target, key);
        }
        throw new Error(`DomPuppet ~ Unsupported string key "${key}"`);
    }
}