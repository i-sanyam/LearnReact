import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const accordionItems = [
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
const colorOptions = [
  {
    label: 'Color Red',
    value: 'red'
  },
  {
    label: 'A Shade of Green',
    value: 'green'
  },
  {
    label: 'Color Blue',
    value: 'blue'
  }
];
const App = () => {
  // const [dropdownSelected, setDropdownSelected] = useState(colorOptions[0]);
  return (
    <div>
      {/* <Accordion items={accordionItems} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        dropdownKind = 'Color'
        options={colorOptions}
        selected={dropdownSelected}
        onSelectedChange={setDropdownSelected}
      /> */}
      <Translate />
    </div>);
}

export default App;