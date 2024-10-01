'use client';

import { useTina, tinaField } from 'tinacms/dist/react';

import type { PageQuery } from '@tina/types';
import type { IService, ISocial } from '@declarations';
import { HeadingBlock } from '../HeadingBlock';
import { TextBlock } from '../TextBlock';
import { CallToActionBlock } from '../CallToActionBlock';
import { Contained } from '@components';

interface Props {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
  socials?: ISocial[];
  services?: IService[];
}

export const PageBlock: React.FC<Props> = ({ socials, services, ...props }) => {
  const { data } = useTina(props);
  return (
    <>
      <Contained>
        <h1 className="animate-fade-down mb-16">{data.page.title}</h1>
      </Contained>

      {data?.page?.blocks?.map((block, index) => {
        const key = `${block?.__typename}-${index}`;
        return block?.__typename === 'PageBlocksText' ? (
          <Contained
            key={key}
            data-tina-field={tinaField(block, 'text')}
            className="animate-fade-down"
          >
            <TextBlock content={block.text} />
          </Contained>
        ) : block?.__typename === 'PageBlocksHeading' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'heading')}>
            <HeadingBlock>{block.heading}</HeadingBlock>
          </Contained>
        ) : block?.__typename === 'PageBlocksCta' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'text')}>
            <CallToActionBlock content={block.text} />
          </Contained>
        ) : (
          ''
        );
      })}
    </>
  );
};
