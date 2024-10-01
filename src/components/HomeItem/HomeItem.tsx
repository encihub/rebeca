'use client';

import Link from 'next/link';
import Image from 'next/image';
import chroma from 'chroma-js';
import * as React from 'react';

import { IService } from '@declarations';

interface Props {
  service: IService;
  index: number;
}

export const HomeItem: React.FC<Props> = ({ service, index }) => {
  const [hover, setHover] = React.useState(false);
  const fromColor = chroma(String(service.color)).alpha(1);
  const toColor = chroma(String(service.color)).alpha(0);
  return (
    <Link
      href={`/servicios/${service.filename}`}
      className={`relative h-[100vw] md:h-[50vw] lg:h-[33vw] animate-fade-down ${
        index === 1 ? 'animate-delay-100' : ''
      }${
        index === 2 ? 'animate-delay-200' : ''
      } hover:scale-90 overflow-hidden`}
      key={service.title}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Image
        src={service.cover as string}
        alt={service.title as string}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div
        className={`absolute w-full bottom-0 left-0 m-0 p-8 h-1/2 flex items-end ${
          hover ? 'h-full' : ''
        } transition-all duration-200`}
        style={{
          backgroundColor: String(service.color),
          background: `linear-gradient(0deg, ${fromColor} 0%, ${toColor} 100%)`,
        }}
      >
        <h2 className="p-0 m-0 text-white">{service.title}</h2>
      </div>
    </Link>
  );
};
