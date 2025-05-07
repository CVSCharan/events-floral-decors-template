import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../styles/theme";

const FooterContainer = styled.footer`
  background-color: ${theme.colors.footer};
  color: ${theme.colors.white};
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-family: ${theme.fonts.main};
  color: ${theme.colors.secondary};
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.white};
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const FooterText = styled.p`
  color: #aaa;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: ${theme.colors.white};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.9rem;
`;

const DeveloperCredit = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: #aaa;
  font-size: 0.85rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Bloom Events</FooterTitle>
          <FooterText>
            Creating unforgettable moments with exquisite floral designs and
            seamless event management.
          </FooterText>
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
          </SocialLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services#weddings">Wedding Decorations</FooterLink>
          <FooterLink to="/services#corporate">Corporate Events</FooterLink>
          <FooterLink to="/services#parties">Private Parties</FooterLink>
          <FooterLink to="/services#custom">Custom Arrangements</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterText>
            <i className="fas fa-map-marker-alt"></i> 123 Main Street,
            Hyderabad, Telangana 500081 City
          </FooterText>
          <FooterText>
            <i className="fas fa-phone"></i> +91 9999999999
          </FooterText>
          <FooterText>
            <i className="fas fa-envelope"></i> info@bloomevents.com
          </FooterText>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Bloom Events. All rights reserved.
      </Copyright>
      <DeveloperCredit>
        Developed with 💛 by{" "}
        <a href="https://charan-cvs.dev" target="_blank">
          CVS CHARAN
        </a>
      </DeveloperCredit>
    </FooterContainer>
  );
};

export default Footer;
