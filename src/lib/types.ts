export enum FormId {
    contact = 'contact',
    newsletter = 'newsletter',
}

export type FormStatus = 'ready' | 'loading' | 'success' | 'error';

export type Gig = {
    date: Date;
    title: string;
    time: string;
    place: string[];
    price?: string;
    description: string;
    linkTickets?: string;
    link?: string;
    linkText?: string;
    entryTime?: string;
};
