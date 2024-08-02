// src/components/TileLayout.js
import React from 'react';
import GridLayout from 'react-grid-layout';
import './TileLayout.css';
import { Link } from 'react-router-dom';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './ResponsiveGridLayout.css';

// import Hero from '../Hero';
// import Describe from '../Describe';
// import Pipeline from '../../Loan/Pipeline';
// import Summary from '../Summary';
// import HousingStock from '../HousingStock';
// import Landscape from '../Landscape';
// import Capabilities from "../Capabilities";
// import Difference from '../Difference';
// import Experience from '../Experience';
// import Images from '../Images';
// import Insights from '../Insights';
// import Journey from '../Journey';
// import Clock from '../Clock';

import HomeTop from '../../../assets/images/Home/home-top-1.jpg';
import PipeImg from '../../../assets/images/Home/pipeline.jpg';
import DiverImg from '../../../assets/images/Home/diversity.png';
import HousingTile from './HoustingTile';
import LandTile from './LandTile';
import CapaTile from './CapaTile';
import DiffTile from './DiffTile';
import ExpTile from './ExpTile';
import ImageTile from '../../../assets/images/Home/Renovation.jpg';
import InsightTile from '../../../assets/images/Home/Insights.jpg';
import JourneyTile from '../../../assets/images/Home/journey.jpg';
import ClockTile from './ClockTile';
const TileLayout = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const layout = [
    { i: '1',  x: 0,   y: 0,  w: 4,   h: 12 },
    { i: '2',  x: 4,   y: 0,  w: 6,   h: 6 },
    { i: '3',  x: 10,  y: 0,  w: 2,   h: 6 },
    { i: '4',  x: 4,   y: 6,  w: 3,   h: 12 },
    { i: '5',  x: 0,   y: 12, w: 4,   h: 12 },
    { i: '6',  x: 7,   y: 6,  w: 2.5, h: 12 },
    { i: '7',  x: 9.5, y: 6,  w: 2.5, h:12 },
    { i: '8',  x: 4,   y: 18, w: 4,   h: 6 },
    { i: '9',  x: 8,   y: 18, w: 4,   h: 12 },
    { i: '10', x: 0,   y: 18, w: 8,   h: 9 },
    { i: '11', x: 8,   y: 18, w: 4,   h: 15 },
    { i: '12', x: 0,   y: 24, w: 8,   h: 12 },
  ];

  return (
    <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout, md: layout, sm: layout, xs: layout, xxs: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 6, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={30}
        width={screen.width-17}
        margin={[10, 10]} // Horizontal and vertical margins in pixels
        isDraggable={false} // Disable dragging
        isResizable={false} // Disable resizing
        compactType={null} // Disable auto-arranging
    >
      <div key="1" className="tileLayout">
        <div className="overlay">
          <Link to ='/describe'><img src={HomeTop} /></Link></div>
      </div>
      <div key="2" className="tileLayout">
        <div className="overlay">
          <Link to ='/pipeline'><img src={PipeImg}/></Link></div>
      </div>
      <div key="3" className="tileLayout">
         <div className="overlay bg-white">
          <Link to ='/summary'><img src={DiverImg}/></Link></div>
      </div>
      <div key="4" className="tileLayout">
         <div className="overlay">
           <Link to ='/housingstock'><HousingTile/></Link></div>
      </div>
      <div key="5" className="tileLayout">
         <div className="overlay bg-gray">
            <Link to ='/landscape'><LandTile/></Link></div>
      </div>
      <div key="6" className="tileLayout">
         <div className="overlay">
           <Link to ='/capabilities'><CapaTile/></Link></div>
      </div>
      <div key="7" className="tileLayout">
         <div className="overlay">
           <Link to ='/difference'><DiffTile/></Link></div>
      </div>
      <div key="8" className="tileLayout"> 
         <div className="overlay">
            <Link to ='/experience'><ExpTile/></Link></div>
      </div>
      <div key="9" className="tileLayout">
         <div className="overlay">
            <Link to ='/images'><img src={ImageTile}/></Link></div>
      </div>
      <div key="10" className="tileLayout">
         <div className="overlay">
            <Link to ='/insights'><img src={InsightTile}/></Link></div>
      </div>
      <div key="11" className="tileLayout">
        <div className="overlay">
            <Link to ='/journey'><img src={JourneyTile}/></Link></div>
      </div>
      <div key="12" className="tileLayout">
        <div className="overlay">
           <Link to ='/clock'><ClockTile/></Link>
        </div>
      </div>
    </ResponsiveGridLayout>
  );
};

export default TileLayout;
