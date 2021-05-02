import React from 'react';
// import Accordion from './Accordion';
import Search from './Search';
const items = [
  {
    title: 'What is React?',
    content: 'React is a popular front end JS library used widely, developed by Facebook'
  }, {
    title: 'Why use React?',
    content: 'React employs diffing algorithm to reduce re-rendering of Components. With a great React developers community, you can easily build front end application with React'
  }, {
    title: 'How to use React?',
    content: 'Make different components and wire them together'
  }
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>);
}

export default App;