import { Puppet } from '../puppet';

describe('Puppet', () => {
    const setup = (target: any = {}) => {
        const puppet = new Puppet(target);
        Object.keys(target).forEach(key => {
            puppet.attachString(key);
        });
        return puppet;
    };

    it('should set from target', () => {
        const puppet = setup({ x: 1, y: 2 });
        expect(puppet.get('x')).toBe(1);
        expect(puppet.get('y')).toBe(2);
    });
})