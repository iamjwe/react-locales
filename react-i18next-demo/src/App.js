import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en-US';
import cn from './locales/zh-CN';
import MyComponent from './components/MyComponent';
import ChangeLanguageButton from './components/ChangeLanguageButton';

const defaultLng = localStorage.language || navigator.language;
const resources = {
  "en-US": {
    translation: {
      ...en
    }
  },
  "zh-CN": {
    translation: {
      ...cn
    }
  }
}
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLng,
    fallbackLng: 'en-US',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <div className="App">
      <ChangeLanguageButton />
      <MyComponent />
    </div>
  );
}

export default App;
