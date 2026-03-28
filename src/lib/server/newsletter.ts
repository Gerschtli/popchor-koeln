import { BREVO_API_KEY, BREVO_LIST_ID, BREVO_MOCK } from '$env/static/private';

async function apiPost(url: string, body: Record<string, any>) {
    const response = await fetch(`https://api.brevo.com/v3${url}`, {
        headers: {
            Accept: 'application/json',
            'api-key': BREVO_API_KEY,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw response;
    }
}

export async function subscribeToNewsletter(email: string) {
    if (BREVO_MOCK) {
        console.info(`mocked subscription to newsletter. email=${email}`);
        return true;
    }

    try {
        await apiPost(`/contacts`, {
            email: email,
            listIds: [parseInt(BREVO_LIST_ID)],
            updateEnabled: true,
        });

        console.info('successfully subscribed to newsletter.');
        return true;
    } catch (e) {
        console.error('subscribe to newsletter failed.', e);
        return false;
    }
}
