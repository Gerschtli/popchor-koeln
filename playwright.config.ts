import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    // Run all tests in parallel.
    fullyParallel: true,

    // Retry on CI only.
    retries: process.env.CI ? 2 : 0,

    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,

    use: {
        baseURL: 'http://localhost:4173/',
    },
    webServer: {
        command: 'pnpm run build && pnpm run preview',
        port: 4173,
    },
    testDir: 'tests',
};

export default config;
