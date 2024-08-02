import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "../layout/base/Base";
import Home from "../pages/Home/Main";
import AboutMain from "../pages/About/AboutMain";
import LoanMain from "../pages/Loan/LoanMain";
import MezzMain from "../pages/Mezz/MezMain";
import ManageMain from "../pages/Management/ManageMain";
import LandMain from "../pages/Land/LandMain";
import PrivacyMain from "../pages/Privacy/PrivacyMain";
import DisclosuresMain from "../pages/Disclosures/DisclosuresMain";
import InsightMain from "../pages/Insight/InsightMain";
import ResidenceMain from "../pages/Residence/ResidenceMain";
import InsightDetailMain from "../pages/InsightDetail/InsightDetailMain";
import News from "../pages/News/NewsMain"
import NewsDetails from "../pages/NewsDetail/NewsDetailMain"

import Describe from '../pages/Home/Describe';
import Pipeline from '../pages/Loan/Pipeline';
import Summary from  "../pages/Home/Summary";
import HousingStock from "../pages/Home/HousingStock";
import Landscape from "../pages/Home/Landscape";
import Capabilities from "../pages/Home/Capabilities";
import Difference from "../pages/Home/Difference";
import Experience from "../pages/Home/Experience";
import Images from "../pages/Home/Images";
import Insights from "../pages/Home/Insights";
import Journey from "../pages/Home/Journey";
import Clock from "../pages/Home/Clock";

function MyRoutes() {

  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<AboutMain></AboutMain>}></Route>
            <Route path="/loan" element={<LoanMain></LoanMain>}></Route>
            <Route path="/mezz" element={<MezzMain></MezzMain>}></Route>
            <Route path="/manage" element={<ManageMain></ManageMain>}></Route>
            <Route path="/land" element={<LandMain></LandMain>}></Route>
            <Route path="/privacy" element={<PrivacyMain></PrivacyMain>}></Route>
            <Route path="/disclosures" element={<DisclosuresMain></DisclosuresMain>}></Route>
            <Route path="/insight" element={<InsightMain></InsightMain>}></Route>
            <Route path="/residence" element={<ResidenceMain></ResidenceMain>}></Route>
            <Route path="/insight-detail" element={<InsightDetailMain></InsightDetailMain>}></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/news-details" element={<NewsDetails></NewsDetails>}></Route>

            <Route path="/describe" element={<Describe/>}></Route>
            <Route path="/pipeline" element={<Pipeline/>}></Route>
            <Route path="/summary" element={<Summary/>}></Route>
            <Route path="/housingstock" element={<HousingStock/>}></Route>
            <Route path="/landscape" element={<Landscape/>}></Route>
            <Route path="/capabilities" element={<Capabilities/>}></Route>
            <Route path="/difference" element={<Difference/>}></Route>
            <Route path="/experience" element={<Experience/>}></Route>
            <Route path="/images" 
                element={ <Images
                  insightbg="bg-white"
                  insightpara="Renovation & Heritage Conversion"
                  insightparadisplay="text-[#3d4043]"
                  insightmain="PROPERTIES"
                  insightmaindisplay="text-[#3d4043]"
                  insightline="bg-[#3d4043]"/>}>
            </Route>
            <Route path="/insights" 
                   element={<Insights
                    insightbg="bg-[#EDEDED]"
                    insightpara="Latest Insights"
                    insightparadisplay="text-[#3d4043]"
                    insightmain="INSIGHTS"
                    insightmaindisplay="text-[#3d4043]"
                    insightline="bg-[#3d4043]"
                    />}>
            </Route>
            <Route path="/journey" element={<Journey/>}></Route>
            <Route path="/clock" element={<Clock/>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default MyRoutes;
