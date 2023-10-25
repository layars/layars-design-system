import { setCustomElementsManifest, type Preview } from '@storybook/web-components'

import shared from '@layars/root/.storybook/preview.ts'

import customElements from '../.manifest/custom-elements.json'

setCustomElementsManifest(customElements)

const preview: Preview = {
    parameters: {
        ...shared.parameters,
    },
    globalTypes: {
        ...shared.globalTypes,
    },
    decorators: shared.decorators,
}

export default preview
