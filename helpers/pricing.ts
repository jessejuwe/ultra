import {
  DollarCircleFilled,
  FireFilled,
  RocketFilled,
} from '@ant-design/icons';

type Props = {
  icon: any;
  plan: string;
  cost: string;
  duration: string;
  benefits: Array<string>;
};

export const PRICING: Array<Props> = [
  {
    icon: DollarCircleFilled,
    plan: 'Starter Pack',
    cost: '$99.99',
    duration: 'per month',
    benefits: ['100 New Users', '$10,000 Budget', 'Retargeting analytics'],
  },
  {
    icon: FireFilled,
    plan: 'Gold Rush',
    cost: '$299.99',
    duration: 'per month',
    benefits: ['100 New Users', '$50,000 Budget', 'Lead Gen Analytics'],
  },
  {
    icon: RocketFilled,
    plan: 'Diamond Kings',
    cost: '$999.99',
    duration: 'per month',
    benefits: ['Unlimited Users', 'Unlimited Budget', '24/7 Support'],
  },
];
