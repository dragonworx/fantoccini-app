// import { Property } from '../../property';

// describe('Property', () => {
//     it('should get from target', () => {
//         const property = new Property('x', { x: 1 });
//         expect(property.value).toBe(1);
//     });

//     it('should set target', () => {
//         const property = new Property('x', { x: 1 });
//         property.value = 2;
//         expect(property.value).toBe(2);
//     });

//     it('should use getter if given', () => {
//         const property = new Property('x', { x: 1 }, (target, key) => 5);
//         expect(property.value).toBe(5);
//     });

//     it('should use setter if given', () => {
//         const property = new Property('x', { x: 1 }, undefined, (target, value) => target['x'] = 6);
//         property.value = 2;
//         expect(property.value).toBe(6);
//     });
// });