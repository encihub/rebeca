type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const NavButton: React.FC<Props> = ({ isOpen = false, toggle }) => (
  <div
    className={`select-none
inline-block lg:hidden
h-[60px] w-[60px]
cursor-pointer
flex-col justify-center items-center
relative
`}
    onClick={toggle}
  >
    <div
      className={`block bg-black absolute h-[4px] w-[60px] transition-transform duration-500 ease-in-out rounded-sm mt-[30px]
before:block before:bg-black before:absolute before:h-[4px] before:w-[60px] before:transition-all before:duration-500 before:ease-out before:rounded-sm
after:block after:bg-black after:absolute after:h-[4px] after:w-[60px] after:transition-all after:duration-500 after:ease-out after:rounded-sm
before:content-[''] before:mt-[-16px]
after:content-[''] after:mt-[16px] ${
        isOpen &&
        'before:translate-y-[16px] before:rotate-[405deg] bg-opacity-0 after:translate-y-[-16px] after:rotate-[-405deg]'
      }`}
    />
  </div>
);
