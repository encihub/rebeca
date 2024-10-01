type Props = {
  children: React.ReactNode;
  'data-tina-field'?: string;
  className?: string;
};

export const Contained: React.FC<Props> = ({
  children,
  'data-tina-field': dataTinaField,
  className,
}) => (
  <div
    data-tina-field={dataTinaField}
    className={`px-8 max-w-screen-lg my-0 mx-auto ${className}`}
  >
    {children}
  </div>
);
