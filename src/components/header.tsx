/** @jsx jsx */
import { Flex, jsx, useColorMode } from 'theme-ui';
import { Link } from 'gatsby';
import Navigation from './navigation';
import SocialLinks from './social-links';

type HeaderProps = {
  meta: {
    [key: string]: string;
  };
  nav: {
    title: string;
    slug: string;
  }[];
};

const Header = ({ meta, nav }: HeaderProps) => {
  const [colorMode, setColorMode] = useColorMode<'light' | 'dark'>();
  const isDark = colorMode === `dark`;

  const navEmpty = nav.length === 0;

  return (
    <Flex
      as="header"
      variant="layout.header"
      sx={{
        fontSize: 24,
      }}
    >
      {!navEmpty && <Navigation nav={nav} />}
      <Flex
        sx={{
          fontWeight: `bold`,
          flex: navEmpty ? 1 : [`1 0 50%`, 1],
          justifyContent: navEmpty ? `flex-start` : [`flex-end`, `center`],
        }}
      >
        <Link
          aria-label={`${meta.siteTitle}, Back to homepage`}
          sx={(t) => ({
            ...t.styles?.a,
            color: `text`,
            ':hover': { color: `primary`, textDecoration: `none` },
          })}
          to="/"
        >
          {meta.siteTitle}
        </Link>
      </Flex>
      <div
        sx={{
          a: {
            padding: '16px',
            color: `text`,
            display: `flex`,
            alignItems: `center`,
            '&:hover': {
              color: `primary`,
            },
            '&:not(:first-of-type)': {
              ml: 2,
            },
          },
          justifyContent: `flex-end`,
          flex: 1,
          display: `flex`,
          order: 3,
        }}
      >
        <SocialLinks />
      </div>
    </Flex>
  );
};

export default Header;
