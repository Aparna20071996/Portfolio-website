import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { TESTIMONIALS_DATA } from '../../constants/testimonialsInfo';

const STAR_ARRAY = Array(5).fill(null);

const TestimonialsSection = styled.section`
  background-color: var(--background);
  padding: 5rem 0;
`;

const TestimonialsContainer = styled.div`
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

const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialSlider = styled.div`
  overflow: hidden;
  padding: 2rem 0;
`;

const TestimonialTrack = styled.div<{ currentSlide: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => -props.currentSlide * 100}%);
`;

const TestimonialSlide = styled.div`
  min-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const TestimonialCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 5rem;
    color: rgba(108, 99, 255, 0.1);
    font-family: serif;
    line-height: 1;
  }
`;

const TestimonialContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const RatingStars = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 0.5rem;
  color: #FFD700;
`;

const NavigationButton = styled.button<{ direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'prev' ? 'left: -50px;' : 'right: -50px;'}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-bg);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--text-primary);
  cursor: pointer;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  z-index: 2;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    ${props => props.direction === 'prev' ? 'left: -20px;' : 'right: -20px;'}
    width: 35px;
    height: 35px;
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: ${props => props.active ? '30px' : '10px'};
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.active ? 'var(--primary)' : 'rgba(108, 99, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : 'rgba(108, 99, 255, 0.5)'};
  }
`;

interface Testimonial {
  id: number;
  content: string;
  author: string;
  title: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        <SectionTitle>Testimonials</SectionTitle>
        <SectionSubtitle>
          What my clients say about my work and collaboration
        </SectionSubtitle>
        
        <TestimonialsWrapper>
          <NavigationButton 
            direction="prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            {FiChevronLeft({})}
          </NavigationButton>
          
          <TestimonialSlider>
            <TestimonialTrack currentSlide={currentSlide}>
              {TESTIMONIALS_DATA.map((testimonial) => (
                <TestimonialSlide key={testimonial.id}>
                  <TestimonialCard
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.content && (
                      <TestimonialContent>
                        {testimonial.content}
                      </TestimonialContent>
                    )}
                    
                    {testimonial.rating && (
                      <RatingStars>
                        {STAR_ARRAY.map((_, i) => (
                          <span key={i} style={{ color: i < testimonial.rating ? '#FFD700' : '#ccc' }}>★</span>
                        ))}
                      </RatingStars>
                    )}
                    
                    {(testimonial.author || testimonial.title || testimonial.avatar) && (
                      <TestimonialAuthor>
                        {testimonial.avatar && (
                          <AuthorAvatar>
                            <img 
                              src={process.env.PUBLIC_URL + testimonial.avatar.replace('/testimonial', '/avatar')} 
                              alt={testimonial.author || 'Author'}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://via.placeholder.com/60x60/6c63ff/ffffff?text=' + (testimonial.author ? testimonial.author.charAt(0) : 'A');
                              }}
                            />
                          </AuthorAvatar>
                        )}
                        <AuthorInfo>
                          {testimonial.author && <AuthorName>{testimonial.author}</AuthorName>}
                          {testimonial.title && <AuthorTitle>{testimonial.title}</AuthorTitle>}
                        </AuthorInfo>
                      </TestimonialAuthor>
                    )}
                  </TestimonialCard>
                </TestimonialSlide>
              ))}
            </TestimonialTrack>
          </TestimonialSlider>
          
          <NavigationButton 
            direction="next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            {FiChevronRight({})}
          </NavigationButton>
          
          <IndicatorsContainer>
            {TESTIMONIALS_DATA.map((_, index) => (
              <Indicator 
                key={index} 
                active={currentSlide === index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </IndicatorsContainer>
        </TestimonialsWrapper>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;