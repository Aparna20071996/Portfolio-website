import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
`;

const SkillsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
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

const SkillsIntro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-1);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(108, 99, 255, 0.3);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: var(--text-primary);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--gradient-1);
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 0;
`;

const SkillName = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-primary);
  font-weight: 600;
`;

const SkillLevel = styled.span`
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(108, 99, 255, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled(motion.div)<{ width: string }>`
  height: 100%;
  background: var(--gradient-1);
  border-radius: 10px;
  width: ${props => props.width};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const OtherSkillsContainer = styled.div`
  margin-top: 4rem;
`;

const OtherSkillsTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-primary);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--gradient-1);
  }
`;

const OtherSkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

const OtherSkillItem = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 50px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  
  &:hover {
    background: var(--gradient-1);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(108, 99, 255, 0.3);
    border-color: transparent;
  }
`;

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 'Advanced', percentage: '95%' },
    { name: 'JavaScript (ES6+)', level: 'Advanced', percentage: '90%' },
    { name: 'React.js', level: 'Advanced', percentage: '90%' },
    { name: 'TypeScript', level: 'Intermediate', percentage: '80%' },
    { name: 'Next.js', level: 'Intermediate', percentage: '75%' },
    { name: 'Redux/Context API', level: 'Intermediate', percentage: '80%' },
    { name: 'Styled Components', level: 'Advanced', percentage: '85%' },
    { name: 'Tailwind CSS', level: 'Intermediate', percentage: '70%' },
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 'Intermediate', percentage: '80%' },
    { name: 'Express.js', level: 'Intermediate', percentage: '75%' },
    { name: 'MongoDB', level: 'Intermediate', percentage: '75%' },
    { name: 'PostgreSQL', level: 'Intermediate', percentage: '70%' },
    { name: 'RESTful APIs', level: 'Advanced', percentage: '85%' },
    { name: 'GraphQL', level: 'Beginner', percentage: '60%' },
    { name: 'JWT Authentication', level: 'Intermediate', percentage: '75%' },
    { name: 'Socket.io', level: 'Beginner', percentage: '65%' },
  ];
  
  const otherSkills = [
    'Git & GitHub',
    'Docker',
    'AWS',
    'CI/CD',
    'Jest',
    'Webpack',
    'Responsive Design',
    'UI/UX Design',
    'Agile/Scrum',
    'Problem Solving',
    'Team Collaboration',
    'Technical Writing',
    'Performance Optimization',
    'SEO',
    'Accessibility',
    'Cross-browser Testing'
  ];
  
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>My Skills</SectionTitle>
        <SkillsIntro>
          I've worked with a variety of technologies in the web development world.
          Here are my main areas of expertise and the technologies I use regularly.
        </SkillsIntro>
        
        <SkillsGrid>
          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Frontend Development</CategoryTitle>
            <SkillsList>
              {frontendSkills.map((skill, index) => (
                <SkillItem 
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillName>
                    {skill.name}
                    <SkillLevel>{skill.level}</SkillLevel>
                  </SkillName>
                  <ProgressBar>
                    <Progress 
                      width={skill.percentage}
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.percentage }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Backend Development</CategoryTitle>
            <SkillsList>
              {backendSkills.map((skill, index) => (
                <SkillItem 
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillName>
                    {skill.name}
                    <SkillLevel>{skill.level}</SkillLevel>
                  </SkillName>
                  <ProgressBar>
                    <Progress 
                      width={skill.percentage}
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.percentage }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
        
        <OtherSkillsContainer>
          <OtherSkillsTitle>Other Skills & Tools</OtherSkillsTitle>
          <OtherSkillsGrid>
            {otherSkills.map((skill, index) => (
              <OtherSkillItem 
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {skill}
              </OtherSkillItem>
            ))}
          </OtherSkillsGrid>
        </OtherSkillsContainer>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;