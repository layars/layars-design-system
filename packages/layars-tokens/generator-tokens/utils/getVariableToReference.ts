import { getVariableNameToPath } from './getVariableNameToPath.js'

/**
 * Gets variable from a reference, if needed
 *
 * @param variable - variable to get reference from
 */
const getVariableToReference = (variable: { value: string | number | { name: string } }) => {
    if (typeof variable.value === 'number' || typeof variable.value === 'string') {
        return variable.value
    } else {
        return `{${
            // Name of the value of the variable
            getVariableNameToPath(variable.value.name)
        }}`
    }
}

export { getVariableToReference }
