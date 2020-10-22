import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent () {
  const { t, i18n } = useTranslation();
  return <h1>{t('hello react-i18next')}</h1>
} 



export default MyComponent;