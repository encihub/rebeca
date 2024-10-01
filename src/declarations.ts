import { type TinaMarkdownContent } from 'tinacms/dist/rich-text';

export interface ISocial {
  title?: string | undefined;
  icon?: string | undefined;
  url?: string | undefined;
}

export interface IService {
  title?: string | undefined;
  body?: TinaMarkdownContent | TinaMarkdownContent[];
  cover?: string | null | undefined;
  color?: string | null | undefined;
  priority?: number | null | undefined;
  date?: string | undefined;
  filename?: string | undefined;
}

export interface IPage {
  title?: string | undefined;
  blocks?: any[];
  filename?: string | undefined;
}
