import { StoryblokStory } from 'storyblok-generate-ts';

export interface RichtextStoryblok {
    type: string;
    content?: RichtextStoryblok[];
    marks?: RichtextStoryblok[];
    attrs?: any;
    text?: string;
    [k: string]: any;
}

export interface ExpandableStoryblok {
    expandButtonText?: string;
    contentExpand?: RichtextStoryblok;
    _uid: string;
    component: 'expandable';
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
    showOnlyFuture: boolean;
    reference?: StoryblokStory<GigsStoryblok> | string;
    _uid: string;
    component: 'gigs_reference';
    [k: string]: any;
}

export interface AssetStoryblok {
    _uid?: string;
    id: number | null;
    alt: string | null;
    name: string;
    focus: string | null;
    source: string | null;
    title: string | null;
    filename: string;
    copyright: string | null;
    fieldtype?: string;
    meta_data?: null | {
        [k: string]: any;
    };
    is_external_url?: boolean;
    [k: string]: any;
}

export interface ImageStoryblok {
    image: AssetStoryblok;
    _uid: string;
    component: 'image';
    [k: string]: any;
}

export interface ImageSliderStoryblok {
    images: ImageStoryblok[];
    _uid: string;
    component: 'image_slider';
    [k: string]: any;
}

export interface PageStoryblok {
    id?: string;
    title: string;
    newsletterText?: RichtextStoryblok;
    contactText?: RichtextStoryblok;
    description?: string;
    body?: SectionStoryblok[];
    _uid: string;
    component: 'page';
    uuid?: string;
    [k: string]: any;
}

export interface SectionStoryblok {
    id: string;
    title: string;
    gigs?: GigsReferenceStoryblok[];
    content?: RichtextStoryblok;
    _uid: string;
    component: 'section';
    [k: string]: any;
}

export interface YoutubeVideoStoryblok {
    title: string;
    code: string;
    _uid: string;
    component: 'youtube_video';
    [k: string]: any;
}

export interface YoutubeVideoSliderStoryblok {
    videos: YoutubeVideoStoryblok[];
    _uid: string;
    component: 'youtube_video_slider';
    [k: string]: any;
}
