import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { EDUCATION_DATA } from '../../constants/educationInfo';

const EducationSection = styled.section`
  background-color: var(--card-bg);
  padding: 5rem 0;
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

const EducationContainer = styled.div`
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const EducationHeader = styled.div`
  background: var(--gradient-1);
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

const InstituteLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const InstituteName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const DegreeName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

const EducationContent = styled.div`
  padding: 1.5rem;
`;

const EducationDetails = styled.div`
  margin-bottom: 1.5rem;
`;

const EducationDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  
  svg {
    color: var(--primary);
  }
`;

const EducationDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AchievementItem = styled.li`
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-secondary);
  
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

const Education: React.FC = () => {
  
  return (
    <EducationSection id="education">
      <EducationContainer>
        <SectionTitle>Education</SectionTitle>
        <SectionSubtitle>
          My academic background and qualifications that have shaped my technical knowledge
        </SectionSubtitle>
        
        <EducationGrid>
          {EDUCATION_DATA.map((edu, index) => (
            <EducationCard
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <EducationHeader>
                <InstituteLogo>
                  {FiBookOpen({})}
                </InstituteLogo>
                {edu.institution && <InstituteName>{edu.institution}</InstituteName>}
                {(edu.degree || edu.field) && (
                  <DegreeName>
                    {edu.degree}{edu.degree && edu.field && ' - '}{edu.field}
                  </DegreeName>
                )}
              </EducationHeader>
              
              <EducationContent>
                <EducationDetails>
                  {edu.period && (
                    <EducationDetailItem>
                      {FiCalendar({})}
                      <span>{edu.period}</span>
                    </EducationDetailItem>
                  )}
                  {edu.location && (
                    <EducationDetailItem>
                      {FiMapPin({})}
                      <span>{edu.location}</span>
                    </EducationDetailItem>
                  )}
                </EducationDetails>
                
                {edu.grade && (
                  <EducationDetailItem>
                    {FiAward({})}
                    <span><strong>Grade:</strong> {edu.grade}</span>
                  </EducationDetailItem>
                )}
                
                <div>
                  <EducationDetailItem>
                    {FiAward({})}
                    <span><strong>Achievements:</strong></span>
                  </EducationDetailItem>
                  <AchievementsList>
                    {edu.achievements.map((achievement, idx) => (
                      <AchievementItem key={idx}>
                        {achievement}
                      </AchievementItem>
                    ))}
                  </AchievementsList>
                </div>
              </EducationContent>
            </EducationCard>
          ))}
        </EducationGrid>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;