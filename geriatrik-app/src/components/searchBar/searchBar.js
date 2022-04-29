import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import ListSearch from './ListSearch'
import "./searchBar.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search Patients"
          name="s"
      />
  </form>
);

export default SearchBar;