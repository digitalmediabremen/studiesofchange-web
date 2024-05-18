import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTexts, getTextBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import Background from "@/app/_components/background";
import { TextBody } from "@/app/_components/text-body";
import { TextHeader } from "@/app/_components/text-header";
import Link from "next/link";
import { Title } from "@/app/_components/title";

// Page for each text

export default async function Text({ params }: Params) {
  const text = getTextBySlug(params.slug);

  if (!text) {
    return notFound();
  }

  const content = await markdownToHtml(text.content || "");
  const type = text.type;
  return (
    <main>
      <Background />
      <Header />
      <Container>
        <Background />
        <>
          {// show only in curatorial texts
            (type.includes("curatorial")) ? <Link
              href={(text.type.includes("_en")) ? "/texts/curatorial-de" : "/texts/curatorial-en"}
              className="text-gray-500"
            >
              {(text.type.includes("_en")) ? "Zur deutschen Version" : "Switch to English Version"}
            </Link> : ""
          }
        </>
        <article className="mb-32">
          <TextHeader
            title={text.title}
            subtitle={text.subtitle}
            year={text.year}
            medium_type={text.medium_type}
            material={text.material}
            dimension={text.dimension}
            author={text.author}
          />
          <TextBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const text = getTextBySlug(params.slug);

  if (!text) {
    return notFound();
  }

  const title = `${text.title}`;

  return {
    title,
    openGraph: {
      title,
      // images: [text.ogImage.url], // TODO: shall be done after we collect images from the artists
    },
  };
}

export async function generateStaticParams() {
  const texts = getAllTexts();

  return texts.map((text: any) => ({
    slug: text.slug,
  }));
}
