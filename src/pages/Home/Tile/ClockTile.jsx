import React from 'react';
import ClockVideoTile from "../../../assets/images/Home/sbs-1.mp4";

const ClockTile = () => {
  return (
  <div>
    <video
      className="w-full lg:object-cover xl:h-[800px] lg:block hidden h-full"
      autoPlay
      loop
      muted
      preload="auto"
      src={ClockVideoTile}
      playsInline
    />
  </div>
  );
}

export default ClockTile;
