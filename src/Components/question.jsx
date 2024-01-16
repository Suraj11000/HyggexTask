import { Fragment } from "react";
import bulb from "../assets/Frame (1).svg";
import volume from "../assets/Frame (2).svg";
import retry from "../assets/Vector (1).svg";
import full from "../assets/Vector (2).svg";
import back from "../assets/Vector (3).svg";
import next from "../assets/Vector (4).svg";
import pow from "../assets/Frame 41.svg";
import plus from "../assets/Frame (3).svg";
const Question = () => {
  return (
    <Fragment>
      <div className=" mx-28 pt-12">
        <h1 className=" text-4xl text-[#0D3992] font-bold">
          Relations and Functions ( Mathematics )
        </h1>
        <div className="pt-14">
          <ul className=" flex justify-center items-center gap-16">
            <li className=" font-bold text-[#06286e] border-b-2 border-[#06286e] px-2 py-1 ">
              Study
            </li>
            <li className=" font-semibold text-[#3A3740]">Quiz</li>
            <li className=" font-semibold text-[#3A3740]">Test</li>
            <li className=" font-semibold text-[#3A3740]">Game</li>
            <li className=" font-semibold text-[#3A3740]">Others</li>
          </ul>
          <div className=" ">
            <div className=" bg-gradient-to-tr from-[#2081ed] to-[#051b92] h-[22rem] mt-10 items-center justify-center rounded-[3rem] py mx-72">
              <div className=" flex justify-between p-10">
                <img src={bulb} alt="" />
                <img src={volume} alt="" />
              </div>
              <h1 className=" flex justify-center text-4xl text-white font-bold pt-10">
                9 + 6 + 7x - 2x - 3
              </h1>
            </div>
            <div className="flex justify-between items-center mx-72 px-10 py-5 pt-9">
              <img src={retry} alt="" />
              <div className="flex justify-center items-center gap-10">
                <img src={back} alt="" className=" w-14" />
                <p className=" font-bold text-xl">01/10</p>
                <img src={next} alt="" className=" w-14" />
              </div>
              <img src={full} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-10 mx-20">
        <img src={pow} alt="" />
        <div className="flex items-center">
          <img src={plus} alt="" />
          <p className=" mr-8">Create Flashcard</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Question;
