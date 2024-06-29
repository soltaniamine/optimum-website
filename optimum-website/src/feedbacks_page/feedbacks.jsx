// import React from "react";
import feedback_icon from "../assets/feedback_icon.png";
import feed1 from "../assets/feed1.png";
import feed2 from "../assets/feed2.png";
import feed3 from "../assets/feed3.png";
import feed4 from "../assets/feed4.png";
import feed5 from "../assets/feed5.png";
import feed6 from "../assets/feed6.png";
import feed7 from "../assets/feed7.png";
import feed8 from "../assets/feed8.png";

const Feedbacks = ()=>{
    return (
        <div className="md:h-[100vh] h-[120vh]  flex flex-col items-center">
            <div className="flex justify-center md:mt-0">
                <h1 className="text-black sm:text-2xl text-xl md:text-3xl lg:text-4xl font-bold text-center pt-10">A statement from the Developers</h1>
                <img src={feedback_icon} alt="" />
            </div>
            <div className="hidden  md:flex flex-row h-[80%] w-[100%] justify-between items-center">
                <div className=" h-[80%] flex flex-col justify-between w-[20%] ">
                    <img src={feed1} alt=""  className="h-[45%]"/>
                    <img src={feed2} alt="" className="h-[45%]"/>
                </div>
                <div className=" h-[100%] flex flex-col justify-between w-[22%] ">
                    <img src={feed3} alt="" className="h-[45%]"/>
                    <img src={feed4} alt="" className="h-[45%]"/>
                </div>
                <div className=" h-[80%] flex flex-col justify-between w-[24%] ">
                    <img src={feed5} alt="" className="h-[45%]"/>
                    <img src={feed6} alt="" className="h-[45%]"/>
                </div>
                <div className=" h-[100%] flex flex-col justify-between w-[18%] ">
                    <img src={feed7} alt="" className="h-[42%]"/>
                    <img src={feed8} alt="" className="h-[42%]"/>
                </div>
            </div>
            <div className="flex flex-col md:hidden h-[90%] w-[80%] items-center justify-around">
                <img src={feed3} alt="" className="h-[25%] w-[80%]"/>
                <img src={feed4} alt="" className="h-[25%] w-[80%]"/>
                <img src={feed5} alt="" className="h-[20%] w-[80%]"/>
                <img src={feed6} alt="" className="h-[20%] w-[80%]"/>
            </div>
        </div>
    ); 
}

export default Feedbacks;