import Container from "@/app/_components/container";
import Image from "next/image";
import Link from "next/link";
import { Title } from "@/app/_components/title";
import { Background } from "@/app/_components/background";
import { Participants } from "@/app/_components/participants";
import { getAllArtists } from "@/lib/api";
import { getCuratorialEn } from "@/lib/api";
import arrow_img from "@/../public/assets/design/arrow.png";

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
                <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                  {curatorial.title}
                </h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-4">{curatorial.excerpt}</p>
              </div>
          </div>
          </Link>
        </section>
        <Participants texts={allArtists} />
      </Container>
    </main>
  );
}
