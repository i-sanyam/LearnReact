import React from 'react';
import Link from './../components/Link'

const Header = ({ menuItems, currentActive }) => {
  const renderedMenuItems = menuItems.map((menuItem) => {
    const className = `ui item ${currentActive === menuItem.link ? " active" : ""}`;
    return (
      <Link
        className={className}
        key={menuItem.text}
        href={menuItem.link}>
        {menuItem.text}
      </Link>
    );
  });
  return (
    <div className="ui secondary menu">
      {renderedMenuItems}
    </div>
  );
}

export default Header;