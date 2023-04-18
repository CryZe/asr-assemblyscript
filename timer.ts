export type TimerState = u32;

/** Gets the state that the timer currently is in. */
@external("env", "timer_get_state")
export declare function getState(): TimerState;

/** Starts the timer. */
@external("env", "timer_start")
export declare function start(): void;

/** Splits the current segment. */
@external("env", "timer_split")
export declare function split(): void;

/** Resets the timer. */
@external("env", "timer_reset")
export declare function reset(): void;

/** Sets a custom key value pair. This may be arbitrary information that the
 * auto splitter wants to provide for visualization. */
@external("env", "timer_set_variable")
declare function setVariableInner(
    key_ptr: usize,
    key_len: usize,
    value_ptr: usize,
    value_len: usize,
): void;

/** Sets the game time. */
@external("env", "timer_set_game_time")
export declare function setGameTime(secs: i64, nanos: i32): void;

/** Pauses the game time. This does not pause the timer, only the automatic flow
 * of time for the game time. */
@external("env", "timer_pause_game_time")
export declare function pauseGameTime(): void;

/** Resumes the game time. This does not resume the timer, only the automatic
 * flow of time for the game time. */
@external("env", "timer_resume_game_time")
export declare function resumeGameTime(): void;

/** Sets a custom key value pair. This may be arbitrary information that the auto splitter wants to provide for visualization. */
export function setVariable(key: string, value: string): void {
    const keyBuffer = String.UTF8.encode(key);
    const valueBuffer = String.UTF8.encode(value);
    setVariableInner(
        changetype<usize>(keyBuffer), keyBuffer.byteLength,
        changetype<usize>(valueBuffer), valueBuffer.byteLength,
    );
}
