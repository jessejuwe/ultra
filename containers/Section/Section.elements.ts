import Image from 'next/image';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalSectionStyle = createGlobalStyle`
.lazy-img {
  filter: blur(20px);
}

.section {
  width: 100%;
  transition: all 0.3s ease-in-out;
  padding-left: 0;
  padding-right: 0;
}

.section--hidden {
  opacity: 0;
  transform: translateY(8rem);
  }
`;

export const InfoSec = styled.section<{ lightBg: boolean }>`
  color: #fff;
  padding: 80px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const InfoRow = styled.div<{ imgStart: boolean }>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImageWrapper = styled.div<{ imgStart: any }>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};

  @media screen and (max-width: 768px) {
    .profile-pic {
      height: 380px;
    }
  }
`;

export const TopLine = styled.div<{ lightText: boolean }>`
  color: ${({ lightText }) => (lightText ? '#a9b3c1' : '#1c2237')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<{ lightText: boolean }>`
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#ff6836')};
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p<{ lightText: boolean }>`
  color: ${({ lightText }) => (lightText ? '#a9b3c1' : '#1c2237')};
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

export const InfoGraphic = styled(Image)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: 4px;
`;
