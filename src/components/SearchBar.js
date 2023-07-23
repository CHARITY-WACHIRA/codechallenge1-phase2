import React from 'react';

function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    // Call the onSearch function to update the parent component state with the search term
    onSearch(searchTerm);
  };

  return (
    <input type="text" onChange={handleSearch} placeholder="Search by description..." />
  );
}

export default SearchBar;