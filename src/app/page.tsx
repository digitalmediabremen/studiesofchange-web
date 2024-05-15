import Container from "@/app/_components/container";
import Image from "next/image";
import Link from "next/link";
import { Title } from "@/app/_components/title";
import { Background } from "@/app/_components/background";
import { Participants } from "@/app/_components/participants";
import { getAllArtists } from "@/lib/api";
import { getCuratorialEn } from "@/lib/api";
import arrow_img from "@/../public/assets/design/arrow.png";
import dm_logo from "@/../public/assets/logo/digitalmedia@2x.png";
import hfk_logo from "@/../public/assets/logo/hfk.png";
import geg_logo from "@/../public/assets/logo/geg.png";

// Home page

export default function Index() {
  const allArtists = getAllArtists();

  const curatorial = getCuratorialEn();

  return (
    <main>
      <Title />
      <Background />
      <Container>
        <section>
          <div className="mb-8 md:mb-16">
            <Image src={arrow_img} alt="" />
          </div>
          <Link href={`/texts/${curatorial.slug}`} className="hover:underline">
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <h3 className="mb-0 text-4xl lg:text-5xl leading-tight">
                  {curatorial.title}
                </h3>
                <h4 className="mb-10 mt-5 text-3xl lg:text-3xl leading-tight italic">
                  {curatorial.subtitle}
                </h4>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-0">{curatorial.excerpt}</p>
              </div>
            </div>
          </Link>
          <h3 className="mt-1 mb-1 text-4xl lg:text-5xl mb-20 leading-tight">
          Opening: 29.5. at 18:00<br />
          30.05 — 02.06.2024<br />
          Alte Pathologie, Am schwarzen Meer 134/136
          </h3>
          <div className="flex-col md:flex-row flex mt-16 mb-20 md:mb-12 justify-start">
            <Image className="max-w-[100px] h-auto mr-5" src={hfk_logo} alt="" />
            <Image className="max-w-[100px] h-auto mr-5" src={dm_logo} alt="" />
            <Image className="max-w-[100px] h-auto mr-5" src={geg_logo} alt="" />
          </div>
        </section>
        <Participants texts={allArtists} />
      </Container>
    </main>
  );
}
