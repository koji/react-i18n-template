import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { LanguageSelector } from './components/LanguageSelector';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Title>{t('welcome.title')}</Title>
        <Description>{t('welcome.description')}</Description>
        <LanguageSelector />
      </Container>
    </ThemeProvider>
  );
}

export default App;