interface Props {
  children: React.ReactNode;
}

export const HeadingBlock: React.FC<Props> = ({ children }) => (
  <h2 className="text-center">{children}</h2>
);
