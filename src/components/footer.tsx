/** @jsx jsx */
import { Box, jsx } from 'theme-ui';

const Footer = () => (
  <Box as="footer" variant="layout.footer">
    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
  </Box>
);

export default Footer;
