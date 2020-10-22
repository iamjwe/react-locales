## react-i18next

文档：

- https://www.i18next.com/

- https://react.i18next.com/

说明：react国际化示例等在react.i18next文档中，具体的api文档在i18next文档中。

### 1.安装与示例

###### 安装

```
npm install react-i18next i18next --save
```

###### 示例（APP.js）

```javascript
import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

// 1.引入国际化数据
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

// 1.使用国际化数据
function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

export default App;

```

### 2.实践：管理国际化数据

###### 翻译数据（src/locales）

管理方式：通过一个对象来维护一种语言的所有翻译键值对。如下示例所示，zh-CN.js文件默认暴露一个聚合了项目中所有中文翻译键值对的对象，其中具体的中文翻译键值对会分散在zh-CN文件夹下的各个文件中以方便组织管理。

- 示例：目录结构

![image-20201022154014857](assets/image-20201022154014857.png)

- zh-CN/hello.js

```javascript
export default {
  'hello react-i18next': '你好，react-i18next'
}
```

- zh-CN.js

```javascript
import hello from './zh-CN/hello'

export default {
  ...hello
}
```

###### 接入项目(src/App.js)

```javascript
import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en-US';
import cn from './locales/zh-CN';
// ...other code

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
// ...other code
```

### 3.实践：引用国际化数据

###### 方式1：使用钩子

```javascript
import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

function MyComponent () {
  const { t, i18n } = useTranslation();
  return <h1>{t('Welcome to React')}</h1>
}
```

###### 其它方式见（拒绝做文档搬运工）

https://react.i18next.com/guides/quick-start#translate-your-content

### 4.实践：支持切换语言

```javascript
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
```

### 5.实践：提取翻译工具