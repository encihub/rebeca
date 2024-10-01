interface Props {
  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => (
  <header className="grid grid-col-1 md:grid-cols-3 text-2xl px-8 py-4 items-center">{children}</header>
);
