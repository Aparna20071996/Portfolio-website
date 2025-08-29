import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../../constants/servicesInfo';

const ServicesSection = styled.section`
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

const ServicesContainer = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--gradient-1);
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(108, 99, 255, 0.05);
    z-index: -1;
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  background: rgba(108, 99, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  transition: var(--transition);
  
  ${ServiceCard}:hover & {
    background: var(--primary);
    color: white;
    transform: rotateY(180deg);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--gradient-1);
  }
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-secondary);
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
  }
`;

const Services: React.FC = () => {
  
  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <SectionTitle>My Services</SectionTitle>
        <SectionSubtitle>
          I offer a wide range of web development services tailored to meet your specific needs
        </SectionSubtitle>
        
        <ServicesGrid>
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                {service.icon({})}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <ServiceFeature key={idx}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;