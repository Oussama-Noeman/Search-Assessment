"use client";
import { articles } from "@/data/data";
import { filterArticles } from "@/lib/search";
import React, { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function SearchPage() {
  const [query, setQuery] = useState<string>("");
  const filtered = useMemo(() => filterArticles(articles, query), [query]);

  return (
    <div className="w-1/2">
      <h1>Search</h1>
      <div className="relative w-full mb-6 mt-4">
        <input
          type="text"
          className="w-full border-2 border-gray-200 rounded-sm px-4 py-1"
          placeholder="Search for ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-700 cursor-pointer"
          >
            x
          </button>
        )}
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">{filtered.length} posts</span> were found.
      </p>
      <div className="space-y-6">
        {filtered.map((a) => (
          <ArticleCard key={a.id} article={a} query={query} />
        ))}
      </div>
    </div>
  );
}
