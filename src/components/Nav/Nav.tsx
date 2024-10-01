import Link from 'next/link';

import type { IPage } from '@declarations';

interface Props {
  pages: IPage[] | undefined;
}

export const Nav: React.FC<Props> = ({ pages }) => (
  <nav className="p-0 m-0">
    <ul className="flex flex-1 justify-center md:justify-start p-0 m-0">
      {pages &&
        pages.map((page) => (
          <li key={page.title} className="list-none p-0 m-0">
            <Link
              href={`/${page.filename}`}
              className="p-[16px] flex items-center text-black"
            >
              {page.title}
            </Link>
          </li>
        ))}
    </ul>
  </nav>
);
