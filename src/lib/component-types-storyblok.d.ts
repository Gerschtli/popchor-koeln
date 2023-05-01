import {StoryblokStory} from 'storyblok-generate-ts'

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
  component: "gig";
  [k: string]: any;
}

export interface PageStoryblok {
  title: string;
  description?: string;
  body: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SectionStoryblok {
  id?: string;
  title: string;
  content?: any;
  showExpandButton?: boolean;
  expandButtonText?: string;
  contentExpand?: any;
  gigs?: GigStoryblok[];
  _uid: string;
  component: "section";
  [k: string]: any;
}
