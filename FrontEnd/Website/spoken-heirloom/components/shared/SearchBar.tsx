import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  placeholder,
}) => {
  return (
    <div className="flex items-center w-full max-w-xl mx-auto px-0.5 my-8 border border-gray-200 overflow-hidden">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search Here ..."}
        className="flex-1 px-4 py-3 text-gray-700 focus:outline-none bg-transparent"
      />
      <button
        onClick={onSearch}
        className="px-4 py-3 bg-primary-foreground text-white hover:bg-primary-foreground/90 transition-colors"
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
