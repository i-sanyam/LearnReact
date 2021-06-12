import React, { useState } from 'react';

const SearchBar = ({onSearchSubmit}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  }

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Video Search</label>
          <input type='text'
            onChange={e => setSearchQuery(e.target.value)}
            value={searchQuery} />
        </div>
      </form>
    </div>
  );

}

export default SearchBar;