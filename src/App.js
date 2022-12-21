import React from 'react';
import './App.css';

import Tasks from './components/Tasks/Tasks'
import Footer from './components/Footer/Footer'
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <main>
        <Tasks translate={t} changeLanguage={changeLanguage} />
      </main>
      <Footer translate={t} />
    </div>
  );
}

export default App;
