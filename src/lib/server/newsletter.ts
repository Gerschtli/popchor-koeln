import { MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, MAILCHIMP_SERVER_PREFIX } from '$env/static/private';

const apiPut = async (url: string, body: Record<string, string>) => {
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
};

export const subscribeToNewsletter = async (email: string) => {
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
};
