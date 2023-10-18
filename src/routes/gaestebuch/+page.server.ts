import { schemaGuestbook } from '$lib/forms.js';
import { db } from '$lib/server/drizzle';
import { guestbookEntries } from '$lib/server/schema';
import { fail, redirect } from '@sveltejs/kit';
import { desc, sql } from 'drizzle-orm';
import { superValidate } from 'sveltekit-superforms/server';

const pageParam = 'seite';
const paginationAnchor = 'eintraege';
const pageSize = 20;

function getPageIndex(url: URL) {
    if (!url.searchParams.has(pageParam)) return 0;

    const pageValue = Number(url.searchParams.get(pageParam));

    if (Number.isNaN(pageValue) || pageValue < 1) throw redirect(302, '/gaestebuch');

    return pageValue - 1;
}

export async function load({ url }) {
    const pagesIndex = getPageIndex(url);

    async function getPagesTotal() {
        const [{ count }] = await db.select({ count: sql<number>`count(*)::int` }).from(guestbookEntries);

        const pagesTotal = Math.ceil(count / pageSize);

        if (count !== 0 && pagesIndex + 1 > pagesTotal) throw redirect(302, '/gaestebuch');

        return pagesTotal;
    }

    return {
        entries: db
            .select()
            .from(guestbookEntries)
            .limit(pageSize)
            .offset(pagesIndex * pageSize)
            .orderBy(desc(guestbookEntries.timestamp)),
        pageParam,
        paginationAnchor,
        pagesTotal: getPagesTotal(),
        pagesCurrent: pagesIndex + 1,
    };
}

export const actions = {
    async default({ request }) {
        const form = await superValidate(request, schemaGuestbook);

        if (!form.valid) return fail(400, { form });

        console.log('create guestbook entry');

        await db.insert(guestbookEntries).values({ message: form.data.message });

        return { form };
    },
};