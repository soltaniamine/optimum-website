import React from "react";
import mockup from "../assets/mockup3.png";
import DownloadButton from "../homepage/Components/button";

export default function Download() {
    return (
        <div className="h-[60vh] flex justify-center items-center relative">
            <div className="w-[75%] h-[60%] md:h-[60%] bg-mygreen rounded-2xl flex flex-col justify-center md:items-start items-center relative overflow-hidden">
                <div className="h-[90%] w-[90%]  md:w-[60%] flex flex-col justify-evenly relative px-4 sm:px-10 ">
                    <h1 className="text-lg sm:text-2xl  lg:text-4xl font-bold sm:tracking-wide">Download <span className="text-mypink">OPTIMUM</span> <br />NOW !</h1>
                    <p className="text-mygrey">Don't hesitate to click now and experience the convenience and ease of our app for yourself.</p>
                    <DownloadButton text="Download" handleClick={()=>console.log("download button")} />
                </div>
            </div>
                <img
                        src={mockup}
                        className=" hidden md:block absolute bottom-[20%] right-[18%] z-0 h-60 w-60 lg:h-80 lg:w-80 md:h-70 md:w-70"
                        alt="Mockup"
                    />
        </div>
    );
}
