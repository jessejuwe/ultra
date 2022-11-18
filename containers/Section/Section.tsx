import React, { useEffect } from 'react';
import Link from 'next/link';

import {
  GlobalSectionStyle,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  ImageWrapper,
  TopLine,
  Heading,
  Subtitle,
  InfoGraphic,
} from './Section.elements';
import { Container, Button } from '../../styles/globalStyles';

type Props = {
  primary: boolean;
  lightBg: boolean;
  lightText: boolean;
  imgStart: boolean;
  start: boolean;
  topline: string;
  heading: string;
  description: string;
  buttonLabel: string;
  img: any;
  imgSrc: any;
  alt: string;
  sectionID: string;
  style?: string;
};

const Section: React.FC<Props> = props => {
  // Lazy Loading Images
  useEffect(() => {
    const imgTargets = document.querySelectorAll('img[data-src]');

    const loadImg = (entries: any, observer: any) => {
      const [entry] = entries;

      // Guard Clause
      if (!entry.isIntersecting) return;

      // Replace src attribute with data-src attribute
      entry.target.src = entry.target.dataset.src;

      // Remove the blurry filter class
      entry.target.addEventListener('load', () =>
        entry.target.classList.remove('lazy-img')
      );

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: '200px',
    });

    imgTargets.forEach(img => imgObserver.observe(img));

    return () => {};
  }, []);

  return (
    <>
      <GlobalSectionStyle />
      <InfoSec className="section" id={props.sectionID} lightBg={props.lightBg}>
        <Container>
          <InfoRow imgStart={props.imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightText={props.lightText}>{props.topline}</TopLine>
                <Heading lightText={props.lightText}>{props.heading}</Heading>
                <Subtitle lightText={props.lightText}>
                  {props.description}
                </Subtitle>
                <Link href="/sign-up">
                  <Button big fontBig primary={props.primary}>
                    {props.buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>

            <ImageWrapper imgStart={props.start}>
              <InfoGraphic
                className={`${props.style} lazy-img`}
                src={props.img}
                alt={props.alt}
                data-src={props.imgSrc}
              />
            </ImageWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Section;
