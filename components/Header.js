import React from 'react';


function Header({ title, logo, children }) {
  return (
    <header className="app-header">
      <div className="header-content">
        {logo && <img src='/Logo.svg' alt={`${title} logo`} className="header-logo" />}
        {title && <h1 className="header-title">Little Lemon</h1>}
        {children && <div className="header-children">{children}</div>}
      </div>
    </header>
  );
}

export default Header;