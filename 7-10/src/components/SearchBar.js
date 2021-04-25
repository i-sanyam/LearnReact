import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'Enter your search item' };
  render() {
    console.log('render');
    console.log('state', this.state.term);
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type="text"
              // value={this.state.term}
              // defaultValue='Tarun'
              onChange={(e) => {
                console.log('TARGETVALUE', e.target.value);
                console.log('state', this.state.term);
                if (e.target.value.length > 4) return;
                this.setState({ term: e.target.value.toUpperCase() });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;