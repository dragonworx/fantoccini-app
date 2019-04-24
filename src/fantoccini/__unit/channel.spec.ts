import { Property } from '../property';
import { Channel } from '../channel';

describe('Channel', () => {
    const KEYFRAME_1_VALUE = 1;
    const KEYFRAME_2_VALUE = 2;
    const KEYFRAME_3_VALUE = 3;
    const KEYFRAME_OFFSET = 1000;
    const property = new Property<number>('x', { x: KEYFRAME_1_VALUE });
    const channel = new Channel(property);

    it('should get default value from target current value', () => {
        expect(channel.isEmpty).toBeTruthy();
        expect(channel.keyframes).toHaveLength(1);
        expect(channel.firstKeyframe.value).toBe(KEYFRAME_1_VALUE);
    });

    it('should handle first and last keyframes special case', () => {
        expect(channel.getKeyframeIndexAtTime(0)).toEqual(0);
    });

    it('should add keyframes after last keyframe', () => {
        channel.addKeyframe(KEYFRAME_OFFSET, KEYFRAME_2_VALUE);
        channel.addKeyframe(KEYFRAME_OFFSET, KEYFRAME_3_VALUE);
        expect(channel.keyframes).toHaveLength(3);
        expect(channel.lastKeyframe.timeMs).toBe(KEYFRAME_OFFSET * 2);
        expect(channel.lastKeyframe.value).toBe(KEYFRAME_3_VALUE);
    });

    it('should handle first and last keyframes special case', () => {
        expect(channel.getKeyframeIndexAtTime(KEYFRAME_OFFSET * 3)).toEqual(2);
    });

    it('should find keyframe at given time', () => {
        expect(channel.getKeyframeIndexAtTime(0)).toEqual(0);
        expect(channel.getKeyframeIndexAtTime(KEYFRAME_OFFSET)).toEqual(1);
        expect(channel.getKeyframeIndexAtTime(KEYFRAME_OFFSET * 2)).toEqual(2);
    });

    it('should track currentIndex over time', () => {
        channel.seek(0);
        channel.update(0);
        expect(channel.currentIndex).toBe(0);
        channel.seek(KEYFRAME_OFFSET / 2);
        channel.update(KEYFRAME_OFFSET / 2);
        expect(channel.currentIndex).toBe(0);
        channel.seek(KEYFRAME_OFFSET);
        channel.update(KEYFRAME_OFFSET);
        expect(channel.currentIndex).toBe(1);
        channel.seek(KEYFRAME_OFFSET * 2);
        channel.update(KEYFRAME_OFFSET * 2);
        expect(channel.currentIndex).toBe(2);
        channel.seek(KEYFRAME_OFFSET * 3);
        channel.update(KEYFRAME_OFFSET * 3);
        expect(channel.currentIndex).toBe(2);
    });
})