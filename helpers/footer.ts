import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  LinkedinFilled,
} from '@ant-design/icons';

interface Footer {
  title: string;
  href: string;
}

interface Icons {
  icon: any;
  href: string;
  ariaLabel: string;
}

export const ABOUT_US: Footer[] = [
  { title: 'How it works', href: '/sign-up' },
  { title: 'Services', href: '/services' },
  { title: 'Products', href: '/products' },
];

export const CONTACT_US: Footer[] = [
  { title: 'Contact', href: '#' },
  { title: 'Support', href: '#' },
  { title: 'Destinations', href: '#' },
  { title: 'Sponsorships', href: '#' },
];

export const GROWTH: Footer[] = [
  { title: 'Careers', href: '#' },
  { title: 'Ambassadors', href: '#' },
  { title: 'Investors', href: '#' },
];

export const SOCIAL_MEDIA: Footer[] = [
  { title: 'Instagram', href: '//www.instagram.com' },
  { title: 'Facebook', href: '//www.facebook.com' },
  { title: 'Twitter', href: '//www.twitter.com' },
  { title: 'LinkedIn', href: '//www.linkedin.com' },
];

export const ICONS: Icons[] = [
  {
    icon: InstagramFilled,
    href: '//www.instagram.com',
    ariaLabel: 'Instagram',
  },
  {
    icon: FacebookFilled,
    href: '//www.facebook.com',
    ariaLabel: 'Facebook',
  },
  {
    icon: TwitterCircleFilled,
    href: '//www.twitter.com',
    ariaLabel: 'Twitter',
  },
  {
    icon: LinkedinFilled,
    href: '//www.linkedin.com',
    ariaLabel: 'Facebook',
  },
];
