import './SeasonDisplay.css'
import React from 'react';

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat < 0 ? 'summer' : 'winter';
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  let text = null, icon = null;
  if (season === 'summer') {
    icon = 'sun';
    text = 'Its hot here';
  } else {
    text = 'Burr, Its chilly';
    icon = 'snowflake';
  }

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon massive icon-left ${icon}`} />
      <h1>{text}</h1>
      <i className={`icon massive icon-right ${icon}`} />
    </div>
  );
}

export default SeasonDisplay;