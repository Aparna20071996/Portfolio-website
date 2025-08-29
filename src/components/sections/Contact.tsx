import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLock } from 'react-icons/fi';
import { PERSONAL_INFO } from '../../constants/personalInfo';
import { submitToGoogleSheets } from '../../utils/googleSheets';

const ContactSection = styled.section`
  background-color: var(--background);
  padding: 5rem 0;
`;

const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
`;

const ContactCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactCardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const ContactCardText = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
`;

const ContactCardLink = styled.a`
  color: var(--text-secondary);
  font-size: 0.95rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: var(--box-shadow);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  background-color: var(--input-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  background-color: var(--input-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: var(--transition);
  
  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--gradient-1);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(108, 99, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div<{ success?: boolean }>`
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  background-color: ${props => props.success ? 'rgba(46, 213, 115, 0.1)' : 'rgba(255, 71, 87, 0.1)'};
  color: ${props => props.success ? '#2ed573' : '#ff4757'};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ text: string; success: boolean } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await submitToGoogleSheets(formData);
      
      setIsSubmitting(false);
      
      if (success) {
        setFormMessage({
          text: 'Your message has been sent successfully! I will get back to you soon.',
          success: true
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormMessage({
          text: 'Failed to send message. Please try again.',
          success: false
        });
      }
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setFormMessage(null);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      setFormMessage({
        text: 'Failed to send message. Please try again.',
        success: false
      });
    }
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Feel free to contact me for any work or suggestions below
        </SectionSubtitle>
        
        <ContactContent>
          <ContactInfo>
            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <IconBox>
                {FiMail({})}
              </IconBox>
              <ContactCardContent>
                <ContactCardTitle>Email</ContactCardTitle>
                <ContactCardLink href={`mailto:${PERSONAL_INFO.email}`}>
                  {PERSONAL_INFO.email}
                </ContactCardLink>
              </ContactCardContent>
            </ContactCard>
            
            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <IconBox>
                {PERSONAL_INFO.phone ? FiPhone({}) : FiLock({})}
              </IconBox>
              <ContactCardContent>
                <ContactCardTitle>Phone</ContactCardTitle>
                {PERSONAL_INFO.phone ? (
                  <ContactCardLink href={`tel:${PERSONAL_INFO.phone}`}>
                    {PERSONAL_INFO.phone}
                  </ContactCardLink>
                ) : (
                  <ContactCardText>Available on request</ContactCardText>
                )}
              </ContactCardContent>
            </ContactCard>
            
            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <IconBox>
                {FiMapPin({})}
              </IconBox>
              <ContactCardContent>
                <ContactCardTitle>Location</ContactCardTitle>
                <ContactCardText>
                  {PERSONAL_INFO.location}
                </ContactCardText>
              </ContactCardContent>
            </ContactCard>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} {FiSend({})}
            </SubmitButton>
            
            {formMessage && (
              <FormMessage success={formMessage.success}>
                {formMessage.text}
              </FormMessage>
            )}
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;