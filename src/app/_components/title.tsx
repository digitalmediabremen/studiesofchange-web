import Image from 'next/image';
import title_img from "@/../public/assets/design/title.png";
import Link from 'next/link';

export function Title() {
  return (
    <div className="items-start w-screen mb-10 mt-8">
      <Link href="/">
      <Image
        src={title_img}
        className="w-[100vw] h-[auto] max-w-[1600px] ml-auto mr-auto"
        alt="title"
      />
      </Link>
    </div>
  );
}


