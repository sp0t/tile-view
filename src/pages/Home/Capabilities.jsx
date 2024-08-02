import React, { useEffect, useState } from "react";


const Capabilities = () => {
  const [visibility, setVisibility] = useState(0);

  useEffect(() => {
    AOS.init();
    window.scrollTo(0,0);
  }, []);

  const capabilities = [
    {
      key: "01",
      title: "CONSTRUCTION & QUALITY",
      content: `We understand building and construction from 
      real costs and quantities, to site establishment, 
      contract management and handover processes`
    },
    {
      key: "02",
      title: "ECONOMICS",
      content: `We understand how the macroeconomic system 
      works and consider both macroeconomic and 
      microeconomic factors in assessing deals`
    },
    {
      key: "03",
      title: "LEGAL",
      content: `We intimately understand financial security 
      instruments, mortgages and environmental 
      planning legal frameworks`
    },
    {
      key: "04",
      title: "ALIGNMENT",
      content: `The Manager is always the single largest
      investor in the Fund and equally invested in 
      every transaction with investors`
    },
    {
      key: "05",
      title: "DIVERSITY",
      content: `We are diverse in age, experience, 
      language and business culture. We are 
      Australian, we are competent and we are 
      open-minded`
    },
    {
      key: "06",
      title: "EXPERIENCE",
      content: `Our Asset Management team have full of 
      lifecycle Building, Construction, Lending 
      and Developer backgrounds to give us 
      the edge in dealing`
    },
    {
      key: "07",
      title: "MARKET",
      content: `We are focused on the Sydney real 
      estate market above all else and focus on 
      understanding the market participants 
      ranging from developers, builders and 
      subcontractors`
    },
    {
      key: "08",
      title: "ETHICS",
      content: `Our principles drive our engagement 
      and actions towards both borrowers and 
      investors daily Ethical is very profitable for 
      all parties`
    },
  ]


  return (
    <>
      <div className="bg-gray">
        <div className="section-padding py-24">

          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex gap-4 justify-between xl:flex-nowrap flex-wrap"
          >
            <div className="md:max-w-[400px] w-full">
              <div className="flex gap-4 items-center">
                <p className="roboto-mono text-xs text-black">Capabilities</p>
                <div className="w-20 h-[1px] bg-black"></div>
              </div>
              <h1 className="century text-black lg:text-[46px] text-4xl leading-[70px] mt-4">
                Capabilities
              </h1>
              {
                capabilities.map((item, key) => (
                  <div
                    key={key}
                    onClick={() => setVisibility(key)}
                    className={`pl-5 mt-2 cursor-pointer ${visibility == key
                      ? "border-l-2 border-active"
                      : "border-l-2 border-black"
                      }`}
                  >
                    <p className="roboto-mono text-[18px] pt-1 text-black">
                      {item.key}
                    </p>
                    <p className="text-[22px] text-black mt-1 font-light">
                      {item.title}
                    </p>
                  </div>
                ))
              }
            </div>

            {
              capabilities.map((item, key) => (
                <div
                  key={key}
                  className={`md:max-w-[610px] w-full ${visibility == key ? "" : "hidden"
                    }`}
                >
                  {/* <img src={FLogo} alt="Image" className="w-full" /> */}
                  <div className="flex gap-4 items-center mt-10">
                    <p className="roboto-mono text-xs text-black">
                      {item.title}
                    </p>
                    <div className="w-20 h-[1px] bg-black"></div>
                  </div>
                  <p className="text-xl text-black font-light my-4">
                    {
                      item.content
                    }
                  </p>
                </div>
              ))
            }

          </div>

        </div>
      </div>
    </>
  );
};

export default Capabilities;
