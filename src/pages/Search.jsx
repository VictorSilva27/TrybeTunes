import React, { Component } from 'react';
import FormSearch from '../components/FormSearch';
import Header from '../components/Header';
import './css/styleSearch.css';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <div>
          <h1 className="title-page-search">Search</h1>
          <FormSearch />
        </div>
      </div>
    );
  }
}

export default Search;
