import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const NavContainer = styled.nav`
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.main};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
  
  span {
    color: ${theme.colors.secondary};
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${theme.colors.white};
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  margin: 0 1rem;
  padding: 0.5rem 0;
  color: ${({ active }) => active ? theme.colors.secondary : theme.colors.text};
  font-weight: ${({ active }) => active ? '600' : '500'};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background-color: ${theme.colors.secondary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0.5rem 2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  cursor: pointer;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <NavContainer style={{ padding: scrolled ? '0' : '0.5rem 0' }}>
      <NavInner>
        <Logo to="/">Bloom<span>Events</span></Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/about" active={isActive('/about')}>About</NavLink>
          <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
          <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
        </NavLinks>
      </NavInner>
    </NavContainer>
  );
};

export default Navbar;