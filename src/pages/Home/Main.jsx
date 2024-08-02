import React, { useState, useEffect, useRef  } from "react";
import Tile from "./Tile/TileLayout";
import HorizontalTileSlide from "./ScrollTile/ScrollTileLayout";
import './App.css';
// import Hero from "./Hero";
// import Describe from "./Describe";
// import Capabilities from "./Capabilities";
// import Difference from "./Difference";
// import Experience from "./Experience";
// import Landscape from "./Landscape";
// import News from "./News";
// import Insights from "./Insights";
// import Journey from "./Journey";
// import Clock from "./Clock";
// import Alignment from "./Alignment";
// import Summary from "./Summary";
// import Pipeline from "../Loan/Pipeline";
// import HousingStock from "./HousingStock";
// import Metropolitan from "./Metropolitan";
// import Images from "./Images";

const Main = () => {
  
  useEffect(() => {
    AOS.init();
    window.scrollTo(0,0);
  }, []);
 
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleSections, setVisibleSections] = useState([false]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Determine which sections should be visible
     

      setVisibleSections(newVisibleSections);
    };

    // window.addEventListener('scroll', handleScroll);

    return () => {
      // window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, visibleSections]);
 

  return (
    <>
   <div>
      <div className="App-header">
         <Tile/>
      </div>
        <div className={`fade-section ${visibleSections ? 'fade-in' : ''}`}>
           <HorizontalTileSlide/>
        </div> 
    </div>
      {/* <Hero /> */}
      {/* <Tile/> */}
      {/* <HorizontalTileSlide/> */}
      {/* <Describe />
      <Pipeline/>
      <Summary/>
      <HousingStock/>
      <Landscape />
      <Capabilities />
      <Difference />
      <Experience />
      
      <Images
      insightbg="bg-white"
      insightpara="Renovation & Heritage Conversion"
      insightparadisplay="text-[#3d4043]"
      insightmain="PROPERTIES"
      insightmaindisplay="text-[#3d4043]"
      insightline="bg-[#3d4043]"/>
     
      <Insights
      insightbg="bg-[#EDEDED]"
      insightpara="Latest Insights"
      insightparadisplay="text-[#3d4043]"
      insightmain="INSIGHTS"
      insightmaindisplay="text-[#3d4043]"
      insightline="bg-[#3d4043]"
      />
      <Journey />
      <Clock /> */}
    </>
  );
};

export default Main;
