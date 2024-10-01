import { FaEnvelope, FaPhone } from 'react-icons/fa';

import type { ISocial } from '@declarations';

interface Props {
  socials: ISocial[] | undefined;
}

const iconMap = {
  FaPhone: FaPhone,
  FaEnvelope: FaEnvelope,
};

export const Socials: React.FC<Props> = ({ socials }) => (
  <div className="flex flex-1 justify-center md:justify-end">
    {socials &&
      socials.map((social) => {
        const Icon = iconMap[social.icon as 'FaPhone' | 'FaEnvelope'];
        return (
          <a
            key={social.title}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.title}
            className="p-[16px] flex items-center text-black"
          >
            <Icon />
          </a>
        );
      })}
  </div>
);
