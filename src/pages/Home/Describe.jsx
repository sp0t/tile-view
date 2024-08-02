import React, { useEffect } from "react";
import ManImage from '../../assets/images/Home/home-top-1.jpg';
const Describe = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="section-padding py-24">
        <div className="flex gap-4 justify-center xl:flex-nowrap flex-wrap">
          <div
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <h1 className="century text-[#3d4043] lg:text-[56px] text-4xl leading-[70px]">
              Sydney Specialist
              <p className="lg:text-[40px] text-3xl text-active">
                Property & Building Financier
              </p>
            </h1>
            <p className="text-xl text-[#3d4043] mt-10 pr-[45px] font-light">
              As one of the most experienced lenders in Sydney’s private commercial mortgage markets, we have proprietary abilities to originate, arrange and participate in the entire capital stack, focusing primarily on First Mortgages and further secured with second mortgage and preferred equity securities backed by significant Manager’s equity co-investment.
            </p>
            <p className="text-xl text-[#3d4043] mt-4 pr-[45px] font-light mb-8">
              Our unique ability and experience to understand wide elements of development risk, remediation, construction and dispute resolutions sets us apart. This means we are equally comfortable with a land subdivision acquisition, established unit portfolio refinance or a Class 2 Residential construction programme.
            </p>
            {/* <div className="wp-block-buttons">
              <a className="btn btn btn-info">Load more</a>
            </div> */}
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="md:max-w-[710px] w-full"
          >
            <div className="md:max-h-[650px] overflow-hidden">
              <img src={ManImage} alt="Image" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Describe;
