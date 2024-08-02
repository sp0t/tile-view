import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ScrollTile.css';
import { Link } from 'react-router-dom';

import HomeTop from '../../../assets/images/Home/home-top-1.jpg';
import PipeImg from '../../../assets/images/Home/pipeline2.jpg';
import DiverImg from '../../../assets/images/Home/diversity.png';
import HousingTile from '../Tile/HoustingTile';
import LandTile from '../Tile/LandTile';
import CapaTile from '../Tile/CapaTile';
import DiffTile from '../Tile/DiffTile';
import ExpTile from '../Tile/ExpTile';
import ImageTile from '../../../assets/images/Home/Renovation.jpg';
import InsightTile from '../../../assets/images/Home/Insights1.jpg';
import JourneyTile from '../../../assets/images/Home/journey.jpg';
import ClockTile from '../Tile/ClockTile';

const ScrollTileLayout = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,         // Enable auto-scroll
    autoplaySpeed: 3000,    // Set auto-scroll speed in milliseconds
    pauseOnHover: true,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]   
  };

  return (
    <div className="App">
      
      <Slider {...settings}>
        <div key="1" >
          <Link to='/describe'>
            <div className='scroll-tile'><img src={HomeTop}/></div>
          </Link>
        </div>
        <div key="2">
          <Link to="/pipeline">
              <div className='scroll-tile'><img src={PipeImg}/></div>
          </Link>
        </div>
        <div key="3">
          <Link to="/summary">
             <div className='scroll-tile'><img src={DiverImg}/></div>
          </Link>
        </div>
        <div key="4">
          <Link to="/housingstock">
             <div className='scroll-tile'><HousingTile/></div>
           </Link>
        </div>
        <div key="5">
          <Link to="/landscape">
            <div className='scroll-tile'><LandTile/></div>
          </Link>
        </div>
        <div key="6">
           <Link to ='/capabilities'>
             <div className='scroll-tile'><CapaTile/></div>
           </Link>
        </div>
        <div key="7">
           <Link to ='/difference'>
              <div className='scroll-tile'><DiffTile/></div>
            </Link>
        </div>
        <div key="8">
           <Link to ='/experience'>
            <div className='scroll-tile'><ExpTile/></div>
           </Link>
        </div>
        <div key="9">
             <Link to="/images">
               <div className='scroll-tile'><img src={ImageTile}/></div>
            </Link>
        </div>
        <div key="10">
             <Link to ='/insights'>
                <div className='scroll-tile'><img src={InsightTile}/></div>
             </Link>
        </div>
        <div key="11" >
            <Link to ='/journey'>
             <div className='scroll-tile'> <img src={JourneyTile}/></div>
            </Link>
        </div>
        <div key="12">
           <Link to ='/clock'>
              <div className='scroll-tile'><ClockTile/></div>
           </Link>
        </div>
      </Slider>
    </div>
  );
};

export default ScrollTileLayout;
