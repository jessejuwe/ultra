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
import { PRICING } from '../../helpers/pricing';

const Pricing: React.FC = () => {
  return (
    <PricingSection id="pricing">
      <PricingWrapper>
        <PricingHeading>Our Services</PricingHeading>
        <PricingContainer>
          {PRICING.map((item, index) => (
            <PricingCard key={index} href="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <item.icon />
                </PricingCardIcon>
                <PricingCardPlan>{item.plan}</PricingCardPlan>
                <PricingCardCost>{item.cost}</PricingCardCost>
                <PricingCardLength>{item.duration}</PricingCardLength>
                <PricingCardFeatures>
                  {item.benefits.map((benefit, benefitIndex) => (
                    <PricingCardFeature key={benefitIndex}>
                      {benefit}
                    </PricingCardFeature>
                  ))}
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          ))}
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
};

export default Pricing;
