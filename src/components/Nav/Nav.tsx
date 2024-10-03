'use client';

import * as React from 'react';
import Link from 'next/link';
import { useResponsive, configResponsive } from 'ahooks';

import type { IPage } from '@declarations';
import { NavButton } from '../NavButton';

interface Props {
  pages: IPage[] | undefined;
}

configResponsive({
  lg: 1024,
});

export const Nav: React.FC<Props> = ({ pages }) => {
  const responsive = useResponsive();
  const [isOpen, setOpen] = React.useState(false);
  return (
    <nav className="p-0 m-0 flex flex-col lg:flex-row justify-center lg:justify-start items-center">
      <NavButton
        isOpen={isOpen}
        toggle={() => {
          setOpen((prev) => !prev);
        }}
      />
      {(isOpen || responsive?.['lg']) && (
        <ul
          className={`flex flex-col lg:flex-row 
justify-center lg:justify-start
animate-fade-down
p-0 m-0
`}
        >
          {pages &&
            pages.map((page) => (
              <li key={page.title} className="list-none p-0 m-0">
                <Link
                  href={`/${page.filename}`}
                  className="p-4 flex items-center text-black justify-center lg:justify-start"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {page.title}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </nav>
  );
};
