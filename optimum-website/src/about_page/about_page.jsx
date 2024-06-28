// import React from "react";
import mockup from "./../assets/mockup2.png";
import title_shadow from "./../assets/title_shadow.png";
import Detail from "./Components/detail";
import easy from "./../assets/iconeasytouse.png";
import secure from "./../assets/iconsecure.png";
import timesaver from "./../assets/icontimesaver.png";
import useful from "./../assets/iconuseful.png";
import ButtonWithIcon from "./Components/button";

export default function AboutPage() {
  return (
    <div className=" h-[100vh] bg-white flex flex-row justify-around items-end">
        <div className=" h-[90%] w-[30%] ">
            <img src={mockup} className="h-[100%] " alt="mockup" />
        </div>
        <div className=" h-[100%] w-[60%] flex  items-center flex-col ">
            <div className=" flex flex-col justify-center items-center pt-10 ">
                {/* title */}
                <h1 className="text-3xl md:text-6xl tracking-wide md:tracking-wider  text-center p-2 z-10 font-bold">
                    What's <span className=" text-myblue">Optimum</span> ?
                </h1>
                <img
                src={title_shadow}
                alt="shadow"
                className=" "
                />
            </div>
            <div className=" w-[80%] flex justify-center items-center">
                <p className=" text-2xl text-mygrey">Our mobile app is a convenient and user-friendly solution designed to simplify the process of booking appointments with healthcare professionals. With just a few taps, users can easily schedule appointments to see a doctor of their choice, making it hassle-free to access medical care when they need it most. </p>
            </div>
            <div className="flex flex-col h-[30%] w-[70%] justify-around">
                <div className="flex flex-row justify-between">
                    <Detail imagePath={easy} text="Easy to use"/>
                    <Detail imagePath={secure} text="Secure"/>
                </div>
                <div className="flex flex-row justify-between">
                    <Detail imagePath={timesaver} text="Time saver"/>
                    <Detail imagePath={useful} text="Useful"/>
                </div>
            </div>
            <div className=" w-[80%] flex mb-6">
                <p className=" text-2xl text-mygrey">Download the application description file:</p>
            </div>
            <div className="flex felx-row justify-around w-[60%]">
                <ButtonWithIcon text="Version ENG" handleClick={()=>{console.log("eng")}}/>
                <ButtonWithIcon text="Version FR" handleClick={()=>{console.log("fr")}}/>
            </div>
        </div>
    </div>
  );
}