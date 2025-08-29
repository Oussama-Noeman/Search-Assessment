import { Article } from "@/types/articles";

export function filterArticles(articles: Article[], query: string): Article[] {
  if (!query) return articles;
  const lower = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(lower) ||
      a.content.toLowerCase().includes(lower)
  );
}
