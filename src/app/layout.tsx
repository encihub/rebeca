import './global.css';

import { Footer, Header, HeaderTitle, Nav, Socials } from '@components';
import { fontClassNames } from './fonts';
import { getPages, getSocials } from '@data';

export const metadata = {
  title: 'Rebeca',
  description: 'Rebeca y bienestar',
};

export default async ({ children }: { children: React.ReactNode }) => {
  const socials = await getSocials();
  const pages = await getPages();
  return (
    <html lang="es">
      <body className={fontClassNames}>
        <Header>
          <Nav pages={pages} />
          <HeaderTitle
            title={metadata.title}
            description={metadata.description}
          />
          <Socials socials={socials} />
        </Header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
