import {StoryblokStory} from 'storyblok-generate-ts'

export interface PageStoryblok {
  body: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SectionStoryblok {
  id?: string;
  title: string;
  content: any;
  expandButtonText?: string;
  contentExpand?: any;
  _uid: string;
  component: "section";
  [k: string]: any;
}
