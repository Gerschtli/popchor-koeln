import { MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, MAILCHIMP_MOCK, MAILCHIMP_SERVER_PREFIX } from '$env/static/private';

async function apiPut(url: string, body: Record<string, string>) {
    const response = await fetch(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0${url}`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw response;
    }
}

export async function subscribeToNewsletter(email: string) {
    if (MAILCHIMP_MOCK) {
        console.info(`mocked subscription to newsletter. email=${email}`);

        return true;
    }

    try {
        await apiPut(`/lists/${MAILCHIMP_AUDIENCE_ID}/members/${encodeURIComponent(email)}`, {
            email_address: email,
            status: 'subscribed',
        });

        console.info('successfully subscribed to newsletter.');

        return true;
    } catch (e) {
        console.error('subscribe to newsletter failed.', e);

        return false;
    }
}
