import { StaticImageData } from 'next/image';

import profile from '../assets/profile.jpg';
import svg1 from '../assets/svg-1.svg';
import svg2 from '../assets/svg-2.svg';
import svg3 from '../assets/svg-3.svg';

interface Images {
  profile: StaticImageData;
  svg1: any;
  svg2: any;
  svg3: any;
}

export const Images: Images = { profile, svg1, svg2, svg3 };
