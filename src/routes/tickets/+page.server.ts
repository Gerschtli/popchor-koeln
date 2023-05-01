import { redirect } from '@sveltejs/kit';

export async function load() {
    throw redirect(
        307,
        'https://www.eventbrite.com/e/popchorkoln-soundescape-open-air-doppelkonzert-tickets-620148610187',
    );
}
