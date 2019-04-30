/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */

export type EasingFn = (t: number) => number;

// no easing, no acceleration
export const Linear = (t: number) => t;
// accelerating from zero velocity
export const InQuad = (t: number) => t*t;
// decelerating to zero velocity
export const OutQuad= (t: number) => t * (2 - t);
// acceleration until halfway, then deceleration
export const InOutQuad = (t: number) => t<.5 ? 2*t*t : -1+(4-2*t)*t;
// accelerating from zero velocity 
export const InCubic = (t: number) => t*t*t;
// decelerating to zero velocity 
export const OutCubic = (t: number) => (--t)*t*t+1;
// acceleration until halfway, then deceleration 
export const InOutCubic = (t: number) => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
// accelerating from zero velocity 
export const InQuart = (t: number) => t*t*t*t;
// decelerating to zero velocity 
export const OutQuart = (t: number) => 1-(--t)*t*t*t;
// acceleration until halfway, then deceleration
export const InOutQuart = (t: number) => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t;
// accelerating from zero velocity
export const InQuint = (t: number) => t*t*t*t*t;
// decelerating to zero velocity
export const OutQuint = (t: number) => 1+(--t)*t*t*t*t;
// acceleration until halfway, then deceleration 
export const InOutQuint = (t: number) => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t;
// elastic bounce effect at the beginning
export const InElastic = (t: number) => (.04 - .04 / t) * Math.sin(25 * t) + 1;
// elastic bounce effect at the end
export const OutElastic = (t: number) => .04 * t / (--t) * Math.sin(25 * t);
// elastic bounce effect at the beginning and end
export const InOutElastic = (t: number) => (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1;
export const InSin = (t: number) => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2);;
export const OutSin  = (t: number) => Math.sin(Math.PI / 2 * t);;
export const InOutSin = (t: number) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;;