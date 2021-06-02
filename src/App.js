import './App.scss';

import Landing from './components/Landing';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">

      <Landing />
      <WhatIDo />
      <Projects />
      <AboutMe />
      <ContactMe />
      
    </div>
  );
}

export default App;
