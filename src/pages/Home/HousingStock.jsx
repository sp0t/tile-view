import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HomeIcon from "../../assets/icons/home.png";
import TownIcon from "../../assets/icons/town.png";
import BuidingIcon from "../../assets/icons/BuidingIcon.png";
const HousingStock = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0,0);
  }, []);


  const disciplan_list = [
    {
      id: 1,
      percentage: "25%",
      name: `New House & Land, Land Subdivision`,
      icon: HomeIcon,
    },
    {
      id: 2,
      percentage: "35%",
      name: `Semi-detached, Terraces, Townhouses`,
      icon: TownIcon,
    },
    {
      id: 3,
      percentage: "40%",
      name: `Multi-Unit Apartments`,
      icon: BuidingIcon,
    }
  ];

  return (
    <>
      <div className="bg-gray">
        <div className="section-padding py-24">

          <div className="content">
            <h3 className="text-active text-4xl">
              Diversified Across Multiple Housing Stock
            </h3>

            <ul className="my-5">
              {disciplan_list.map((value) => {
                return (
                  <li key={value.id} className="flex items-center mb-3">
                    {/* <img src={value.icon} alt="" /> */}
                    <span className="text-active font-bold px-4 text-[40px]">
                      {value.percentage}
                    </span>
                    <p className="text-black max-w-[250px]">{value.name}</p>
                  </li>
                );
              })}
            </ul>

            <div className="text-xl text-black pr-[45px] font-light">
              <p className="pt-4">
                Financing constraints are the biggest hurdle to
                overcoming a NSW apartment shortfall of 48,000
                homes that will grow to almost 60,000 without
                government intervention
              </p>
              <p className="pt-4">
                Shortfall is approximately 40,000 apartments and
                anticipated to rise to 59,700 (FY 2025) to reach
                equilibrium with demand. NSW would need to
                produce 25,000 new apartments a year for the
                next 13 years to fully meet demand
              </p>
              <p className="pt-4">
                Australia’s $9.4 trillion housing stock is worth
                more than four times the size of GDP, and about
                30% more than the combined market value of all
                companies listed on the ASX, our superannuation
                pool and total commercial real estate assets
              </p>
              <p className="pt-4">
                A scheme to build 1 million new dwellings is
                planned in Treasurer Jim Chalmers’ first budget in
                a historic accord between the federal government,
                the states and private investors including the
                superannuation sector DCI
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default HousingStock;
