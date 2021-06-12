import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const langOptions = [
  {
    label: 'Punjabi',
    value: 'pa'
  },
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
      <hr />
      <Convert text={text} language={language}/>
    </div>
  );
}

export default Translate;
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM