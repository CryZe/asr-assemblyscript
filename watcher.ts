import * as Process from './process';

class Watcher<T> {
    /**  Current value of the watcher. */
    current: T;
    /**  The value of the watcher from the previous update cycle. */
    old: T;
    protected module: string;
    protected address: Process.Address;

    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher} The instance of a memory watcher with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        this.module = moduleName;
        this.address = address;
    }

    /**
     * Check if the value changed in this update cycle.
     * @returns {bool} Whether the value changed this update cycle or not.
     */
    get changed(): bool {
        return this.current != this.old;
    }
}

export class BoolWatcher extends Watcher<bool> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<bool>} The instance of a memory watcher of the type `bool` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = false;
        this.old = false;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(1);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = bool.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class I8Watcher extends Watcher<i8> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<i8>} The instance of a memory watcher of the type `i8` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(1);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = i8.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class I16Watcher extends Watcher<i16> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<i16>} The instance of a memory watcher of the type `i16` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(2);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = i16.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class I32Watcher extends Watcher<i32> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<i32>} The instance of a memory watcher of the type `i32` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(4);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = i32.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class I64Watcher extends Watcher<i64> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<i64>} The instance of a memory watcher of the type `i64` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(8);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = i64.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class ISizeWatcher extends Watcher<isize> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<isize>} The instance of a memory watcher of the type `isize` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(4);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = isize.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class U8Watcher extends Watcher<u8> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<u8>} The instance of a memory watcher of the type `u8` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(1);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = u8.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class U16Watcher extends Watcher<u16> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<u16>} The instance of a memory watcher of the type `u16` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(2);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = u16.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class U32Watcher extends Watcher<u32> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<u32>} The instance of a memory watcher of the type `u32` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(4);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = u32.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class U64Watcher extends Watcher<u64> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<u64>} The instance of a memory watcher of the type `u64` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(8);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = u64.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class USizeWatcher extends Watcher<usize> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<usize>} The instance of a memory watcher of the type `usize` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0;
        this.old = 0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(4);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = usize.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class F32Watcher extends Watcher<f32> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<f32>} The instance of a memory watcher of the type `f32` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0.0;
        this.old = 0.0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(4);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = f32.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class F64Watcher extends Watcher<f64> {
    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative address to read from.
     * @returns {Watcher<f64>} The instance of a memory watcher of the type `f64` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address) {
        super(moduleName, address);
        this.current = 0.0;
        this.old = 0.0;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(8);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            const value = f64.parse(String.UTF16.decode(buf));
            if (this.current != value) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}

export class StringWatcher {
    /**  Current value of the watcher. */
    current: string = "";
    /**  The value of the watcher from the previous update cycle. */
    old: string = "";
    protected module: string;
    protected address: Process.Address;
    protected length: u32;
    protected useUTF16: bool;

    /**
     * Creates a watcher with the specified type.
     * @param moduleName Name of the module to read from.
     * @param address Relative base address to use.
     * @param length The length of the string.
     * @param useUTF16 Decode the string as UTF-16. Defaults to `false`.
     * @returns {Watcher<string>} The instance of a memory watcher of type `string` with the specified parameters.
     */
    constructor(moduleName: string, address: Process.Address, length: u32, useUTF16: bool = false) {
        this.module = moduleName;
        this.address = address;
        this.length = length;
        this.useUTF16 = useUTF16;
    }

    /**
     * Updates the watcher and returns `true` if the value has changed.
     * @param processId ID of the process to read from.
     * @returns {bool} Whether the value changed in the current update cycle.
     */
    update(processId: Process.ProcessId): bool {
        this.old = this.current;
        let changed = false;
        const bufferSize = this.length;
        const baseAddress = Process.getModuleAddress(processId, this.module);

        const buf = new ArrayBuffer(bufferSize);

        if (Process.read(processId, (baseAddress + this.address), buf)) {
            let value = "";
            if (this.useUTF16) {
                value = String.UTF16.decode(buf);
            } else {
                value = String.UTF8.decode(buf, true);
            }

            if (value != this.current) {
                changed = true;
            }
            this.current = value;
        }

        return changed;
    }
}