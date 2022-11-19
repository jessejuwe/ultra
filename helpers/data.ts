import { images } from '../constants';

type Props = {
  primary: boolean;
  lightBg: boolean;
  lightText: boolean;
  imgStart: boolean;
  start?: any;
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

export const homeObjOne: Props = {
  primary: true,
  lightBg: true,
  lightText: false,
  imgStart: false,
  start: false,
  topline: 'Sarah Jeni',
  heading:
    'Ultra helped me increase my revenue by over 3X in less than 3 months!',
  description:
    "Their team is wonderful! I can't believe I didn't start working with them earlier.",
  buttonLabel: 'View Case Study',
  img: images.profile,
  imgSrc: images.profile,
  alt: 'Vault',
  sectionID: 'section--1',
  style: 'profile-pic',
};

export const homeObjTwo: Props = {
  primary: false,
  lightBg: false,
  lightText: true,
  imgStart: true,
  start: true,
  topline: 'Marketing Agency',
  heading: 'Lead Generation Specialist for Online Businesses',
  description:
    'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  buttonLabel: 'Get Started',
  img: images.svg1,
  imgSrc: images.svg1,
  alt: 'Credit Card',
  sectionID: 'section--2',
};

export const homeObjThree: Props = {
  primary: true,
  lightBg: true,
  lightText: false,
  imgStart: false,
  start: false,
  topline: 'Instant Setup',
  heading: 'Extremely quick onboarding process',
  description:
    "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
  buttonLabel: 'Learn More',
  img: images.svg2,
  imgSrc: images.svg2,
  alt: 'Vault',
  sectionID: 'section--3',
};

export const homeObjFour: Props = {
  primary: false,
  lightBg: false,
  lightText: true,
  imgStart: true,
  start: true,
  topline: 'Secure Database',
  heading: 'All your data is stored on our secure server',
  description:
    'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
  buttonLabel: 'Sign Up Now',
  img: images.svg3,
  imgSrc: images.svg3,
  alt: 'Vault',
  sectionID: 'section--4',
};
