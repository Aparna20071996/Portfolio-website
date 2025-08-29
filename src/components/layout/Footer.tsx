import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: var(--card-bg);
  padding: 3rem 0 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-1);
  }
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--gradient-1);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const FooterLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: inline-block;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/">Aparna.dev</FooterLogo>
          <p>A passionate software developer from India, specializing in creating beautiful and functional web applications.</p>
          <SocialLinks>
            <SocialIcon href="https://github.com/aparnakesharwani" target="_blank" rel="noopener noreferrer">
              {FiGithub({})}
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/aparnakesharwani" target="_blank" rel="noopener noreferrer">
              {FiLinkedin({})}
            </SocialIcon>
            <SocialIcon href="https://twitter.com/aparnakesharwani" target="_blank" rel="noopener noreferrer">
              {FiTwitter({})}
            </SocialIcon>
            <SocialIcon href="mailto:aparna.kesharwani@example.com">
              {FiMail({})}
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/#home">Home</FooterLink>
          <FooterLink to="/#about">About Me</FooterLink>
          <FooterLink to="/#projects">Projects</FooterLink>
          <FooterLink to="/#skills">Skills</FooterLink>
          <FooterLink to="/#contact">Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/#services">Web Development</FooterLink>
          <FooterLink to="/#services">Frontend Development</FooterLink>
          <FooterLink to="/#services">Backend Development</FooterLink>
          <FooterLink to="/#services">UI/UX Design</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <p>Email: aparna.kesharwani@example.com</p>
          <p>Location: Bengaluru, India</p>
          <p>Freelance: Available</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Aparna Kesharwani. All rights reserved.</p>
        <p>Designed & Developed with ❤️</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;