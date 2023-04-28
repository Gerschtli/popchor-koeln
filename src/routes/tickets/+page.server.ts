import { redirect } from '@sveltejs/kit';

export const load = async () => {
    throw redirect(
        307,
        'https://www.eventbrite.com/e/popchorkoln-soundescape-open-air-doppelkonzert-tickets-620148610187',
    );
};
