/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import BGImage from './bg-image';

type HeroProps = {
  children: React.ReactNode;
  color?: string;
  slim?: boolean;
  image: IGatsbyImageData;
};

const Hero = ({ children, color = ``, image, slim = false }: HeroProps) => (
  <section
    sx={{
      position: `relative`,
      height: [`200px`, `200px`],
      maxHeight: `1200px`,
      width: `100%`,
      overflow: `hidden`,
    }}
  >
    <BGImage color={color} slim={slim}>
      <GatsbyImage image={image} alt="" />
    </BGImage>
    <div style={{ marginTop: -22 }}>{children}</div>
  </section>
);

export default Hero;
