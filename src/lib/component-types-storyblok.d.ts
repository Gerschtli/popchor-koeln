import { StoryblokStory } from 'storyblok-generate-ts';

export interface GigStoryblok {
    title: string;
    date: string;
    entryTime?: string;
    placeShort: string;
    place: string;
    price?: string;
    linkTickets?: string;
    description?: any;
    _uid: string;
    component: 'gig';
    [k: string]: any;
}

export interface GigsStoryblok {
    list?: GigStoryblok[];
    _uid: string;
    component: 'gigs';
    [k: string]: any;
}

export interface GigsReferenceStoryblok {
    showOnlyFuture?: boolean;
    reference?: StoryblokStory<GigsStoryblok> | string;
    _uid: string;
    component: 'gigs_reference';
    [k: string]: any;
}

export interface PageStoryblok {
    title: string;
    description?: string;
    body: SectionStoryblok[];
    _uid: string;
    component: 'page';
    uuid?: string;
    [k: string]: any;
}

export interface SectionStoryblok {
    id?: string;
    title: string;
    gigs?: GigsReferenceStoryblok[];
    content?: any;
    showExpandButton?: boolean;
    expandButtonText?: string;
    contentExpand?: any;
    _uid: string;
    component: 'section';
    [k: string]: any;
}
