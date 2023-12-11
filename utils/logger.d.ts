import type { Workspace } from './workspaces.js'

export class Section {
    logs: string[]

    workspace: Workspace

    constructor({ workspace }: { workspace: Workspace })

    start(line: string, opts?: Parameters<typeof Logger.log>[1]): void

    log(line: string, opts?: Parameters<typeof Logger.log>[1]): void

    end(line: string, opts?: Parameters<typeof Logger.log>[1]): void
}

declare class Build {
    public static Success({
        section,
    }?: {
        section?: string
    }): Promise<typeof import('../.scripts/build-successful.js')>
}

declare class Test {
    public static Success({
        section,
    }?: {
        section?: string
    }): Promise<typeof import('../.scripts/test-successful.js')>
}

export class Logger {
    public static Section: Section
    public static Build: Build
    public static Test: Test

    /**
     * Pretty logs for executed commands and combining sections of commands.
     */
    public static log(
        line: string,
        { section, pre, post }?: { section?: string; pre?: string | null; post?: string | null }
    ): void
}
