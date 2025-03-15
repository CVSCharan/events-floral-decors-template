import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { theme } from '../styles/theme';

const PageHeader = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/about-header.jpg');
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

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const StoryContent = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const StoryText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: ${theme.colors.text};
`;

const ValuesSection = styled.div`
  background-color: ${theme.colors.tertiary};
  padding: 5rem 2rem;
  margin: 5rem 0;
`;

const ValuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: ${theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: ${theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

const ValueText = styled.p`
  color: ${theme.colors.lightText};
`;

const TeamSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const MemberName = styled.h3`
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary};
`;

const MemberTitle = styled.p`
  color: ${theme.colors.secondary};
  font-style: italic;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: ${theme.colors.lightText};
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 5rem;
  padding: 3rem;
  background-color: ${theme.colors.tertiary};
  border-radius: 8px;
`;

const CTATitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const CTAText = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  color: ${theme.colors.lightText};
`;

const AboutPage = () => {
  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>About Bloom Events</PageTitle>
          <p>Our story, our values, and the passionate team behind the blooms</p>
        </div>
      </PageHeader>
      
      <Section>
        <StorySection>
          <StoryContent>
            <SectionTitle>Our Story</SectionTitle>
            <StoryText>
              Founded in 2010, Bloom Events began as a small floral design studio with a passion for creating beautiful arrangements that tell a story. What started as a dream has blossomed into a full-service event management and floral design company.
            </StoryText>
            <StoryText>
              Our journey has been marked by creativity, dedication, and a commitment to bringing our clients' visions to life. Over the years, we've had the privilege of being part of countless special moments, from intimate weddings to grand corporate galas.
            </StoryText>
            <StoryText>
              Today, our team of talented designers and event planners continues to push the boundaries of floral artistry and event management, creating unforgettable experiences that leave a lasting impression.
            </StoryText>
            <Link to="/services">
              <Button>Explore Our Services</Button>
            </Link>
          </StoryContent>
          <StoryImage src="/images/our-story.jpg" alt="Bloom Events founder arranging flowers" />
        </StorySection>
      </Section>
      
      <ValuesSection>
        <ValuesContainer>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-heart"></i>
              </ValueIcon>
              <ValueTitle>Passion</ValueTitle>
              <ValueText>
                We pour our hearts into every arrangement and event, bringing enthusiasm and dedication to everything we create.
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-gem"></i>
              </ValueIcon>
              <ValueTitle>Quality</ValueTitle>
              <ValueText>
                We source the finest flowers and materials, ensuring that every detail meets our high standards of excellence.
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-lightbulb"></i>
              </ValueIcon>
              <ValueTitle>Creativity</ValueTitle>
              <ValueText>
                We approach each project with fresh eyes, creating unique designs that reflect our clients' personalities and visions.
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-handshake"></i>
              </ValueIcon>
              <ValueTitle>Integrity</ValueTitle>
              <ValueText>
                We build relationships based on trust, transparency, and honest communication with our clients and partners.
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-leaf"></i>
              </ValueIcon>
              <ValueTitle>Sustainability</ValueTitle>
              <ValueText>
                We are committed to eco-friendly practices, minimizing waste and sourcing locally whenever possible.
              </ValueText>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <i className="fas fa-users"></i>
              </ValueIcon>
              <ValueTitle>Collaboration</ValueTitle>
              <ValueText>
                We work closely with our clients, listening to their needs and bringing their visions to life through teamwork.
              </ValueText>
            </ValueCard>
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>
      
      <Section>
        <TeamSection>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet Our Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <MemberImage src="/images/team-1.jpg" alt="Emily Parker" />
              <MemberName>Emily Parker</MemberName>
              <MemberTitle>Founder & Creative Director</MemberTitle>
              <MemberBio>
                With over 15 years of experience in floral design, Emily's artistic vision and passion for creating beautiful experiences are the heart of Bloom Events.
              </MemberBio>
            </TeamMember>
            
            <TeamMember>
              <MemberImage src="/images/team-2.jpg" alt="David Chen" />
              <MemberName>David Chen</MemberName>
              <MemberTitle>Event Planning Director</MemberTitle>
              <MemberBio>
                David's meticulous attention to detail and exceptional organizational skills ensure that every event runs smoothly from concept to execution.
              </MemberBio>
            </TeamMember>
            
            <TeamMember>
              <MemberImage src="/images/team-3.jpg" alt="Sophia Rodriguez" />
              <MemberName>Sophia Rodriguez</MemberName>
              <MemberTitle>Lead Floral Designer</MemberTitle>
              <MemberBio>
                Sophia's innovative approach to floral design and her ability to transform spaces with stunning arrangements have made her an invaluable part of our team.
              </MemberBio>
            </TeamMember>
          </TeamGrid>
        </TeamSection>
        
        <CTASection>
          <CTATitle>Let's Create Something Beautiful Together</CTATitle>
          <CTAText>
            Whether you're planning a wedding, corporate event, or special celebration, our team is ready to bring your vision to life with our creative expertise and attention to detail.
          </CTAText>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </CTASection>
      </Section>
    </>
  );
};

export default AboutPage;