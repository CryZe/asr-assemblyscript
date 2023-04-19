import * as Process from './process';

export class MemoryWatcher<T> {
    /**  Current value of the watcher. */
    current: number;
    /**  The value of the watcher from the previous update cycle. */
    old: number;
    protected type: string;
    protected module: string;
    protected address: Process.Address;

    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {MemoryWatcher} The instance of a memory watcher with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        this.type = nameof<T>(); // Get watcher type as string
        this.module = moduleName;
        this.address = address;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        let bufferSize = 4; // default 4 bytes of buffer
        let baseAddress = Process.getModuleAddress(processId, this.module);

        // Set the buffer size depending on the type
        // AssemblyScript doesn't support switch cases on strings yet, so good ol' if chain it is
        if (this.type == ('bool' || 'i8' || 'u8')) {
            bufferSize = 1;
        } else if (this.type == ('i16' || 'u16')) {
            bufferSize = 2;
        } else if (this.type == ('i32' || 'u32' || 'f32' || 'isize' || 'usize')) {
            bufferSize = 4;
        } else if (this.type == ('i64' || 'u64' || 'f64')) {
            bufferSize = 8;
        }


        const buf = new ArrayBuffer(bufferSize);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = usize.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }

    /**
     * Check if the value changed in this update cycle.
     * @returns {bool} Whether the value changed this update cycle or not.
     */
    get changed(): bool {
        return this.current != this.old;
    }
}