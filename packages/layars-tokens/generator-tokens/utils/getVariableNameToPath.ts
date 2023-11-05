/**
 * Converts the variable name to a path in a object
 *
 * @param name - name of the variable
 */
const getVariableNameToPath = (name: string) =>
    name
        // Replace / with .
        .replace(/\//g, '.')
        // Replace - with _
        .replace(/-/g, '_')

export { getVariableNameToPath }
