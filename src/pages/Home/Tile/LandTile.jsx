
import HomeIcon from "../../../assets/icons/home.png";
import TownIcon from "../../../assets/icons/town.png";
import BuidingIcon from "../../../assets/icons/BuidingIcon.png";
const Landscape = () => {
  
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
        <div className="py-10">

          <div className="content">
            <h6 className="text-active text-4xl">
              Australia’s Property Landscape
            </h6>

            <ul className="my-5">
              {disciplan_list.map((value) => {
                return (
                  <li key={value.id} className="flex items-center mb-3">
                  
                    <span className="text-active font-bold px-4 text-[40px]">
                      {value.percentage}
                    </span>
                    <p className="text-black max-w-[250px]">{value.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landscape;
