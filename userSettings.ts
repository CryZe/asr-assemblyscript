/** Adds a new setting that the user can modify. This will return either the
 * specified default value or the value that the user has set. */
@external("env", "user_settings_add_bool")
declare function addBoolInner(
    key_ptr: usize,
    key_len: usize,
    description_ptr: usize,
    description_len: usize,
    default_value: bool,
): bool;

/** Adds a new setting that the user can modify. This will return either the
 * specified default value or the value that the user has set. */
export function addBool(key: string, description: string, defaultValue: bool): bool {
    const keyBuffer = String.UTF8.encode(key);
    const descriptionBuffer = String.UTF8.encode(description);
    return addBoolInner(
        changetype<usize>(keyBuffer), keyBuffer.byteLength,
        changetype<usize>(descriptionBuffer), descriptionBuffer.byteLength,
        defaultValue,
    );
}
