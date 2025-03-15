import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { theme } from '../styles/theme';

const PageHeader = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/contact-header.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  text-align: center;
  margin-top: -80px; /* To account for navbar height */
  padding-top: 80px;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const ContactForm = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.secondary};
  }
`;

const InfoItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin-right: 1rem;
  width: 30px;
  text-align: center;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: ${theme.colors.primary};
`;

const InfoText = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const Form = styled.form`
  background-color: ${theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const SuccessMessage = styled.div`
  background-color: #e6f7e6;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const MapSection = styled.div`
  margin-top: 5rem;
`;

const MapContainer = styled.div`
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // For demo purposes, we'll just show a success message
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      eventDate: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Contact Us</PageTitle>
          <p>Get in touch to start planning your perfect event</p>
        </div>
      </PageHeader>
      
      <Section>
        <ContactGrid>
          <ContactForm>
            <SectionTitle>Send Us a Message</SectionTitle>
            <Form onSubmit={handleSubmit}>
              {submitted && (
                <SuccessMessage>
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}
              
              <FormGroup>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="service">Service of Interest</Label>
                <Select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Decorations</option>
                  <option value="corporate">Corporate Events</option>
                  <option value="party">Private Parties</option>
                  <option value="custom">Custom Arrangements</option>
                  <option value="other">Other</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="eventDate">Event Date (if applicable)</Label>
                <Input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <Button type="submit" primary>Send Message</Button>
            </Form>
          </ContactForm>
          
          <ContactInfo>
            <SectionTitle>Contact Information</SectionTitle>
            
            <InfoItem>
              <InfoIcon>
                <i className="fas fa-map-marker-alt"></i>
              </InfoIcon>
              <InfoContent>
                <InfoTitle>Our Location</InfoTitle>
                <InfoText>123 Blossom Street, Garden City, NY 10001</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <i className="fas fa-phone-alt"></i>
              </InfoIcon>
              <InfoContent>
                <InfoTitle>Phone Number</InfoTitle>
                <InfoText>(555) 123-4567</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <i className="fas fa-envelope"></i>
              </InfoIcon>
              <InfoContent>
                <InfoTitle>Email Address</InfoTitle>
                <InfoText>info@bloomevents.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <i className="fas fa-clock"></i>
              </InfoIcon>
              <InfoContent>
                <InfoTitle>Business Hours</InfoTitle>
                <InfoText>Monday - Friday: 9:00 AM - 6:00 PM</InfoText>
                <InfoText>Saturday: 10:00 AM - 4:00 PM</InfoText>
                <InfoText>Sunday: Closed</InfoText>
              </InfoContent>
            </InfoItem>
            
            <SocialLinks>
              <SocialIcon href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </SocialIcon>
            </SocialLinks>
          </ContactInfo>
        </ContactGrid>
        
        <MapSection>
          <SectionTitle>Find Us</SectionTitle>
          <MapContainer>
            {/* Replace with your preferred map component */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343077!2d-73.9844092!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620930800000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Bloom Events Location"
            />
          </MapContainer>
        </MapSection>
      </Section>
    </>
  );
};

export default ContactPage;