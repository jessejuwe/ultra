import React, { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import { Button } from '../../styles/globalStyles';

import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterAnchor,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements';

import {
  ABOUT_US,
  CONTACT_US,
  GROWTH,
  SOCIAL_MEDIA,
  ICONS,
} from '../../helpers/footer';

const Footer: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Event Delegation | Page Navigation
    // 1. Add event listener to common parent element
    const footerLinks = document.querySelector('.footer__links');

    footerLinks?.addEventListener('click', function (e: any) {
      e.preventDefault();

      const id = e.target.getAttribute('href');

      // 2. In that event listener, determine what element generated the event
      if (e.target.classList.contains('footer__link')) {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(id); // programmatic navigation
      }
    });

    return () => {};
  }, []);

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button>Subscribe</Button>
        </Form>
      </FooterSubscription>

      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems className="footer__links">
            <FooterLinkTitle>About Us</FooterLinkTitle>
            {ABOUT_US.map((item, index) => (
              <FooterLink key={index} href={item.href}>
                {item.title}
              </FooterLink>
            ))}
            <FooterAnchor href="#pricing" className="footer__link">
              Pricing
            </FooterAnchor>
          </FooterLinkItems>

          <FooterLinkItems className="footer__links">
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            {CONTACT_US.map((item, index) => (
              <FooterLink key={index} href={item.href}>
                {item.title}
              </FooterLink>
            ))}
          </FooterLinkItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinkItems className="footer__links">
            <FooterLinkTitle>Growth</FooterLinkTitle>
            {GROWTH.map((item, index) => (
              <FooterLink key={index} href={item.href}>
                {item.title}
              </FooterLink>
            ))}
            <FooterAnchor href="#section--1" className="footer__link">
              Testimonials
            </FooterAnchor>
          </FooterLinkItems>

          <FooterLinkItems className="footer__links">
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            {SOCIAL_MEDIA.map((item, index) => (
              <FooterAnchor
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </FooterAnchor>
            ))}
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo href="/">
            <SocialIcon />
            Ultra
          </SocialLogo>
          <WebsiteRights>Ultra © 2022 All rights reserved</WebsiteRights>
          <SocialIcons>
            {ICONS.map((item, index) => (
              <SocialIconLink
              href={item.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
              >
                <item.icon />
              </SocialIconLink>
            ))}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
