import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SecSection from "./Pages/SecSection";
import ThirdSection from "./Pages/ThirdSection"; 
import FourthSection from "./Pages/FourthSection";
import AlertSection from "./Pages/AlertSection";
import FifthSection from "./Pages/FifthSection";
import SixthSection from "./Pages/SixthSection";
import SeventhSection from "./Pages/SeventhSection";
import EighthSection from "./Pages/EighthSection";
import Footer from "./Components/Footer";
import ChatButton from "./Components/ChatButton";

function App() {
  return (
    <>
      <Header />
      <Home />
      <SecSection />
      <ThirdSection /> 
       <FourthSection />
       <AlertSection />
       <FifthSection/>
       <SixthSection/>
       <SeventhSection/>
       <EighthSection/>
       <Footer/>
        <ChatButton />
    </>
  );
}

export default App;

