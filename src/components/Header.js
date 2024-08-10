import React from 'react';

export function Header({ title, logo }) {
  return (
    <header className="app-header">
      <div className="header-content">
        {logo && <img src={logo} alt={`${title} logo`} className="header-logo" />}
        {title && <h1 className="header-title">{title}</h1>}
      </div>
    </header>
  );
}