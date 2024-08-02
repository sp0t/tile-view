import HomeIcon from "../../../assets/icons/home.png";
import TownIcon from "../../../assets/icons/town.png";
import BuidingIcon from "../../../assets/icons/BuidingIcon.png";
const HousingStock = () => {
 
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
        <div className="py-14">

          <div className="content">
            <h5 className="text-active text-4xl">
              Diversified Across Multiple Housing Stock
            </h5>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default HousingStock;
