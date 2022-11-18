import React from 'react';
import {
  DollarCircleFilled,
  DashboardFilled,
  FireFilled,
} from '@ant-design/icons';

import { Button } from '../../styles/globalStyles';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from './Pricing.elements';

const Pricing: React.FC = () => {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Our Services</PricingHeading>
        <PricingContainer>
          <PricingCard href="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <DashboardFilled />
              </PricingCardIcon>
              <PricingCardPlan>Starter Pack</PricingCardPlan>
              <PricingCardCost>$99.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>100 New Users</PricingCardFeature>
                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                <PricingCardFeature>Retargeting analytics</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard href="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <DollarCircleFilled />
              </PricingCardIcon>
              <PricingCardPlan>Gold Rush</PricingCardPlan>
              <PricingCardCost>$299.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>1000 New Users</PricingCardFeature>
                <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard href="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <FireFilled />
              </PricingCardIcon>
              <PricingCardPlan>Diamond Kings</PricingCardPlan>
              <PricingCardCost>$999.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>Unlimited Users</PricingCardFeature>
                <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                <PricingCardFeature>24/7 Support</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
};

export default Pricing;
