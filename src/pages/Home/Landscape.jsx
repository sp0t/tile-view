import React, { useEffect, useState } from "react";
import HomeIcon from "../../assets/icons/home.png";
import TownIcon from "../../assets/icons/town.png";
import BuidingIcon from "../../assets/icons/BuidingIcon.png";
const Landscape = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0,0);
  }, []);


  const disciplan_list = [
    {
      id: 1,
      percentage: "$0.947T",
      name: `Commercial Real Estate`,
      icon: BuidingIcon,
    },
    {
      id: 2,
      percentage: "$1.8T",
      name: `Australian Listed Stocks`,
      icon: TownIcon,
    },
    {
      id: 3,
      percentage: "$2.3T",
      name: `Australian Superannuation`,
      icon: BuidingIcon,
    },
    {
      id: 4,
      percentage: "$9.4T",
      name: `Residential Real Estate`,
      icon: HomeIcon,
    }
  ];

  return (
    <>
      <div>
        <div className="section-padding py-24">

          <div className="content">
            <h3 className="text-active text-4xl">
              Australia’s Property Landscape
            </h3>

            <ul className="my-5">
              {disciplan_list.map((value) => {
                return (
                  <li key={value.id} className="flex items-center mb-3">
                    <img src={value.icon} alt="" />
                    <span className="text-active font-bold px-4 text-[40px]">
                      {value.percentage}
                    </span>
                    <p className="text-black max-w-[250px]">{value.name}</p>
                  </li>
                );
              })}
            </ul>

            <div className="text-xl pr-[45px] font-light text-black">
              <p className="pt-4">
                A stable economic and political
                environment with demonstrated real estate
                liquidity and resilience during COVID-19 in
                both Sydney & Melbourne
              </p>
              <p className="pt-4">
                The value of Australian housing is valued at
                circa $9.4 trillion and continues to be the
                backbone of our national economy over
                commercial, stocks and superannuation
              </p>
              <p className="pt-4">
                Australia still needs to urgently construct
                at least 250,000 homes to meet future
                demand imbalances
              </p>
              <p className="pt-4">
                National approvals for new dwellings are
                running at 200,000 per year and that is
                after a recent uplift in approvals
              </p>
              <p className="pt-4">
                Sydney and Melbourne equate for over
                58% of the national value in property
                representing good liquidity
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Landscape;
