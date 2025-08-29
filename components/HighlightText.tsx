import React from "react";

interface Props {
  text: string;
  query: string;
}

export default function HighlightText({ text, query }: Props) {
  if (!query) return <>{text}</>;
  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-300">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}
