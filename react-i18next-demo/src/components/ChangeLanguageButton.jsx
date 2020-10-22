import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ChangeLanguageButton() {
  const { t, i18n } = useTranslation();
  const [curLanguage, setLanguage] = useState(i18n.language);
  const changeLanguageMap = {
    'en-US': '中文',
    'zh-CN': 'English'
  }
  const changeLng = () => {
    if (curLanguage === 'en-US') {
      i18n.changeLanguage('zh-CN');
      setLanguage('zh-CN');
    } else if (curLanguage === 'zh-CN') {
      i18n.changeLanguage('en-US');
      setLanguage('en-US');
    }
  }
  return <button onClick={() => {changeLng()}}>{changeLanguageMap[curLanguage]}</button>
}



export default ChangeLanguageButton;