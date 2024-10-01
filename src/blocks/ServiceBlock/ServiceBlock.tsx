'use client';

import { useTina, tinaField } from 'tinacms/dist/react';

import type { ServiceQuery } from '@tina/types';
import { HeadingBlock } from '../HeadingBlock';
import { TextBlock } from '../TextBlock';
import { CallToActionBlock } from '../CallToActionBlock';
import { Contained } from '@components';

interface Props {
  data: ServiceQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export const ServiceBlock: React.FC<Props> = ({ ...props }) => {
  const { data } = useTina(props);
  return (
    <>
      <Contained>
        <h1 className="animate-fade-down mb-16">{data.service.title}</h1>
      </Contained>

      {data?.service?.blocks?.map((block, index) => {
        const key = `${block?.__typename}-${index}`;
        return block?.__typename === 'ServiceBlocksText' ? (
          <Contained
            key={key}
            data-tina-field={tinaField(block, 'text')}
            className="animate-fade-down"
          >
            <TextBlock content={block.text} />
          </Contained>
        ) : block?.__typename === 'ServiceBlocksHeading' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'heading')}>
            <HeadingBlock>{block.heading}</HeadingBlock>
          </Contained>
        ) : block?.__typename === 'ServiceBlocksCta' ? (
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
