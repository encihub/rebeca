import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';

interface Props {
  content: TinaMarkdownContent | TinaMarkdownContent[];
}

export const TextBlock: React.FC<Props> = ({ content }) => (
  <TinaMarkdown
    content={content}
    components={{
      a: (props) => {
        const isExternal = props?.url?.startsWith('http');
        return (
          <a
            target={isExternal ? '_blank' : undefined}
            href={props?.url}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            {...props}
          />
        );
      },
    }}
  />
);
