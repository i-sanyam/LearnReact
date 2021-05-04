import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  console.log('I RENDER');
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: query,
        },
      });
      if (data && data.query && data.query.search && data.query.search.length) {
        setResults(data.query.search);
      }
    };
    if (query) {
      search();
    }
  }, [query]);
  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className='ui item'>
        <div className='ui right floated content'>
          <a
            className='ui button'
            target='__blank'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            GO
          </a>
        </div>
        <div className='ui content'>
          <div className='ui header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='form-search'>
            Enter Search Term
          </label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type='text'
            id='form-search' />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
}

export default Search;