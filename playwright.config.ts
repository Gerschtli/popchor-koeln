import type { PlaywrightTestConfig } from '@playwright/test';

const port = process.env.CI ? 4173 : 5173;
const baseURL = `http://localhost:${port}`;

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    fullyParallel: true,
    workers: process.env.CI ? 1 : undefined,
    use: {
        baseURL,
        ignoreHTTPSErrors: true,
    },
    webServer: {
        env: {
            MAILCHIMP_MOCK: '1',
            SMTP_USE_TEST: '1',
        },
        command: 'pnpm run build && pnpm run preview',
        reuseExistingServer: !process.env.CI,
        ignoreHTTPSErrors: true,
        url: baseURL,
    },
    testDir: 'tests',
    testMatch: /(.+\.)?(test|spec)\.[jt]s/,
    reporter: process.env.CI ? 'github' : 'list',
};

export default config;
