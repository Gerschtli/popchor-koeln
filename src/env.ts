import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    CONTACT_FORM_RECEIVER_MAIL: { static: true },
    CONTACT_FORM_RECEIVER_MAIL_SINGING: { static: true },
    CONTACT_FORM_RECEIVER_NAME: { static: true },
    CONTACT_FORM_RECEIVER_NAME_SINGING: { static: true },
    CONTACT_FORM_SENDER_MAIL: { static: true },
    CONTACT_FORM_SENDER_NAME: { static: true },
    PUBLIC_STORYBLOK_ACCESS_TOKEN: { public: true, static: true },
    SMTP_HOST: { static: true },
    SMTP_PASSWORD: { static: true },
    SMTP_PORT: { static: true },
    SMTP_SECURE: { static: true },
    SMTP_USERNAME: { static: true },
    SMTP_USE_TEST: { static: true },
    BREVO_API_KEY: { static: true },
    BREVO_LIST_ID: { static: true },
    BREVO_MOCK: { static: true },
});
