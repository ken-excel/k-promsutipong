import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/globalStyles';
import styled from 'styled-components'

import Introduction from './containers/introduction/introduction';
import Experience from './containers/experience/experience';
import Showcase from './containers/showcase/showcase';
import Contact from './containers/contact/contact';
import Header from './components/header/header';

import './App.css';

function App() {
  let [theme, setTheme] = useState(lightTheme);
  let toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "en"
  );

  let ThemeButton = styled.button`
      background-color: ${theme.color2};
      border-color: ${theme.inverse_hover_color};
      &:hover {
          background-color: ${theme.darkcolor2};
      }
  `;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header className="header"
            theme = {theme}
            language = {language}
            handleSetLanguage = {(language) =>{
                setLanguage(language);
                storeLanguageInLocalStorage(language);
            }}
          />
          <ThemeButton className="theme-toggle-button" onClick={toggleTheme}>
            <i className={theme.icon}></i>
          </ThemeButton>
          <div className="Main">
            <Introduction language={language}/>
            <Experience theme={theme} language={language}/>
            <Showcase theme={theme} language={language}/>
            <Contact language={language}/>
          </div>
        <footer>
        </footer>
        </div>
      </>
    </ThemeProvider>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
