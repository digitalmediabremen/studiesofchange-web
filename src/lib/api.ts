import { Text } from "@/interfaces/text";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const textsDirectory = join(process.cwd(), "_texts/");

export function getTextSlugs() {
  return fs.readdirSync(textsDirectory);
}

export function getTextBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(textsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Text;
}

export function getAllTexts(): Text[] {
  const slugs = getTextSlugs();
  const texts = slugs
    .map((slug) => getTextBySlug(slug))
    // sort by artist name in descending order
    .sort((post1, post2) => (post1.author > post2.author ? -1 : 1));
  return texts;
}

export function getAllArtists(){
  const texts = getAllTexts();
  return texts.filter((text) => text.type === "artist");
}


export function getCuratorialEn(){
  const texts = getAllTexts();
  return texts.filter((text) => text.type === "curatorial_en")[0];

}

export function getCuratorialDe(){
  const texts = getAllTexts();
  return texts.filter((text) => text.type === "curatorial_de")[0];
}