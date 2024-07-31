import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';




const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Contact />
      </main>
    </div>
  );
};


export default App;
