import React, { useEffect } from "react";

const contents = [
  `Our team is comprised of people with an average of 
  20 years each of hands-on experience, competency 
  and integrity. Fundamental to our success has been our 
  commitment to partnerships with both investors and 
  financiers underpinned by hard work and dedication to the 
  construction process`,
  `We’re proud to have built relationships with discerning 
  and ethical investors, ranging from sophisticated private 
  investors to high-net-worth families and semi-institutions. 
  By being development specialists, we’ve not only been 
  able to create lasting connections, we’ve achieved some 
  outstanding results along the way in challenging markets 
  both before and after COVID-19`,
  `We are specialists in Sydney property and construction. 
  This deep industry knowledge flows into our property 
  development loans. We’ve not only been able to deliver 
  exceptional returns, we’ve also achieved profitable and 
  ethical outcomes despite challenging market conditions`,
  `At all times our mission has to be clear-minded and focused 
  on our “backyard” - Sydney real estate. Until now we have 
  operated a tightly held fund for our existing private investors 
  and close associates and participated across the entire 
  capital stack and delivery life-cycle`
]

const Difference = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0,0);
  }, []);

  const differences = [
    {
      key: "01",
      title: "Construction",
      content: `Developer with internal Building/Licensing & Capability`
    },
    {
      key: "02",
      title: "Economics",
      content: `Manager Capital is always First Loss`
    },
    {
      key: "03",
      title: "Legal",
      content: `Direct Investment into Sydney Real Estate`
    },
    {
      key: "04",
      title: "Diversity",
      content: `No Management/Developer Fees until Capital Returned`
    },
    {
      key: "05",
      title: "Experience",
      content: `Sydney-Centric and Quality Compliance Focused`
    },
    {
      key: "06",
      title: "Experience",
      content: `Multiple control and hold points via experienced contracts`
    },
    {
      key: "07",
      title: "Ethics",
      content: `Experience to see the Real Risks and Provide Solutions`
    },
  ]

  return (
    <div id="key-difference" className="bg-white">
      <div className="section-padding py-24">
        <div className="flex gap-4 items-center">
          <p className="roboto-mono text-xs">Property Division Introduction</p>
          <div className="w-20 h-[1px] bg-black"></div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="century lg:text-[46px] text-4xl leading-[70px]  text-[#3d4043] font-normal">
            Our Difference
          </p>
        </div>

        <p className="text-xl font-light my-4">
          With its first development-specific companies
          commencing in 2017, the Group then
          established a Building company (Macton
          Group Pty Ltd) in 2020 to ensure it always had
          the capability to finish any project with quality
          standards regardless of market conditions,
          risks or challenges
        </p>
        <div className="flex mt-4 gap-4 justify-center xl:flex-nowrap flex-wrap">
          <div data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000" className=" w-full">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 my-10">

                {
                  differences.map((item, key) => (
                    <div key={key} className={`text-center ${'bg-[#E2E3E5]'}  relative p-3 rounded`}>
                      <div className="text-3xl flex items-center justify-center top-[-32px] text-white font-bold absolute start-[50%] bg-[#707070] rounded-full translate-x-[-50%] w-[60px] h-[60px]">
                        {`${item.key}`}
                      </div>
                      {/* <div className="text-lg my-4 mt-7 font-bold">
                        {item.title}
                      </div> */}
                      <div className="text-lg mt-4 py-4">
                        {item.content}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>

        {
          contents.map((item, key) => (
            <p key={key} className="text-xl font-light my-4">
              {
                item
              }
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default Difference;
