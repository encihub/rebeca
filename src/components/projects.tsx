/** @jsx jsx */
import type { HeadFC } from 'gatsby';
import { jsx, Container } from 'theme-ui';
import { Themed } from '@theme-ui/mdx';
import { useTrail } from 'react-spring';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from './layout';
import ProjectItem from './project-item';
import SEO from './seo';

export type EmmaProjectsProps = {
  projects: {
    color: string;
    slug: string;
    title: string;
    service: string;
    client: string;
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  }[];
};

const Projects: React.FC<EmmaProjectsProps> = ({ projects }) => {
  const trail = useTrail(projects.length, {
    from: { height: `0%` },
    to: { height: `100%` },
  });

  return (
    <Layout
      sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
        width: `100%`,
      }}
    >
      {trail.map((style, index) => (
        <ProjectItem
          style={style}
          eager={index === 0}
          node={projects[index]}
          key={projects[index].slug}
        />
      ))}
    </Layout>
  );
};

export default Projects;

export const Head: HeadFC = () => <SEO />;
