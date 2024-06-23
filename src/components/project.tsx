/** @jsx jsx */
import { animated, useSpring, config } from 'react-spring';
import type { HeadFC, PageProps } from 'gatsby';
import { Container, jsx, Flex, Heading } from 'theme-ui';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from './layout';
import Hero from './hero';
import SEO from './seo';

export type EmmaProjectProps = {
  project: {
    excerpt: string;
    client: string;
    color: string;
    date: string;
    service: string;
    slug: string;
    title: string;
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
        resize: {
          src: string;
        };
      };
    };
  };
};

const Project: React.FC<
  React.PropsWithChildren<PageProps<EmmaProjectProps>>
> = ({ data: { project }, children }) => {
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  });
  const contentProps = useSpring({
    config: config.slow,
    delay: 300,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <Hero
        image={project.cover.childImageSharp.gatsbyImageData}
        color={project.color}
        slim
      >
        <Flex
          sx={{
            position: `absolute`,
            bottom: 0,
            left: 0,
            right: 0,
            maxWidth: `5xl`,
            margin: `0 auto`,
            padding: 4,
            zIndex: 2,
            flexDirection: `column`,
          }}
        >
          <animated.div style={titleProps}>
            <Heading as="h1" variant="styles.h1">
              {project.title}
            </Heading>
          </animated.div>
        </Flex>
      </Hero>
      <Container>
        <animated.div style={contentProps}>{children}</animated.div>
      </Container>
    </Layout>
  );
};

export default Project;

export const Head: HeadFC<EmmaProjectProps> = ({ data: { project } }) => (
  <SEO
    title={project.title}
    description={project.excerpt}
    pathname={project.slug}
    image={project.cover.childImageSharp.resize!.src}
  ></SEO>
);
