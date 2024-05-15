import Link from "next/link";
import Image from 'next/image';
import title_img from "@/../public/assets/design/title.png";

const Header = () => {
  return (
    <>
    <Link href="/">
    <Image
      src={title_img}
      className="w-[100vw] max-w-1600px h-auto md:h-auto mb-10 mt-8"
      alt="title"
    />
    </Link>
    </>
  );
};

export default Header;
