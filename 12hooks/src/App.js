import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

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

const menuItems = [
  {
    link: '/',
    text: "Accordion"
  },
  {
    link: '/search',
    text: "Search"
  },
  {
    link: '/dropdown',
    text: "Dropdown"
  },
  {
    link: '/translate',
    text: "Translate"
  }
];

const App = () => {
  const [dropdownSelected, setDropdownSelected] = useState(colorOptions[0]);
  const [currentActive, setCurrentActive] = useState(window.location.pathname || menuItems[0].link);
  return (
    <div>
      <Header menuItems={menuItems} currentActive={currentActive}/>
      <Route href='/' setCurrentActive={setCurrentActive}>
        <Accordion items={accordionItems} />
      </Route>
      <Route href='/search' setCurrentActive={setCurrentActive}>
        <Search />
      </Route>
      <Route href='/dropdown' setCurrentActive={setCurrentActive}>
        <Dropdown
          dropdownKind='Color'
          options={colorOptions}
          selected={dropdownSelected}
          onSelectedChange={setDropdownSelected}
        />
      </Route>
      <Route href='/translate' setCurrentActive={setCurrentActive}>
        <Translate />
      </Route>
    </div>
  );
}

export default App;