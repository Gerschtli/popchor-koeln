import type { Gig } from '$lib/types';

export const gigs: Gig[] = [
    {
        date: new Date('2023-04-21'),
        title: 'Doppelkonzert Mönchengladbach /m Piece of Peace',
        time: '21. April 2023 um 20:15',
        place: ['Projekt 42', 'Waldhausener Str. 40-42', '41061 Mönchengladbach'],
        price: '10/15/20 €',
        description: `
            Unser kleines Konzertwochenende im April startet in Mönchengladbach mit dem wunderbaren Vokalensemble
            Piece of Peace!
        `,
        linkTickets: 'http://projekt42.info/tickets/',
        link: 'https://www.piece-of-peace.de',
        linkText: 'piece-of-peace.de',
        entryTime: 'ab 19:30 Uhr',
    },
    {
        date: new Date('2023-04-22'),
        title: 'Doppelkonzert Dortmund /m Vocal Crew',
        time: '22. April 2023 um 19:00',
        place: ['Georgschule e.V.', 'Mergelteichstr. 63', '44225 Dortmund'],
        price: '12/14 €',
        description: `
            Der zweite Stopp unserer kleinen Tour ist in Dortmund bei der grandiosen Vocal Crew, die letztes Jahr beim
            Sing & Swing Festival auch zum Meisterchor gekürt wurde!
        `,
        linkTickets: 'https://www.vocalcrew.com/termine/tickets/',
        link: 'https://www.vocalcrew.com',
        linkText: 'vocalcrew.com',
        entryTime: 'ab 18:00 Uhr',
    },
    {
        date: new Date('2023-04-23'),
        title: 'Doppelkonzert Bochum /m Jazzchor Ruhr',
        time: '23. April 2023 um 16:00',
        place: ['Autobahnkirche Ruhr', 'Dorstener Straße 263', '44809 Bochum'],
        price: '5/10 €',
        description: `
            Aller guten Dinge sind drei! Und so singen wir am Sonntag unseres Tour-Wochenendes auch noch in Bochum mit dem Jazzchor Ruhr!!
        `,
        link: 'https://www.jazzchorruhr.de',
        linkText: 'jazzchorruhr.de',
        entryTime: 'ab 15:30 Uhr',
    },
    {
        date: new Date('2023-06-23'),
        title: 'Doppelkonzert /m Soundescape',
        time: '23. Juni 2023 um 20:00',
        place: ['Scala-Club', 'Uhlandstraße 9', '51379 Leverkusen'],
        description: 'Details zum VVK folgen in Kürze.',
    },
    {
        date: new Date('2023-06-24'),
        title: 'Doppelkonzert /m Soundescape',
        time: '24. Juni 2023 um 20:00',
        place: ['Bürgerhaus Köln-Kalk', 'Kalk-Mühlheimer Str. 58', '51103 Köln'],
        price: '10/16,50 €',
        description: 'Details zum VVK folgen in Kürze.',
        linkTickets: 'https://www.eventbrite.com/e/popchorkoln-soundescape-open-air-doppelkonzert-tickets-620148610187',
        entryTime: 'ab 19:30 Uhr',
    },
    {
        date: new Date('2023-11-04'),
        title: '10 - Das Jubiläumskonzert!',
        time: '4. November 2023 um 20:00',
        place: ['Friedrich-Wilhelm-Gymnasium', 'Severinstraße 241', '50676 Köln'],
        description: 'Save the date!!!',
    },
];
