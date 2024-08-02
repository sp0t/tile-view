import React from "react";
import Logo from "../../assets/icons/DCI_logo_White@2x.png";
import { Link } from "react-router-dom";
import { menuList } from "../../config";

function FooterActionList() {
  return (
    <>
      <div className="w-full mx-auto relative h-full py-5 bg-primary xl:px-10 px-4">

        <div className="container relative z-50 mx-auto 2xl:px-0 px-4  w-full pt-8 border-t border-white border-opacity-40 mt-20">
          <div className="flex md:justify-between gap-5 flex-wrap lg:flex-nowrap w-full">
            <div className="xl:w-[330px] md:w-[220px] w-full">
              <Link>
                <img src={Logo} alt="logo" className="mt-3 w-[166px]" />
              </Link>

            </div>
            <div className="flex flex-col md:flex-row gap-5 lg:flex-nowrap flex-wrap lg:justify-between w-full">
              <div className="flex gap-5 justify-between w-full xl:flex-nowrap flex-wrap items-center">
                {menuList.map((v, i) => {
                  return (
                    <ul
                      key={v.id}
                      className={`${i === 0
                        ? "flex-wrap md:w-[100px] w-[100px]"
                        : "flex-wrap md:w-[100px] w-full"
                        } `}
                    >
                      {
                        v.link.includes("#") ?
                          <a
                            href={v.link}
                            className="text-white text-sm font-semibold md:py-3 py-1 hover:underline und"
                          >
                            {v.name}
                          </a>
                          :
                          <Link
                            to={v.link}
                            className="text-white text-sm font-semibold md:py-3 py-1 hover:underline und"
                          >
                            {v.name}
                          </Link>
                      }

                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-40 pt-5 flex md:justify-between gap-4 items-center mt-10 flex-wrap">

            <div className="flex gap-4 items-center md:flex-nowrap flex-wrap">
              <Link to="#">
                <p className="text-white text-sm hover:underline">
                  Privacy Policy
                </p>
              </Link>
              <Link to="#">
                <p className="text-white text-sm hover:underline">Disclosures</p>
              </Link>
              <Link to="#">
                <p className="text-white text-sm hover:underline">
                  Cookie Policy
                </p>
              </Link>
              <p className="text-white text-sm">
                © Copyright 2023. All Rights Reserved
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="mt-5 w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                </svg>
              </div>
              <div className="mt-5 w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>
                </svg>
              </div>
              <div className="mt-5 w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterActionList;
