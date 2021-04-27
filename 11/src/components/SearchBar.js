import React from 'react';

class SearchBar extends React.Component {
  state = { searchQuery: '' };
  onFormSubmit = (e) => {
    e.preventDefault();
    //call some callback to parent component
  }
  onInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }
  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Video Search</label>
            <input type='text' onChange={this.onInputChange} value={this.state.searchQuery} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;