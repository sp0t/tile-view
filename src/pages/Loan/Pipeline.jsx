import React, { useState, useEffect } from "react";



const pipelines = [
  {
    id: 0,
    suburb: "Potts Point",
    name: "Boutique",
    description: "",
    images: [
      {
        url: "/images/pipelines/prairiewood-1-2.jpg",
        description: "Prairiewood - Stage 1 Civil Construction"
      },
    ],
    year: "2011",
    region: "Inner CBD / East",
    stockType: "Serviced Apartment",
    lots: "10"
  },
  {
    id: 1,
    suburb: "Bellevue Hill",
    name: "High Density",
    description: "Oversized Luxury Residences",
    images: [
      {
        url: "/images/pipelines/bellevue-hill.jpg",
        description: "Bellevue Hill - Oversized Luxury Residences"
      }
    ],
    year: "2023",
    region: "Eastern Suburbs",
    stockType: "Apartments",
    lots: "6"
  },
  {
    id: 2,
    suburb: "Vaucluse",
    name: "Medium Density",
    description: "",
    images: [
      {
        url: "/images/pipelines/vaucluse.jpg",
        description: "Vaucluse - Boutique Collection of Luxury Apartments"
      }
    ],
    year: "2030",
    region: "Eastern Suburbs",
    stockType: "Apartments",
    lots: "6"
  },
  {
    id: 3,
    suburb: "Pymble",
    name: "House & Land Subdivision",
    description: "",
    images: [
      {
        url: "/images/pipelines/pymble.jpg",
        description: "Pymble - Limited Collection of Luxury Senior Townhouses"
      }
    ],
    year: "2073",
    region: "North Shore",
    stockType: "Townhouses",
    lots: "9"
  },
  {
    id: 4,
    suburb: "Neutral Bay",
    name: "Commercial & Mixed Use",
    description: "",
    images: [
      {
        url: "/images/pipelines/prairiewood-2.jpg",
        description: "Prairiewood - Stage 2 - 110 apartment and commercial mixed use"
      },
    ],
    year: "2089",
    region: "Lower North Shore",
    stockType: "Apartments",
    lots: "35"
  },
  {
    id: 5,
    suburb: "Cromer",
    name: "Hotel & Leisure",
    description: "",
    images: [
      {
        url: "/images/pipelines/prairiewood-sewer.jpg",
        description: "Prairiewood - Stage 2 - 110 apartment and commercial mixed use"
      },
    ],
    year: "2099",
    region: "Northern Beaches",
    stockType: "Townhouses",
    lots: "35"
  },
  {
    id: 6,
    suburb: "Prairiewood",
    name: "Duplex",
    description: "",
    images: [
      {
        url: "/images/pipelines/prairiewood-1-1.jpg",
        description: "Praireiwood - Stage 1 - Completed January 2021"
      },
    ],
    year: "2176",
    region: "Western Suburbs",
    stockType: "Apartments",
    lots: "35"
  },
  // {
  //   id: 7,
  //   suburb: "Byron Bay",
  //   description: "",
  //   images: [],
  //   year: "2481",
  //   region: "North Coast",
  //   stockType: "Townhouses",
  //   lots: "35"
  // },
]

const Pipeline = () => {

  const [visibility, setVisibility] = useState(() => {
    return pipelines[0]
  });

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="expertise" className="bg-gray py-24">
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="section-padding"
        >
          <h1 className="century text-black lg:text-[56px] text-4xl leading-[70px] my-4">
            Development Pipeline
          </h1>
          <div className="flex gap-4 lg:justify-between xl:flex-nowrap flex-wrap">
            <div className="md:max-w-[450px] w-full">
              {
                pipelines.map((item, key) => (
                  <div
                    onClick={() => setVisibility(item)}
                    className={`pl-5 my-1 cursor-pointer ${visibility?.id == key
                      ? "border-l-2 border-active"
                      : "border-l-2 border-black"
                      }`}
                  >
                    <p className="roboto-mono text-xs pt-2 text-black">
                      {item.year}
                    </p>
                    <p className="text-[32px] text-black mt-1 font-light">
                      {
                        item.name
                      }
                    </p>
                  </div>
                ))
              }

            </div>

            {
              <div className={`md:max-w-[610px] w-full`}>
                <div className="flex gap-4 items-center mt-4">
                  <p className="roboto-mono text-xs text-black">
                    {visibility?.name}
                  </p>
                  <div className="w-20 h-[1px] bg-black"></div>
                </div>
                {/* <div className="border-b border-black py-2 mt-4 flex justify-between text-lg text-black">
                  <p>
                    SUBURB
                  </p>
                  <p>
                    {visibility?.suburb}
                  </p>
                </div> */}
                <div className="border-b border-black py-2 flex justify-between text-lg text-black">
                  <p>
                    YEAR
                  </p>
                  <p>
                    {visibility?.year}
                  </p>
                </div>
                <div className="border-b border-black py-2 flex justify-between text-lg text-black">
                  <p>
                    REGION
                  </p>
                  <p>
                    {visibility?.region}
                  </p>
                </div>
                <div className="border-b border-black py-2 flex justify-between text-lg text-black">
                  <p>
                    STOCK TYPE
                  </p>
                  <p>
                    {visibility?.stockType}
                  </p>
                </div>
                <div className="border-b border-black py-2 flex justify-between text-lg text-black">
                  <p>
                    LOTS
                  </p>
                  <p>
                    {visibility?.lots}
                  </p>
                </div>

                {
                  visibility?.images?.map((item, key) => (
                    <div className="mt-4">
                      <img src={item?.url} />
                      <p className="text-lg text-black font-light my-4">
                        {
                          item?.description
                        }
                      </p>
                    </div>
                  ))
                }


                {/* <div className="wp-block-buttons mt-8">
                  <a className="btn btn btn-primary btn2">Next</a>
                </div> */}
              </div>
            }


          </div>
        </div>
      </div>
    </>
  );
};

export default Pipeline;
