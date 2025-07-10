import React from 'react';
import './Header.css';

interface HeaderProps {
  /** Current note title */
  title: string;
  /** Whether sidebar is open */
  isSidebarOpen: boolean;
  /** Function to toggle sidebar */
  onToggleSidebar: () => void;
}

/**
 * Header component with title and sidebar toggle
 */
export const Header: React.FC<HeaderProps> = ({ 
  title, 
  isSidebarOpen, 
  onToggleSidebar 
}) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <button 
        className="header__sidebar-toggle"
        onClick={onToggleSidebar}
        aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <span className="header__menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </header>
  );
};