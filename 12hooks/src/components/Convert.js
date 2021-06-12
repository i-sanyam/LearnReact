import React, { useEffect, useState } from 'react';
import translateApi from '../api/googletranslate';

const Convert = ({ text, language }) => {
  const [convertedText, setConvertedText] = useState('Translated Text Will Display Here!');
  useEffect(() => {
    const translate = async () => {
      const { data } = await translateApi.post('/translate/v2', {}, {
        params: {
          q: text,
          target: language.value
        }
      });
      if (data.data && data.data.translations && data.data.translations[0] && data.data.translations[0].translatedText) {
        setConvertedText(data.data.translations[0].translatedText);
      }
    }
    const timeoutId = setTimeout(() => {
      if (text) {
        console.log('hit translate');
        translate();
      };
    }, 500);
    return (() => {
      clearTimeout(timeoutId);
    });
  }, [text, language]);
  return (
    <div>
      <h3 className='ui header'>{ convertedText }</h3>
    </div>
  );
};

export default Convert;