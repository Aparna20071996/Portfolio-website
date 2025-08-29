import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';

const AboutSection = styled.section`
  background-color: var(--card-bg);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 100px;
    background-color: var(--background);
    clip-path: ellipse(50% 50% at 50% 50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    height: 100px;
    background-color: var(--background);
    clip-path: ellipse(50% 50% at 50% 50%);
  }
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--gradient-1);
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(108, 99, 255, 0.5), rgba(255, 101, 132, 0.5));
    opacity: 0.3;
    z-index: 1;
  }
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const AboutInfo = styled(motion.div)`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--gradient-1);
    
    @media (max-width: 992px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const AboutDescription = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(19, 47, 76, 0.5);
  border-radius: 10px;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow);
    background-color: rgba(19, 47, 76, 0.8);
  }
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary);
  background: rgba(108, 99, 255, 0.1);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const SkillText = styled.div`
  flex: 1;
`;

const SkillTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <AboutImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutImage 
              src={process.env.PUBLIC_URL + '/about.svg'} 
              alt="About Aparna Kesharwani"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/500x400/6c63ff/ffffff?text=About+Me';
              }}
            />
          </AboutImageContainer>
          
          <AboutInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutTitle>Who I Am</AboutTitle>
            <AboutDescription>
              I'm a passionate Software Developer from India with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences that solve real-world problems.
            </AboutDescription>
            <AboutDescription>
              My journey in software development began with a curiosity about how digital products work. This curiosity evolved into a passion for creating elegant solutions that combine technical excellence with intuitive design.
            </AboutDescription>
            <AboutDescription>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
            </AboutDescription>
            
            <SkillsContainer>
              <SkillItem
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <SkillIcon>
                  {FiCode({})}
                </SkillIcon>
                <SkillText>
                  <SkillTitle>Frontend Development</SkillTitle>
                  <SkillDescription>Creating responsive and interactive UIs</SkillDescription>
                </SkillText>
              </SkillItem>
              
              <SkillItem
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <SkillIcon>
                  {FiServer({})}
                </SkillIcon>
                <SkillText>
                  <SkillTitle>Backend Development</SkillTitle>
                  <SkillDescription>Building robust server-side applications</SkillDescription>
                </SkillText>
              </SkillItem>
              
              <SkillItem
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <SkillIcon>
                  {FiDatabase({})}
                </SkillIcon>
                <SkillText>
                  <SkillTitle>Database Design</SkillTitle>
                  <SkillDescription>Designing efficient data structures</SkillDescription>
                </SkillText>
              </SkillItem>
              
              <SkillItem
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <SkillIcon>
                  {FiLayout({})}
                </SkillIcon>
                <SkillText>
                  <SkillTitle>UI/UX Design</SkillTitle>
                  <SkillDescription>Creating intuitive user experiences</SkillDescription>
                </SkillText>
              </SkillItem>
            </SkillsContainer>
          </AboutInfo>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;