import { Page, PageScreenshotOptions } from '@playwright/test'

export const visual = {
    gotoOptions: {
        waitUntil: 'load',
    } as Parameters<Page['goto']>[1],
    snapshotOptions: {} as PageScreenshotOptions,
}
