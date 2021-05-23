import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ dropdownKind, options, selected, onSelectedChange }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (dropdownRef.current.contains(event.target)) {
        // console.log('BODY RETURN EARLY');
        return;
      }
      // console.log("BODY CLICK");
      setOpenDropdown(false);
    }
    document.body.addEventListener('click', onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };
  }, []);

  const colorRenderedList = options.map(option => {
    if (option.value === selected.value) return null;
    return (
      <div
        className='item'
        key={option.value}
        onClick={() => {
          // console.log('ITEM CLICK');
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className='ui form' ref={dropdownRef}>
      <div className='field'>
        <label className='label'>Select a {dropdownKind}</label>
        <div
          onClick={() => {
            // console.log("MENU CLICK!");
            setOpenDropdown(!openDropdown);
          }}
          className={`ui selection dropdown ${openDropdown === true ? 'visible active' : ''}`}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${openDropdown === true ? 'visible transition' : ''}`}>
            {colorRenderedList}
          </div>
        </div>
        {dropdownKind === 'Color' ? <div className='text' style={{ color: `${selected.value}` }}>I am a text colored in {selected.value}.</div> : null}
      </div>
    </div>
  );
}

export default Dropdown;