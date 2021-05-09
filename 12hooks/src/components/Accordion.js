import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  }
  const renderedItems = items.map((item, index) => {
    const isElementActive = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={`item${index}`}>
        <div className={`title ${isElementActive}`} onClick={() => { onTitleClick(index) }}>
          <i className='dropdown icon' />
          {item.title}
        </div>
        <div className={`content ${isElementActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  );
}

export default Accordion;