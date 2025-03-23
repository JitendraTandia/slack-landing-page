import React from "react";
import Button from "./Button";
import gLogo from "/assets/glogo.png"
import heroImg from "/assets/hero.webp"

const Hero = () => {
  return (
    <div className="py-10 px-10 flex justify-between items-center mt-4">
      <div className="left flex flex-col gap-8 w-[40%]">
        <h1 className=" text-5xl font-bold ">Slack is where the future works</h1>
        <p>
          Transform the way you work with one place for everyone and everything
          you need to get things done.
        </p>
        <div className="flex gap-4">
          <Button
            text={"try for free"}
            className={
              "border rounded cursor-pointer px-6 py-3 uppercase bg-[#661f69] text-white"
            }
          />
          <div className="flex gap-2 items-center p-1 bg-[#2e85f0] rounded">
            <img className=" bg-white rounded" src={gLogo} width={34} alt="googleLogo" />
            <Button
              text={"sign up with google"}
              className={
                "cursor-pointer text-white rounded px-4 py-1 uppercase"
              }
            />
          </div>
        </div>
      </div>
      <div className="right">
        <img className="rounded-xl size-70 w-fit" src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
};

export default Hero;
