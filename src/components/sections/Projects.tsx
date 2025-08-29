import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = styled.section`
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

const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0;
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)'};
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : 'rgba(108, 99, 255, 0.1)'};
    border-color: var(--primary);
    color: ${props => props.active ? 'white' : 'var(--primary)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 25, 41, 0.9), transparent);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
`;

const ProjectCategory = styled.span`
  background-color: var(--primary);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
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

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary);
  padding: 0.2rem 0.7rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateY(-2px);
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.',
      image: process.env.PUBLIC_URL + '/project1.svg',
      category: 'fullstack',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with drag-and-drop functionality.',
      image: process.env.PUBLIC_URL + '/project2.svg',
      category: 'frontend',
      techStack: ['React', 'TypeScript', 'Redux', 'Styled Components'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media platforms with data visualization and reporting features.',
      image: process.env.PUBLIC_URL + '/project3.svg',
      category: 'frontend',
      techStack: ['React', 'Chart.js', 'Material UI', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'A RESTful API for a blog platform with authentication, authorization, and CRUD operations.',
      image: process.env.PUBLIC_URL + '/project4.svg',
      category: 'backend',
      techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      githubLink: 'https://github.com',
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'A weather forecast application that provides real-time weather data and forecasts for locations worldwide.',
      image: process.env.PUBLIC_URL + '/project5.svg',
      category: 'frontend',
      techStack: ['React', 'OpenWeather API', 'CSS Modules'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time messaging platform with private and group chat functionality.',
      image: process.env.PUBLIC_URL + '/project6.svg',
      category: 'fullstack',
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>My Projects</SectionTitle>
        <SectionSubtitle>
          Here are some of my recent projects. Each project reflects my skills and expertise in different areas of software development.
        </SectionSubtitle>
        
        <FilterContainer>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </FilterButton>
          <FilterButton 
            active={filter === 'frontend'} 
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </FilterButton>
          <FilterButton 
            active={filter === 'backend'} 
            onClick={() => setFilter('backend')}
          >
            Backend
          </FilterButton>
          <FilterButton 
            active={filter === 'fullstack'} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </FilterButton>
        </FilterContainer>
        
        <AnimatePresence mode="wait">
          <ProjectsGrid>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    <ProjectCategory>{project.category}</ProjectCategory>
                  </ProjectOverlay>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <TechStack>
                    {project.techStack.map((tech, index) => (
                      <TechItem key={index}>{tech}</TechItem>
                    ))}
                  </TechStack>
                  
                  <ProjectLinks>
                    {project.githubLink && (
                      <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        {FiGithub({})} Code
                      </ProjectLink>
                    )}
                    {project.liveLink && (
                      <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        {FiExternalLink({})} Live Demo
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;