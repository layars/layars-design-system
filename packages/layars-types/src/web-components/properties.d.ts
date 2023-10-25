import { LitElement } from 'lit'

export interface LayarsBaseProperties {
    /**
     * Returns the value of element's slot content attribute. Can be set to change it.
     */
    slot: LitElement['slot']
}
