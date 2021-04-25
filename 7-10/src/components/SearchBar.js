import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'Enter your search item' };
  render() {
    console.log('render');
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type="text"
              // value={this.state.term}
              value = 'Tarun'
              // onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;