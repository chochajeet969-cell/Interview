"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import InterviewCard from "@/components/InterviewCard";

export default function Archive({ interviews }: any) {
  const [query, setQuery] = useState("");

  const filtered = interviews.filter((i:any) =>
    i.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchBar onSearch={setQuery} />
      <div className="grid">
        {filtered.map((i:any) => (
          <InterviewCard key={i.slug.current} interview={i} />
        ))}
      </div>
    </>
  );
}
