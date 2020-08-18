import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
//import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  //const [portfolioSelected, setPortfolioSelected] = useState(false);
  //const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        //portfolioSelected={portfolioSelected}
        //setPortfolioSelected={setPortfolioSelected}
        //resumeSelected={resumeSelected}
        //setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;
