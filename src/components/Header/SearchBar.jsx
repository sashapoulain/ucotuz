import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Arama yapılıyor:", query);
  };

  return (
    <form className="input-group w-50" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Arama"
      />
      <button
        className="input-group-text bg-white border-start-0"
        type="submit"
        aria-label="Ara"
      >
        <Search size={16} />
      </button>
    </form>
  );
}
