import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const Select = styled.select`
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  border-radius: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledGlobe = styled(Globe)`
  color: ${({ theme }) => theme.colors.textLight};
`;

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Container>
      <StyledGlobe size={20} />
      <Select value={i18n.language} onChange={changeLanguage}>
        <option value="en">{t('language.en')}</option>
        <option value="es">{t('language.es')}</option>
        <option value="zh">{t('language.zh')}</option>
        <option value="ko">{t('language.ko')}</option>
        <option value="ar">{t('language.ar')}</option>
        <option value="fr">{t('language.fr')}</option>
        <option value="ja">{t('language.ja')}</option>
      </Select>
    </Container>
  );
};