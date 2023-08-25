export const config = {
    values: ['description', 'type', 'value'],
    artifacts: [
        { out: 'color/light', key: 'color.light', theme: 'light' },
        { out: 'color/dark', key: 'color.dark', theme: 'dark' },
        { out: 'color/shared', key: 'color.shared', theme: 'shared' },
        { out: 'effect', key: 'effect', theme: 'shared' },
        { out: 'typography', key: 'typography', theme: 'shared' },
    ],
}
