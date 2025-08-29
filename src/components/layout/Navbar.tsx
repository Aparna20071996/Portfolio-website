import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  background-color: var(--nav-bg);
  backdrop-filter: blur(10px);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-1);
    transition: var(--transition);
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &:hover {
    color: var(--primary);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: rotate(15deg);
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: var(--card-bg);
  padding: 2rem;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileNavLink = styled(Link)`
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    padding-left: 0.5rem;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <NavbarContainer style={{ 
      backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
      boxShadow: isScrolled ? 'var(--box-shadow)' : 'none'
    }}>
      <NavContent>
        <Logo to="/">Aparna.dev</Logo>
        
        <NavLinks>
          <NavLink as={HashLink} smooth to="/#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</NavLink>
          <NavLink as={HashLink} smooth to="/#about">About</NavLink>
          <NavLink as={HashLink} smooth to="/#projects">Projects</NavLink>
          <NavLink as={HashLink} smooth to="/#skills">Skills</NavLink>
          <NavLink as={HashLink} smooth to="/#contact">Contact</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {darkMode ? FiSun({}) : FiMoon({})}
          </ThemeToggle>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {FiMenu({})}
        </MobileMenuButton>
      </NavContent>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <MobileMenuHeader>
                <Logo to="/" onClick={() => setMobileMenuOpen(false)}>Aparna.dev</Logo>
                <MobileMenuButton onClick={toggleMobileMenu}>
                  {FiX({})}
                </MobileMenuButton>
              </MobileMenuHeader>
              
              <MobileNavLink as={HashLink} smooth to="/#home" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}>Home</MobileNavLink>
              <MobileNavLink as={HashLink} smooth to="/#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink as={HashLink} smooth to="/#projects" onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink as={HashLink} smooth to="/#skills" onClick={() => setMobileMenuOpen(false)}>Skills</MobileNavLink>
              <MobileNavLink as={HashLink} smooth to="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
              
              <ThemeToggle onClick={toggleTheme} style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                {darkMode ? FiSun({}) : FiMoon({})}
                <span style={{ marginLeft: '0.5rem' }}>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </ThemeToggle>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;