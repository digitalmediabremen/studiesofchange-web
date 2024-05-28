import Container from "@/app/_components/container";
import Image from "next/image";
import Link from "next/link";
import { Participants } from "@/app/_components/participants";
import { Performance } from "@/app/_components/performance";
import { SectionSeparator } from "./_components/section-separator";
import { getAllArtists } from "@/lib/api";
import { getCuratorialEn } from "@/lib/api";
import arrow_img from "@/../public/assets/design/arrow.png";
import dm_logo from "@/../public/assets/logo/digitalmedia@2x.png";
import hfk_logo from "@/../public/assets/logo/hfk.png";
import geg_logo from "@/../public/assets/logo/geg.png";
import zzz_logo from "@/../public/assets/logo/zzz.png";

// Home page

export default function Index() {
  const allArtists = getAllArtists();

  const curatorial = getCuratorialEn();

  return (
    <main>
      <Container>
        <section>
          <div className="mb-8 md:mb-16">
          </div>
          <Link href={`/texts/${curatorial.slug}`}>
            <div className="md:grid md:grid-cols-2">
              <div className="pr-20">
                <h3 className="mb-0 text-4xl lg:text-5xl leading-tight">
                  {curatorial.title}
                </h3>
                <h4 className="mb-10 mt-1 text-3xl lg:text-3xl leading-tight italic">
                  {curatorial.subtitle}
                </h4>
                <p className="text-lg leading-normal mb-0">{curatorial.excerpt}</p>
              </div>
              <div>

                <Image src={arrow_img} alt="" className="animate-arrow ml-auto max-w-[50%] md:max-w-[100%] md:ml-4" />
              </div>
            </div>
          </Link>

          <div className="md:grid grid-cols-2 leading-tight">
            <div>
              <Image src={arrow_img} alt="" className="animate-arrow-flip max-w-[50%] md:max-w-[100%] md:-ml-4" />
            </div>
            <div>
              <h3 className="mt-1 text-2xl md:text-3xl leading-none ml-2">
                Opening: 29.05. at 18:00<br />
                <span className="text-7xl md:text-7xl leading-[0.9em]">30.05 —<br />02.06.2024</span><br />
                Alte Pathologie, Am schwarzen Meer 134/136
              </h3>
            </div>
          </div>
          <div className="md:grid grid-cols-2 ml-2 md:mr-2">
            <div>
              <h3 className="mt-10 italic text-2xl md:text-3xl leading-snug">
                Opening times <br />
              </h3>
              <h4 className="mb-1 mt-1 text-2xl lg:text-3xl leading-snug ">
                <span className="inline-block w-32 md:w-52">Weekdays:</span> 16:00 - 20:00
              </h4>
              <h4 className="mb-3 mt-1 text-2xl lg:text-3xl leading-snug ">
                <span className="inline-block w-32 md:w-52">Weekend:</span> 14:00 - 20:00
              </h4>

            </div>
            <div className="grid place-items-end">
              <Image src={arrow_img} alt="" className="animate-arrow max-w-[50%] md:max-w-[100%] md:ml-4" />
            </div>
          </div>

          <div className="md:grid grid-cols-2 leading-tight mb-20">
            <div>
              <Image src={arrow_img} alt="" className="animate-arrow-flip max-w-[50%] md:max-w-[100%] md:-ml-4" />
            </div>
            <div className="flex place-items-end">
              <div className="grid grid-cols-2 md:flex-col md:flex-row flex md:mb-12 justify-start flex-wrap gap-x-5 md:gap-x-8 gap-y-4">
                <Link href={"https://hfk-bremen.de"}><Image className="max-w-[40vw] md:max-w-[140px] h-auto" src={hfk_logo} alt="" /></Link>
                <Link href={"https://digitalmedia-bremen.de/"}><Image className="max-w-[40vw] md:max-w-[140px] h-auto" src={dm_logo} alt="" /></Link>
                <Image className="max-w-[40vw] md:max-w-[140px] h-auto" src={geg_logo} alt="" />
                <Link href={"https://www.zzz-bremen.de/"}><Image className="max-w-[40vw] md:max-w-[140px] h-auto" src={zzz_logo} alt="" /></Link>
              </div>
            </div>
          </div>
        </section>
        <SectionSeparator />
        <Performance />
        <SectionSeparator />
        <Participants texts={allArtists} />
      </Container>
    </main>
  );
}
