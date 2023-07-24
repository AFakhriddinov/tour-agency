import React, { useState } from 'react';
import SearchList from './SearchList';

function Search({ details }) {
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(true);

  const articles = details.filter((article) => {
    if (article.status == 2) {
      return (
        article.country.toLowerCase().includes(searchField.toLowerCase()) ||
        article.tour_title.toLowerCase().includes(searchField.toLowerCase())
      );
    } else {
      return '';
    }
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === '') {
      setSearchShow(true);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return <SearchList articles={articles} />;
    }
  }

  return (
    <div className="text-center main-block">
      <div className="">
        <input
          type="search"
          placeholder="Search your tour here..."
          className="search"
          onChange={handleChange}
        />
      </div>

      <div className="">{searchList()}</div>
    </div>
  );
}

export default Search;
