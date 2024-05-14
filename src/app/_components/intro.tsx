import Image from 'next/image';
import title_img from "@/../public/assets/design/title.png";
import Link from 'next/link';

export function Intro() {
  return (
    <div className="items-center w-screen">
      <Link href="/">
      <Image
        src={title_img}
        className="w-[100vw] max-w-[1600px] ml-auto mr-auto"
        alt="title"
      />
      </Link>
    </div>
  );
}
