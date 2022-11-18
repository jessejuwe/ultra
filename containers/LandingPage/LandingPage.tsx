import React from 'react';

import { Page, Title, Heading, Subtitle, SignUp } from './LandingPage.elements';

const LandingPage: React.FC = () => {
  return (
    <Page className="app__landing-page">
      <Title>Ultra</Title>
      <Heading>Improving Business Growth Wordwide</Heading>
      <Subtitle>
        We help business owners increase their revenue. Our team of unique
        specialist can help you achieve your business goals. We have you covered
        no matter where you are located. Over 140 locations worldwide to ensure
        you have access anytime. Get everything set up and ready in under 10
        minutes. Sign up and start improving your business today.
      </Subtitle>
      <SignUp href="/sign-up">Join Ultra</SignUp>
    </Page>
  );
};

export default LandingPage;
