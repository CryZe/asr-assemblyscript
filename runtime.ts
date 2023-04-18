function abort(message: usize, fileName: usize, line: u32, column: u32): void {
    unreachable()
}

/** Sets the tick rate of the runtime. This influences the amount of times the
 * `update` function is called per second. */
@external("env", "runtime_set_tick_rate")
export declare function setTickRate(ticks_per_second: f64): void;

/** Prints a log message for debugging purposes. */
@external("env", "runtime_print_message")
declare function printMessageInner(text_ptr: usize, text_len: usize): void;

/** Stores the name of the operating system that the runtime is running on in
 * the buffer given. Returns `false` if the buffer is too small. After this
 * call, no matter whether it was successful or not, the `buf_len_ptr` will be
 * set to the required buffer size. The name is guaranteed to be valid UTF-8 and
 * is not nul-terminated. Example values: `windows`, `linux`, `macos` */
@external("env", "runtime_get_os")
declare function getOSInner(buf_ptr: usize, buf_len_ptr: usize): bool;

/** Stores the name of the architecture that the runtime is running on in the
 * buffer given. Returns `false` if the buffer is too small. After this call, no
 * matter whether it was successful or not, the `buf_len_ptr` will be set to the
 * required buffer size. The name is guaranteed to be valid UTF-8 and is not
 * nul-terminated. Example values: `x86`, `x86_64`, `arm`, `aarch64` */
@external("env", "runtime_get_arch")
declare function getArchInner(buf_ptr: usize, buf_len_ptr: usize): bool;

/** Prints a log message for debugging purposes. */
export function printMessage(text: string): void {
    const buffer = String.UTF8.encode(text);
    printMessageInner(changetype<usize>(buffer), buffer.byteLength);
}

/** Returns the name of the operating system that the runtime is running on in
 * the buffer given. Example values: `windows`, `linux`, `macos` */
export function getOS(): string {
    const lenBuf = new Uint64Array(1);
    getOSInner(0, changetype<usize>(lenBuf.buffer));
    const len = lenBuf.at(0);
    const buffer = new ArrayBuffer(len as i32);
    const result = getOSInner(changetype<usize>(buffer), changetype<usize>(lenBuf.buffer));
    if (result) {
        return String.UTF8.decode(buffer);
    } else {
        return "";
    }
}

/** Returns the name of the architecture that the runtime is running on in the
 * buffer given. Example values: `x86`, `x86_64`, `arm`, `aarch64` */
export function getArch(): string {
    const lenBuf = new Uint64Array(1);
    getArchInner(0, changetype<usize>(lenBuf.buffer));
    const len = lenBuf.at(0);
    const buffer = new ArrayBuffer(len as i32);
    const result = getArchInner(changetype<usize>(buffer), changetype<usize>(lenBuf.buffer));
    if (result) {
        return String.UTF8.decode(buffer);
    } else {
        return "";
    }
}
