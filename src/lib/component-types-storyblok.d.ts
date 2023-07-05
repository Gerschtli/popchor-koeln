import { StoryblokStory } from 'storyblok-generate-ts';

export interface RichtextStoryblok {
    type: string;
    content?: RichtextStoryblok[];
    marks?: RichtextStoryblok[];
    attrs?: any;
    text?: string;
    [k: string]: any;
}

export interface GigStoryblok {
    title: string;
    date: string;
    entryTime?: string;
    placeShort: string;
    place: string;
    price?: string;
    linkTickets?: string;
    description?: RichtextStoryblok;
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
    content?: RichtextStoryblok;
    showExpandButton?: boolean;
    expandButtonText?: string;
    contentExpand?: RichtextStoryblok;
    _uid: string;
    component: 'section';
    [k: string]: any;
}
