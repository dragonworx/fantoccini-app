export interface TimelineBound {
    seek (elapsedMs: number): void;     // move playback head to position
    update (elapsedMs: number): void;   // update targets with current chanel values
}

export enum RepeatDirection {
    Forward,
    Backward,
}

export interface PlaybackOptions {
    repeat?: boolean;
    repeatDirection?: RepeatDirection;
}