type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-[1600px] mx-auto px-[3vw]">{children}</div>;
};

export default Container;
