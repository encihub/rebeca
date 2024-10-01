import Link from 'next/link';

interface Props {
  title?: string;
  description?: string;
}

export const HeaderTitle: React.FC<Props> = ({ title, description }) => (
  <div className="p-8 flex font-bold justify-center text-4xl">
    <Link aria-label={description} href="/" className="text-black">
      {title}
    </Link>
  </div>
);
