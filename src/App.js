// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Explore from './ExploreSlider';
// import ExploreSlider from './ExploreSlider';
// import Ailab from './Ailab';
// import Bot from './Bot';




// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Ailab />
//       <ExploreSlider />
//       <Bot />
//     </div>
//   );
// }

// export default App;



import React from "react";
import { Routes, Route } from "react-router-dom"; // No Router here
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ExploreSlider from './ExploreSlider';
import Ailab from './Ailab';
import Bot from './Bot';
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import OurTeam from "./OurTeam";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <About />
              <Ailab />
              <ExploreSlider />
              <Service />
              <OurTeam />
      <Contact />
      <Chatbot />
      <Footer />
            </>
          } 
        />
        <Route path="/rjbot" element={<Bot />} />
     
      
      </Routes>
    </>
  );
}

export default App;

