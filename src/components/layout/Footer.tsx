import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode, SiStackoverflow } from 'react-icons/si';
import { PERSONAL_INFO } from '../../constants/personalInfo';

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
          <FooterLogo to="/">{PERSONAL_INFO.name.split(' ')[0]}.dev</FooterLogo>
          <p>A passionate software developer from India, specializing in creating beautiful and functional web applications.</p>
          <SocialLinks>
            {PERSONAL_INFO.social.github && (
              <SocialIcon href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer">
                {FiGithub({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.linkedin && (
              <SocialIcon href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer">
                {FiLinkedin({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.twitter && (
              <SocialIcon href={PERSONAL_INFO.social.twitter} target="_blank" rel="noopener noreferrer">
                {FiTwitter({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.hackerrank && (
              <SocialIcon href={PERSONAL_INFO.social.hackerrank} target="_blank" rel="noopener noreferrer">
                {SiHackerrank({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.leetcode && (
              <SocialIcon href={PERSONAL_INFO.social.leetcode} target="_blank" rel="noopener noreferrer">
                {SiLeetcode({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.stackoverflow && (
              <SocialIcon href={PERSONAL_INFO.social.stackoverflow} target="_blank" rel="noopener noreferrer">
                {SiStackoverflow({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.instagram && (
              <SocialIcon href={PERSONAL_INFO.social.instagram} target="_blank" rel="noopener noreferrer">
                {FiInstagram({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.facebook && (
              <SocialIcon href={PERSONAL_INFO.social.facebook} target="_blank" rel="noopener noreferrer">
                {FiFacebook({})}
              </SocialIcon>
            )}
            <SocialIcon href={`mailto:${PERSONAL_INFO.email}`}>
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
          <p>Email: {PERSONAL_INFO.email}</p>
          <p>Location: {PERSONAL_INFO.location}</p>
          <p>Freelance: Available</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        <p>Designed & Developed with ❤️</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;