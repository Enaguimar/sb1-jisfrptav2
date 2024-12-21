import React, { useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { navigation } from '@/data/navigation';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useScrollPosition();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white shadow-md'
      : isHome
      ? 'bg-transparent'
      : 'bg-transparent'
  }`;

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium transition-colors hover:text-green-600 ${
      isActive
        ? 'text-green-600'
        : scrolled
        ? 'text-gray-600'
        : isHome
        ? 'text-white'
        : 'text-gray-600'
    }`;

  const logoClasses = scrolled ? 'text-green-600' : isHome ? 'text-white' : 'text-green-600';
  const logoTextClasses = scrolled ? 'text-gray-800' : isHome ? 'text-white' : 'text-gray-800';

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <RouterLink to="/" className="flex items-center space-x-2">
            <Home className={`h-8 w-8 ${logoClasses}`} />
            <span className={`text-xl font-semibold ${logoTextClasses}`}>
              Valle de Ricote
            </span>
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <RouterLink
                key={item.path}
                to={item.path}
                className={linkClasses}
              >
                {item.label}
              </RouterLink>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-600' : isHome ? 'text-white' : 'text-gray-600'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-600' : isHome ? 'text-white' : 'text-gray-600'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-white rounded-lg p-4 shadow-lg">
            {navigation.map((item) => (
              <RouterLink
                key={item.path}
                to={item.path}
                className="block py-2 text-base font-medium text-gray-600 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </RouterLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;