import { Article } from "@/types/articles";
import React from "react";
import HighlightText from "./HighlightText";

interface Props {
  article: Article;
  query: string;
}

export default function ArticleCard({ article, query }: Props) {
  return (
    <div className="border-b pb-4" key={article.id}>
      <h2 className="text-xl font-semibold">
        <HighlightText text={article.title} query={query} />
      </h2>
      <p className="text-sm text-gray-500">{article.date}</p>
      <p className="text-gray-700 mt-2">
        <HighlightText text={article.content} query={query} />
      </p>
    </div>
  );
}
