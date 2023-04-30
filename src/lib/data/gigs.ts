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
            >>>&nbsp;<a href="https://www.piece-of-peace.de" target="_blank" rel="noopener noreferrer">piece-of-peace.de</a>
        `,
        linkTickets: 'http://projekt42.info/tickets/',
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
            >>>&nbsp;<a href="https://www.vocalcrew.com" target="_blank" rel="noopener noreferrer">vocalcrew.com</a>
        `,
        linkTickets: 'https://www.vocalcrew.com/termine/tickets/',
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
            >>>&nbsp;<a href="https://www.jazzchorruhr.de" target="_blank" rel="noopener noreferrer">jazzchorruhr.de</a>
        `,
        entryTime: 'ab 15:30 Uhr',
    },
    {
        date: new Date('2023-06-23'),
        title: 'Doppelkonzert /m Soundescape',
        time: '23. Juni 2023 um 20:00',
        place: ['Scala-Club', 'Uhlandstraße 9', '51379 Leverkusen'],
        description: `
            Doppelkonzert mit dem vielseitigen A-cappella-Quintett
            <a href="https://www.facebook.com/Soundescape.acappella" target="_blank" rel="noopener noreferrer">Soundescape</a>
            in schöner Club-Atmosphäre.
        `,
    },
    {
        date: new Date('2023-06-24'),
        title: 'Doppelkonzert /m Soundescape',
        time: '24. Juni 2023 um 20:00',
        place: ['Bürgerhaus Köln-Kalk', 'Kalk-Mühlheimer Str. 58', '51103 Köln'],
        price: '10/16,50 €',
        description: `
            Doppelkonzert mit dem vielseitigen A-cappella-Quintett
            <a href="https://www.facebook.com/Soundescape.acappella" target="_blank" rel="noopener noreferrer">Soundescape</a>
            auf der wunderbaren Open-Air-Bühne vom Bürgerhaus Köln-Kalk.
        `,
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
