import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { EXPERIENCE_DATA } from '../../constants/experienceInfo';

const ExperienceSection = styled.section`
  background-color: var(--background);
  padding: 5rem 0;
`;

const ExperienceContainer = styled.div`
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

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: linear-gradient(
      to bottom,
      rgba(108, 99, 255, 0.2),
      rgba(108, 99, 255, 0.6),
      rgba(108, 99, 255, 0.2)
    );
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ isLeft: boolean }>`
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  padding: 0 2rem;
  box-sizing: border-box;
  ${props => props.isLeft ? 'left: 0;' : 'left: 50%;'}
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    ${props => props.isLeft ? 'right: -6px;' : 'left: -6px;'}
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(108, 99, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 60px;
    padding-right: 0;
    
    &::after {
      left: 24px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
  position: relative;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
  flex-shrink: 0;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const JobTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 0.3rem;
`;

const TimelineDetails = styled.div`
  margin-top: 1rem;
`;

const TimelineDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  svg {
    color: var(--primary);
  }
`;

const JobDescription = styled.div`
  margin-top: 1rem;
  color: var(--text-secondary);
`;

const JobResponsibility = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--primary);
  }
`;

const Experience: React.FC = () => {
  
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle>Work Experience</SectionTitle>
        <SectionSubtitle>
          My professional journey and the companies I've had the privilege to work with
        </SectionSubtitle>
        
        <TimelineContainer>
          {EXPERIENCE_DATA.map((exp, index) => (
            <TimelineItem 
              key={exp.id}
              isLeft={index % 2 === 0}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineHeader>
                  <CompanyLogo>
                    {FiBriefcase({})}
                  </CompanyLogo>
                  <CompanyInfo>
                    <CompanyName>{exp.company}</CompanyName>
                    <JobTitle>{exp.position}</JobTitle>
                  </CompanyInfo>
                </TimelineHeader>
                
                <TimelineDetails>
                  <TimelineDetailItem>
                    {FiCalendar({})}
                    <span>{exp.period}</span>
                  </TimelineDetailItem>
                  <TimelineDetailItem>
                    {FiMapPin({})}
                    <span>{exp.location}</span>
                  </TimelineDetailItem>
                </TimelineDetails>
                
                <JobDescription>
                  <ul>
                    <p>{exp.description}</p>
                    {exp.achievements.map((achievement, idx) => (
                      <JobResponsibility key={idx}>
                        {achievement}
                      </JobResponsibility>
                    ))}
                  </ul>
                </JobDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;