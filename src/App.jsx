import React from 'react';
import {useRoutes} from "react-router-dom";
import NavBar from './components/navBarLawyer.jsx';
import ProfileHeader from './components/profileHeader.jsx';
import Skills from './components/skills.jsx';
import Experiences from './components/experiences.jsx';
import Reviews from './components/reviews.jsx';
import Map from './components/Map.jsx';


function App() {
  return (
    <div>
    {useRoutes([
        {path: "/navBarLawyer", element: <NavBar/>},
        {path: "/profileHeader", element: <ProfileHeader/>},
        {path: "/skills", element: <Skills/>},
        {path: "/esperiences", element: <Experiences/>},
        {path: "/reviews", element: <Reviews/>},
        {path: "/Map", element: <Map/>}

    ])
    }
</div>
  );
}

export default App;
