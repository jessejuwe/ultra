import React from 'react';
import { useRouter } from 'next/router';

import {
  Page,
  Title,
  Heading,
  Subtitle,
  ActionGroup,
  Action,
} from './ErrorPage.elements';

const ErrorPage: React.FC = () => {
  const router = useRouter();

  const goBackHandler = () => router.back();
  const reloadHandler = () => router.reload();

  return (
    <Page>
      <Title>Ultra</Title>
      <Heading>Improving Business Growth Wordwide</Heading>
      <Subtitle>Page Not Found.</Subtitle>
      <ActionGroup>
        <Action onClick={goBackHandler}>Go Back</Action>
        <Action onClick={reloadHandler}>Refresh</Action>
      </ActionGroup>
    </Page>
  );
};

export default ErrorPage;
