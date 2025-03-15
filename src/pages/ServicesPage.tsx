import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { theme } from '../styles/theme';

const PageHeader = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/services-header.jpg');
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

const ServiceSection = styled.div`
  margin-bottom: 5rem;
  scroll-margin-top: 100px; /* For smooth scrolling to anchors */
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const ServiceText = styled.div`
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const ServiceDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: ${theme.colors.text};
`;

const ServiceFeatures = styled.ul`
  margin-bottom: 2rem;
  padding-left: 1.5rem;
`;

const ServiceFeature = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  
  &:before {
    content: '✓';
    color: ${theme.colors.secondary};
    margin-right: 0.5rem;
  }
`;

const PackagesSection = styled.div`
  background-color: ${theme.colors.tertiary};
  padding: 5rem 2rem;
  margin: 5rem 0;
`;

const PackagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PackagesGrid = styled.div`
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

const PackageCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const PackageHeader = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1.5rem;
  text-align: center;
`;

const PackageTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const PackagePrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const PackageContent = styled.div`
  padding: 2rem;
`;

const PackageFeatures = styled.ul`
  margin-bottom: 2rem;
  padding-left: 1.5rem;
`;

const PackageFeature = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  
  &:before {
    content: '✓';
    color: ${theme.colors.secondary};
    margin-right: 0.5rem;
  }
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

const ServicesPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to the section if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Our Services</PageTitle>
          <p>Exquisite floral designs and seamless event management for every occasion</p>
        </div>
      </PageHeader>
      
      <Section>
        <ServiceSection id="weddings">
          <SectionTitle>Wedding Decorations</SectionTitle>
          <ServiceContent>
            <ServiceText>
              <ServiceDescription>
                Your wedding day is one of the most important days of your life, and we're here to make it unforgettable. Our wedding floral designs are tailored to reflect your unique love story and personal style.
              </ServiceDescription>
              <ServiceDescription>
                From intimate ceremonies to grand celebrations, we create stunning arrangements that transform your venue into a romantic paradise. Our team works closely with you to understand your vision and bring it to life with exquisite flowers and decor.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Bridal bouquets and boutonnieres</ServiceFeature>
                <ServiceFeature>Ceremony arch and aisle decorations</ServiceFeature>
                <ServiceFeature>Reception centerpieces and table settings</ServiceFeature>
                <ServiceFeature>Cake flowers and special accent pieces</ServiceFeature>
                <ServiceFeature>Full venue transformation</ServiceFeature>
              </ServiceFeatures>
              <Link to="/contact"><Button>Request a Consultation</Button></Link>
            </ServiceText>
            <ServiceImage src="/images/wedding-service.jpg" alt="Elegant wedding floral decorations" />
          </ServiceContent>
        </ServiceSection>
        
        <ServiceSection id="corporate">
          <SectionTitle>Corporate Events</SectionTitle>
          <ServiceContent>
            <ServiceImage src="/images/corporate-service.jpg" alt="Corporate event floral arrangements" />
            <ServiceText>
              <ServiceDescription>
                Make a lasting impression at your next corporate event with our sophisticated floral designs. Whether you're hosting a gala, conference, product launch, or company celebration, our arrangements add elegance and professionalism to any business gathering.
              </ServiceDescription>
              <ServiceDescription>
                We understand the importance of brand consistency and can incorporate your company colors and aesthetic into our designs. Our team handles everything from concept to installation, allowing you to focus on your event.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Lobby and entrance displays</ServiceFeature>
                <ServiceFeature>Conference table arrangements</ServiceFeature>
                <ServiceFeature>Stage and podium decorations</ServiceFeature>
                <ServiceFeature>Branded floral installations</ServiceFeature>
                <ServiceFeature>VIP gift arrangements</ServiceFeature>
              </ServiceFeatures>
              <Link to="/contact"><Button>Discuss Your Event</Button></Link>
            </ServiceText>
          </ServiceContent>
        </ServiceSection>
        
        <ServiceSection id="parties">
          <SectionTitle>Private Parties</SectionTitle>
          <ServiceContent>
            <ServiceText>
              <ServiceDescription>
                Celebrate life's special moments with beautiful floral designs that set the perfect mood for your private event. From birthday parties and anniversaries to baby showers and holiday gatherings, we create custom arrangements that make your celebration truly special.
              </ServiceDescription>
              <ServiceDescription>
                Our team works with you to understand the theme and atmosphere you want to create, then designs floral elements that enhance the experience for you and your guests.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Themed party decorations</ServiceFeature>
                <ServiceFeature>Statement centerpieces</ServiceFeature>
                <ServiceFeature>Photo backdrop installations</ServiceFeature>
                <ServiceFeature>Buffet and bar arrangements</ServiceFeature>
                <ServiceFeature>Take-home arrangements for guests</ServiceFeature>
              </ServiceFeatures>
              <Link to="/contact"><Button>Plan Your Party</Button></Link>
            </ServiceText>
            <ServiceImage src="/images/party-service.jpg" alt="Private party floral decorations" />
          </ServiceContent>
        </ServiceSection>
        
        <ServiceSection id="custom">
          <SectionTitle>Custom Arrangements</SectionTitle>
          <ServiceContent>
            <ServiceImage src="/images/custom-service.jpg" alt="Custom floral arrangement" />
            <ServiceText>
              <ServiceDescription>
                Express your unique style or send a meaningful message with our custom floral arrangements. Whether for a special gift, home decor, or office display, our designers create one-of-a-kind pieces that capture the essence of your vision.
              </ServiceDescription>
              <ServiceDescription>
                We source the freshest seasonal flowers and combine them with artistic vision to create arrangements that are both beautiful and meaningful. Each piece is crafted with attention to detail and a passion for floral artistry.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Seasonal bouquets and arrangements</ServiceFeature>
                <ServiceFeature>Subscription flower services</ServiceFeature>
                <ServiceFeature>Sympathy and celebration arrangements</ServiceFeature>
                <ServiceFeature>Home and office decor</ServiceFeature>
                <ServiceFeature>Gift arrangements for special occasions</ServiceFeature>
              </ServiceFeatures>
              <Link to="/contact"><Button>Order Custom Flowers</Button></Link>
            </ServiceText>
          </ServiceContent>
        </ServiceSection>
      </Section>
      
      <PackagesSection>
        <PackagesContainer>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Packages</SectionTitle>
          <PackagesGrid>
            <PackageCard>
              <PackageHeader>
                <PackageTitle>Essential</PackageTitle>
                <PackagePrice>Starting at $1,500</PackagePrice>
              </PackageHeader>
              <PackageContent>
                <PackageFeatures>
                  <PackageFeature>Initial consultation</PackageFeature>
                  <PackageFeature>Bridal bouquet and 4 boutonnieres</PackageFeature>
                  <PackageFeature>Ceremony arch arrangement</PackageFeature>
                  <PackageFeature>10 centerpieces for reception</PackageFeature>
                  <PackageFeature>Setup and delivery</PackageFeature>
                </PackageFeatures>
                <Link to="/contact"><Button small>Get Quote</Button></Link>
              </PackageContent>
            </PackageCard>
            
            <PackageCard>
              <PackageHeader style={{ backgroundColor: theme.colors.secondary }}>
                <PackageTitle>Premium</PackageTitle>
                <PackagePrice>Starting at $3,000</PackagePrice>
              </PackageHeader>
              <PackageContent>
                <PackageFeatures>
                  <PackageFeature>Everything in Essential package</PackageFeature>
                  <PackageFeature>Bridal party bouquets (up to 4)</PackageFeature>
                  <PackageFeature>Aisle and pew decorations</PackageFeature>
                  <PackageFeature>Cake and sweetheart table flowers</PackageFeature>
                  <PackageFeature>Custom welcome sign arrangement</PackageFeature>
                </PackageFeatures>
                <Link to="/contact"><Button small>Get Quote</Button></Link>
              </PackageContent>
            </PackageCard>
            
            <PackageCard>
              <PackageHeader>
                <PackageTitle>Luxury</PackageTitle>
                <PackagePrice>Starting at $5,000</PackagePrice>
              </PackageHeader>
              <PackageContent>
                <PackageFeatures>
                  <PackageFeature>Everything in Premium package</PackageFeature>
                  <PackageFeature>Full venue transformation</PackageFeature>
                  <PackageFeature>Custom floral installations</PackageFeature>
                  <PackageFeature>Upgraded premium flowers</PackageFeature>
                  <PackageFeature>Day-of coordination assistance</PackageFeature>
                </PackageFeatures>
                <Link to="/contact"><Button small>Get Quote</Button></Link>
              </PackageContent>
            </PackageCard>
          </PackagesGrid>
        </PackagesContainer>
      </PackagesSection>
      
      <Section>
        <CTASection>
          <CTATitle>Ready to Bring Your Vision to Life?</CTATitle>
          <CTAText>
            Every event is unique, and we'd love to create a custom proposal tailored to your specific needs and budget. Contact us today to schedule a consultation with our design team.
          </CTAText>
          <Link to="/contact"><Button>Contact Us</Button></Link>
        </CTASection>
      </Section>
    </>
  );
};

export default ServicesPage;