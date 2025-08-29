import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { FiGithub, FiLinkedin, FiDownload, FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode, SiStackoverflow } from 'react-icons/si';
import { PERSONAL_INFO } from '../../constants/personalInfo';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(108, 99, 255, 0.2), transparent 50%);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70%;
    height: 70%;
    background: radial-gradient(circle at bottom left, rgba(255, 101, 132, 0.15), transparent 50%);
    z-index: -1;
  }
`;

const HeroContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled(motion.div)`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  min-width: 220px;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #6c63ff 0%, #ff6584 100%);
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 12px 48px 0 rgba(108, 99, 255, 0.18), 0 0 0 8px rgba(255, 101, 132, 0.08);
  margin: 0 auto 2.5rem auto;
  animation: pulseGlow 2.5s infinite alternate;
  transition: box-shadow 0.3s, padding 0.3s;

  &:hover {
    box-shadow: 0 24px 64px 0 rgba(108, 99, 255, 0.28), 0 0 0 16px rgba(255, 101, 132, 0.12);
    padding: 20px;
  }

  @media (max-width: 1200px) {
    max-width: 350px;
    padding: 12px;
  }
  @media (max-width: 768px) {
    max-width: 220px;
    padding: 8px;
  }
  @media (max-width: 480px) {
    max-width: 150px;
    padding: 6px;
  }

  @keyframes pulseGlow {
    0% {
      box-shadow: 0 12px 48px 0 rgba(108, 99, 255, 0.18), 0 0 0 8px rgba(255, 101, 132, 0.08);
    }
    100% {
      box-shadow: 0 24px 64px 0 rgba(108, 99, 255, 0.28), 0 0 0 16px rgba(255, 101, 132, 0.12);
    }
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid #fff;
  box-shadow: 0 8px 32px rgba(108, 99, 255, 0.18);
  object-fit: cover;
  background: #fff;
  transition: transform 0.3s, border 0.3s;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: high-quality;

  ${HeroImageContainer}:hover & {
    transform: scale(1.06);
    border: 8px solid #fff;
  }
`;

const Greeting = styled.p`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 1px;
    background-color: var(--primary);
    margin-right: 1rem;
  }
  
  @media (max-width: 992px) {
    justify-content: center;
    
    &::before {
      display: none;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 auto 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled(motion(HashLink))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background: var(--gradient-1);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(108, 99, 255, 0.4);
    color: white;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: rgba(108, 99, 255, 0.1);
  border-radius: 50%;
  filter: blur(50px);
  z-index: -1;
`;

const Hero: React.FC = () => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (!shapesRef.current) return;
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      animationId = requestAnimationFrame(() => {
        const shapes = shapesRef.current?.querySelectorAll('div');
        if (!shapes) return;
        
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        shapes.forEach((shape, index) => {
          const speed = 1 + index * 0.2;
          const offsetX = (x - 0.5) * speed * 20;
          const offsetY = (y - 0.5) * speed * 20;
          (shape as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <HeroSection id="home">
      <div ref={shapesRef}>
        <FloatingShape 
          initial={{ x: -100, y: -100 }}
          animate={{ x: -120, y: -120 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          style={{ width: '200px', height: '200px', top: '20%', left: '10%' }}
        />
        <FloatingShape 
          initial={{ x: 100, y: 100 }}
          animate={{ x: 120, y: 120 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          style={{ width: '300px', height: '300px', bottom: '10%', right: '5%' }}
        />
        <FloatingShape 
          initial={{ x: -50, y: 50 }}
          animate={{ x: -70, y: 70 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          style={{ width: '150px', height: '150px', bottom: '30%', left: '20%' }}
        />
      </div>
      <HeroContainer>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Greeting>Hello, I'm</Greeting>
          <HeroTitle>{PERSONAL_INFO.name}</HeroTitle>
          <HeroSubtitle>{PERSONAL_INFO.title}</HeroSubtitle>
          <HeroDescription>
            A passionate software developer specializing in creating beautiful and functional web applications. I love turning complex problems into simple, elegant solutions.
          </HeroDescription>
          <ButtonGroup>
            <PrimaryButton 
              to="/#contact"
              smooth
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </PrimaryButton>
            <SecondaryButton 
              as="a"
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {FiDownload({})} Download CV
            </SecondaryButton>
          </ButtonGroup>
          <SocialLinks>
            {PERSONAL_INFO.social.github && (
              <SocialIcon 
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                {FiGithub({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.linkedin && (
              <SocialIcon 
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                {FiLinkedin({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.twitter && (
              <SocialIcon 
                href={PERSONAL_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                {FiTwitter({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.hackerrank && (
              <SocialIcon 
                href={PERSONAL_INFO.social.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                {SiHackerrank({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.leetcode && (
              <SocialIcon 
                href={PERSONAL_INFO.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                {SiLeetcode({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.stackoverflow && (
              <SocialIcon 
                href={PERSONAL_INFO.social.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                {SiStackoverflow({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.instagram && (
              <SocialIcon 
                href={PERSONAL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                {FiInstagram({})}
              </SocialIcon>
            )}
            {PERSONAL_INFO.social.facebook && (
              <SocialIcon 
                href={PERSONAL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                {FiFacebook({})}
              </SocialIcon>
            )}
          </SocialLinks>
        </HeroContent>
        <HeroImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroImage 
            src={process.env.PUBLIC_URL + '/profile.jpg'} 
            alt="Aparna Kesharwani"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x400/6c63ff/ffffff?text=AK';
            }}
          />
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;