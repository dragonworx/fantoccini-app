/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */
export const Easing = {
  // no easing, no acceleration
  linear: function (t: number) { return t },
  // accelerating from zero velocity
  inQuad: function (t: number) { return t*t },
  // decelerating to zero velocity
  outQuad: function (t: number) { return t*(2-t) },
  // acceleration until halfway, then deceleration
  inOutQuad: function (t: number) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  // accelerating from zero velocity 
  inCubic: function (t: number) { return t*t*t },
  // decelerating to zero velocity 
  outCubic: function (t: number) { return (--t)*t*t+1 },
  // acceleration until halfway, then deceleration 
  inOutCubic: function (t: number) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  // accelerating from zero velocity 
  inQuart: function (t: number) { return t*t*t*t },
  // decelerating to zero velocity 
  outQuart: function (t: number) { return 1-(--t)*t*t*t },
  // acceleration until halfway, then deceleration
  inOutQuart: function (t: number) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  // accelerating from zero velocity
  inQuint: function (t: number) { return t*t*t*t*t },
  // decelerating to zero velocity
  outQuint: function (t: number) { return 1+(--t)*t*t*t*t },
  // acceleration until halfway, then deceleration 
  inOutQuint: function (t: number) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t },
  // elastic bounce effect at the beginning
  inElastic: function (t: number) { return (.04 - .04 / t) * Math.sin(25 * t) + 1 },
  // elastic bounce effect at the end
  outElastic: function (t: number) { return .04 * t / (--t) * Math.sin(25 * t) },
  // elastic bounce effect at the beginning and end
  inOutElastic: function (t: number) { return (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1 },
  inSin: function (t: number) { return 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2); },
  outSin : function (t: number) { return Math.sin(Math.PI / 2 * t); },
  inOutSin: function (t: number) { return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2; },
}