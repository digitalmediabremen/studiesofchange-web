import Link from "next/link";
import Image from 'next/image';
import title_img from "@/../public/assets/design/title.png";

const Header = () => {
  return (
    <>
    <Link href="/">
    <Image
      src={title_img}
      className="w-[100vw] h-[auto] max-w-[1600px] ml-auto mr-auto mb-[60px]"
      alt="title"
    />
    </Link>
    </>
  );
};

export default Header;

