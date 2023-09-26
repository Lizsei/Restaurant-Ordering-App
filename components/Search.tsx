"use client"
import React, { useState, ChangeEvent } from 'react';

// interface SearchProps {
//   onSearch: (query: string) => void;
// }

const Search = (/*props: SearchProps*/) => {
  // const { onSearch } = props;
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    // Uncomment this when you can add interactivity
    // onSearch(newQuery);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        placeholder="Search restaurants..."
        value={query}
        onChange={handleChange}
      />
      <button
        className="absolute right-0 top-0 mt-2 mr-2 p-2 text-white bg-blue-500 rounded"
        // Uncomment this when you can add interactivity
        // onClick={() => onSearch(query)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
