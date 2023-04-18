export type ProcessId = u64;
export type Address = u64;

/** Attaches to a process based on its name. */
@external("env", "process_attach")
declare function attachInner(name_ptr: usize, name_len: usize): ProcessId;

/** Detaches from a process. */
@external("env", "process_detach")
export declare function detach(process: ProcessId): void;

/** Checks whether is a process is still open. You should detach from a process
 * and stop using it if this returns `false`. */
@external("env", "process_is_open")
export declare function isOpen(process: ProcessId): bool;

/** Reads memory from a process at the address given. This will write the memory
 * to the buffer given. Returns `false` if this fails. */
@external("env", "process_read")
declare function readInner(
    process: ProcessId,
    address: Address,
    buf_ptr: usize,
    buf_len: usize,
): bool;

/** Gets the address of a module in a process. */
@external("env", "process_get_module_address")
declare function getModuleAddressInner(
    process: ProcessId,
    name_ptr: usize,
    name_len: usize,
): Address;

/** Gets the size of a module in a process. */
@external("env", "process_get_module_size")
declare function getModuleSizeInner(
    process: ProcessId,
    name_ptr: usize,
    name_len: usize,
): u64;

/** Attaches to a process based on its name. */
export function attach(name: string): ProcessId {
    const nameBuffer = String.UTF8.encode(name);
    return attachInner(
        changetype<usize>(nameBuffer), nameBuffer.byteLength,
    );
}

/** Reads memory from a process at the address given. This will write the memory
 * to the buffer given. Returns `false` if this fails. */
export function read(process: ProcessId, address: Address, buf: ArrayBuffer): bool {
    return readInner(
        process, address,
        changetype<usize>(buf), buf.byteLength,
    );
}

/** Gets the address of a module in a process. */
export function getModuleAddress(process: ProcessId, name: string): Address {
    const nameBuffer = String.UTF8.encode(name);
    return getModuleAddressInner(
        process,
        changetype<usize>(nameBuffer), nameBuffer.byteLength,
    );
}

/** Gets the size of a module in a process. */
export function getModuleSize(process: ProcessId, name: string): u64 {
    const nameBuffer = String.UTF8.encode(name);
    return getModuleSizeInner(
        process,
        changetype<usize>(nameBuffer), nameBuffer.byteLength,
    );
}
