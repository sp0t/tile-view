import React, { useEffect, useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import "swiper/css";
import "swiper/css/navigation";

const Images = ({
  insightbg,
  insightpara1,
  insightpara,
  insightparadisplay,
  insightmain,
  insightmaindisplay,
  insightline,
  insightbtn,
}) => {

  useEffect(() => {
    AOS.init();
    window.scrollTo(0,0);
  }, []);

  const swiperRef = useRef(null);

  const images = [
    {
      title: "Potts Point - Renovation of Heritage Commercial Conversion to Residential",
      image: "/images/renovations/DCI_interior_1.jpg",
      subImages: [
        "/images/renovations/DCI_interior_1.jpg",
        "/images/renovations/DCI_interior_2.jpg",
      ]
    },
    {
      title: "Vaucluse - Excavation Narrow Steep Block for 6 exclusive residences",
      image: "/images/renovations/DCI_site_1.jpg",
      subImages: [
        "/images/renovations/DCI_site_1.jpg",
        "/images/renovations/DCI_site_2.jpg",
        "/images/renovations/DCI_site_3.jpg",
      ]
    },
  ]

  return (
    <div className={`${insightbg}`}>
      <div
        id="images"
        className={`section-padding py-24`}
      >
        <div className="">
          <div className="w-full">
            <div className="flex gap-4 items-center">
              <p
                className={`roboto-mono text-xs font-normal ${insightmaindisplay}`}
              >
                {insightmain}
              </p>
              <div className={`w-20 h-[1px] ${insightline}`}></div>
            </div>
            <p
              className={`lg:text-[56px] text-4xl mt-4 mb-8 font-light century leading-[50px] ${insightparadisplay}`}
            >
              {insightpara}
            </p>


          </div>
        </div>
        <div className="mt-6">
          <div className="items" style={{ position: "relative" }}>
            <ul className="flex gap-5 overflow-x-auto">
              <Swiper
                ref={swiperRef}
                className="myswiper home"
                modules={[Navigation, Autoplay]}
                spaceBetween={32}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 2,
                  },
                }}
              >
                {
                  images.map((item, key) => (

                    <SwiperSlide key={key}>
                      <li
                        className="shadow-lg rounded-md"
                        style={{ cursor: "pointer" }}
                      >
                        <article>
                          <header className="thumbnail-insights h-full">
                            {/* <img
                              width={2560}
                              height={1400}
                              src={item.image}
                              className="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded h-full"
                              alt="Building an equity options market: The story of Brazil’s B3"
                              decoding="async"
                              data-lazy-srcset="https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3.png 2560w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-576x315.png 576w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-768x420.png 768w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-1536x840.png 1536w, https://optiver.com/wp-content/uploads/2023/07/Insights_SSO_Article3_B3-2048x1120.png 2048w"
                              data-lazy-sizes="(max-width: 2560px) 100vw, 2560px"
                              data-lazy-src="wp-content/uploads/2023/07/Insights_SSO_Article3_B3.png"
                              data-ll-status="loaded"
                              sizes="(max-width: 2560px) 100vw, 2560px"
                              srcSet={item.image}
                            /> */}
                            <TECarousel showControls showIndicators ride="carousel">
                              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                                {
                                  item.subImages.map((url, key1) => (
                                    <TECarouselItem
                                      key={key + key1}
                                      itemID={key + key1}
                                      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    >
                                      <img
                                        src={url}
                                        className="block w-full"
                                        alt="..."
                                      />
                                      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white bg-[#4f4f4f8f] rounded-sm md:block">
                                        <h5 className="text-xl">
                                          {item.title}
                                        </h5>
                                        {/* <p>
                                          Some representative placeholder content for the first slide.
                                        </p> */}
                                      </div>
                                    </TECarouselItem>
                                  ))
                                }
                              </div>
                            </TECarousel>


                          </header>

                        </article>
                      </li>
                    </SwiperSlide>
                  ))
                }

              </Swiper>
            </ul>
          </div>
        </div>
        {/* <div className={`2xl:max-w-[1300px] w-full mt-4 ${insightbtn}`}>
          <div className="wp-block-buttons">
            <a className="btn btn btn-primary">All Insight</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Images;
