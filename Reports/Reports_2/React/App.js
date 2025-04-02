import React from 'react';
import Profile from './components/Profile';
import WhoAmI from './components/WhoAmI';
import MyStackAndProjects from './components/MyStackProjects';
import Contact from './components/Contact';

const App = () => (
  <div className="mainbox">
    <Profile />
    <WhoAmI />
    <MyStackAndProjects />
    <Contact />
  </div>
);

export default App;
