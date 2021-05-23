import React, { useState } from 'react';
import Dropdown from './Dropdown';

const langOptions = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Arabic',
    value: 'ar'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(langOptions[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => { setText(e.target.value) }} />
        </div>
      </div>
      <Dropdown
        dropdownKind='Language'
        options={langOptions}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
}

export default Translate;