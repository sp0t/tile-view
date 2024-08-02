import React, { useEffect, useState } from "react";

const Capabilities = () => {
  

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
      <div className="bg-white">
        <h3 className="century text-black  text-3xl leading-[70px] mt-4">Capabilities</h3>
           { 
              capabilities.map((item, key) => (
                <p key={key} className="mt-3 text-left pl-10">
                     {item.key}. {item.title} 
                 </p>
                 ))
            }
      </div>
    </>
  );
};

export default Capabilities;
 