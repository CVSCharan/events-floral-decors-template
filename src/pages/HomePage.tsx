import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.white};
  padding: 0 2rem;
  margin-top: -80px; /* To account for navbar height */
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 300;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${theme.colors.secondary};
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.lightText};
  margin-bottom: 1.5rem;
`;

const TestimonialsSection = styled.section`
  background-color: ${theme.colors.tertiary};
  padding: 5rem 2rem;
`;

const TestimonialSlider = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const TestimonialContent = styled.div`
  background-color: ${theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 4rem;
    color: ${theme.colors.secondary};
    opacity: 0.2;
    font-family: ${theme.fonts.main};
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const TestimonialAuthor = styled.div`
  margin-top: 1rem;
`;

const AuthorName = styled.h4`
  color: ${theme.colors.primary};
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.p`
  color: ${theme.colors.lightText};
  font-size: 0.9rem;
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? theme.colors.secondary : '#ccc'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const CTASection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/cta-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: ${theme.colors.white};
  text-align: center;
  padding: 5rem 2rem;
`;

const CTATitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
`;

const CTAText = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Bloom Events transformed our wedding into a magical experience. The floral arrangements were breathtaking and exactly what we envisioned. Their attention to detail and professionalism made our special day stress-free and beautiful.",
      author: "Sarah & Michael",
      title: "Wedding Clients"
    },
    {
      text: "Working with Bloom Events for our corporate gala was a pleasure. They understood our brand aesthetic perfectly and created an elegant atmosphere that impressed all our guests and partners.",
      author: "James Wilson",
      title: "Marketing Director, TechCorp"
    },
    {
      text: "The team at Bloom Events went above and beyond for my daughter's sweet sixteen. The floral designs were stunning and the event coordination was flawless. We couldn't have asked for a better experience!",
      author: "Rebecca Thompson",
      title: "Private Event Client"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Creating Unforgettable Events with Exquisite Floral Design</HeroTitle>
          <HeroSubtitle>
            From intimate gatherings to grand celebrations, we bring your vision to life with elegant floral arrangements and seamless event management.
          </HeroSubtitle>
          <ButtonGroup>
            <Link to="/services"><Button>Our Services</Button></Link>
            <Link to="/contact"><Button outlined>Contact Us</Button></Link>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceImage style={{ backgroundImage: "url('/images/wedding.jpg')" }} />
            <ServiceContent>
              <ServiceTitle>Wedding Decorations</ServiceTitle>
              <ServiceDescription>
                Create the wedding of your dreams with our custom floral designs and decor that reflect your unique love story.
              </ServiceDescription>
              <Link to="/services#weddings"><Button small>Learn More</Button></Link>
            </ServiceContent>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceImage style={{ backgroundImage: "url('/images/corporate.jpg')" }} />
            <ServiceContent>
              <ServiceTitle>Corporate Events</ServiceTitle>
              <ServiceDescription>
                Elevate your corporate gatherings with sophisticated floral arrangements that make a lasting impression.
              </ServiceDescription>
              <Link to="/services#corporate"><Button small>Learn More</Button></Link>
            </ServiceContent>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceImage style={{ backgroundImage: "url('/images/custom.jpg')" }} />
            <ServiceContent>
              <ServiceTitle>Custom Arrangements</ServiceTitle>
              <ServiceDescription>
                From intimate dinner parties to grand galas, our custom floral designs add elegance to any occasion.
              </ServiceDescription>
              <Link to="/services#custom"><Button small>Learn More</Button></Link>
            </ServiceContent>
          </ServiceCard>
        </ServicesGrid>
      </Section>
      
      <TestimonialsSection>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <TestimonialSlider>
          <TestimonialContent>
            <TestimonialText>
              {testimonials[currentTestimonial].text}
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAuthor>
            <AuthorName>{testimonials[currentTestimonial].author}</AuthorName>
            <AuthorTitle>{testimonials[currentTestimonial].title}</AuthorTitle>
          </TestimonialAuthor>
          
          <SliderDots>
            {testimonials.map((_, index) => (
              <Dot 
                key={index} 
                active={currentTestimonial === index}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </SliderDots>
        </TestimonialSlider>
      </TestimonialsSection>
      
      <CTASection>
        <CTATitle>Ready to Create Something Beautiful?</CTATitle>
        <CTAText>
          Let's collaborate to bring your vision to life. Whether you're planning a wedding, corporate event, or special celebration, our team is here to create an unforgettable experience.
        </CTAText>
        <Link to="/contact"><Button>Get in Touch</Button></Link>
      </CTASection>
    </>
  );
};

export default HomePage;