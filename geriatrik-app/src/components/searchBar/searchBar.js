import React from 'react'
import "./searchBar.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          type="search"
          id="header-search"
          placeholder="Search Patients"
          name="s"
      />
  </form>
);

export default SearchBar;