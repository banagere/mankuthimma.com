import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "kagga");

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.weight > b.meta.weight) return 1;
      if (a.meta.weight < b.meta.weight) return -1;
      return 0;
    })
  return posts;
};

interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  veda: string[];
  date: string;
  weight: number;
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      veda: data.veda ?? [],
      date: (data.date ?? new Date()).toString(),
      weight: data.weight,
    },
  };
};
