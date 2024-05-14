import Link from "next/link";
import Image from 'next/image';
import title_img from "@/../public/assets/design/title.png";

const Header = () => {
  return (
    <>
    {/* <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Link href="/" className="hover:underline">
         Blog
       </Link>
       .
    </h2> */}
    <Link href="/">
    <Image
      src={title_img}
      className="w-[50vw] h-auto md:h-auto mb-10 mt-8 "
      alt="title"
    />
    </Link>
    </>
  );
};

export default Header;
