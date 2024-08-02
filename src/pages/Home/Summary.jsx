import React, { useEffect } from "react";

const Summary = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <div id="fluid">
        <div className="section-padding py-24">
          <div className="flex">
            <h1 className="century lg:text-[46px] text-4xl leading-[70px] mt-4 text-[#3d4043]">
              DCI Summary
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex gap-4 xl:flex-nowrap flex-wrap my-10"
          >
            <div className="pie_chart_wrapper xl:mr-12 overflow-auto w-[2200px]">
              {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
              <img src="/images/DCI 4 division.png"/>
            </div>

            <div className="content">
              <h3 className="text-active text-4xl">
                STRENGTH THROUGH DIVERSITY
              </h3>

              <p className="text-xl text-[#3d4043] mt-10 pr-[45px] font-light">
                The Group holds investments in growing
                key sectors that offer a force multiplier
                effect across complementary industries
                but with a foundation of Sydney real
                estate, property and building businesses
              </p>

              <p className="text-xl text-[#3d4043] mt-10 pr-[45px] font-light">
                We are able to work across the entire
                value add stack. Our involvement
                ranges from full life-cycle property
                development, project management,
                construction, financier, and preferred
                equity provider
              </p>

              <p className="text-xl text-[#3d4043] mt-10 pr-[45px] font-light">
                Outcome driven to ensure the quality
                and competency of a larger firm with
                the flexibility and entrepreneurial eye
                of smaller firms. An overriding desire to
                ensure best-in-class specialisation across
                our industry types
              </p>
            </div>
          </div>
           
        </div>
      </div>
    </>
  );
};

export default Summary;
