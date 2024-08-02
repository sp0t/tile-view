import React, { useEffect, useState } from "react";
import MetropolitanImg from "../../assets/images/Home/Metropolitan.jpg";

const Metropolitan = () => {
  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto xl:px-10 px-4 w-full lg:py-36 py-24">

          <div className="content">
            <h3 className="text-active text-4xl">
              Greater Sydney Metropolitan
            </h3>
            <img src={MetropolitanImg} className="py-8"/>

            <div className="text-xl text-white pr-[45px] font-light">
              <p className="pt-4">
                Sydney remains the most liquid and stable property
                market in Australia. Median house pricing have returned
                to an all-time high of $895,933 1 Auction Clearance
                rates 85%+ YOY
              </p>
              <p className="pt-4">
                Australia’s national property market is worth over a $9.4
                trillion with Sydney and Melbourne markets make up
                60%+ of this national value
              </p>
              <p className="pt-4">
                The NSW Government has committing over $70 billion
                from 2013-14 to 2020-21 to transport infrastructure
                across Australia, using a combination of grant funding,
                loans and equity investments
              </p>
              <p className="pt-4">
                Sydney stock levels are currently 13-16% below normal
                levels at this time and further price increases are
                anticipated. Supply has plunged and prices have risen
                the fastest in 17 years prior to the RBA interest rate hikes
              </p>
              <p className="pt-4">
                We are over-weighted towards only Sydney and
                NSW opportunities where we are able to monitor and
                influence the supply chain and construction risk closely
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Metropolitan;
