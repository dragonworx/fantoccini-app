export interface TimelineBound {
    seek (elapsedMs: number): void;     // move playback head to position
    update (elapsedMs: number): void;   // update targets from current state
}