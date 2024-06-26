import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { Container, Link as TLink } from 'theme-ui';
import { Themed } from '@theme-ui/mdx';
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFound = (_props: PageProps) => (
  <Layout>
    <Container>
      <Themed.p>
        Oh, no!
        <br />
        You found a page that doesn't exist.{` `}
        <TLink as={Link} to="/">
          Do you want to visit the homepage?
        </TLink>
      </Themed.p>
    </Container>
  </Layout>
);

export default NotFound;

export const Head: HeadFC = () => <Seo title="404 - Not Found" />;
