import React from "react";
import foxLogo from "/assets/fox.png";
import lonelyplanet from "/assets/lonelyplanet.png";
import intuit from "/assets/Intuit.png";
import carvana from "/assets/carvana.png";
import kiva from "/assets/kiva.png";
import devacurl from "/assets/decacurl.png";

const Marquee = () => {
  return (
    <div className="max-w-7xl px-10 mt-6">
      <div className="flex items-center bg-cover  justify-between  gap-4">
        <img src={foxLogo} width={100} alt="googleLogo" />
        <img src={lonelyplanet} width={100} alt="googleLogo" />
        <img src={intuit} width={100} alt="googleLogo" />
        <img src={carvana} width={100} alt="googleLogo" />
        <img src={kiva} width={100} alt="googleLogo" />
        <img src={devacurl} width={100} alt="googleLogo" />
      </div>
    </div>
  );
};

export default Marquee;
