import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';

type Props = {
  content: TinaMarkdownContent | TinaMarkdownContent[];
};

export const CallToActionBlock: React.FC<Props> = ({ content }) => (
  <div className="text-center my-8 text-3xl font-featured">
    <TinaMarkdown content={content} />
  </div>
);
