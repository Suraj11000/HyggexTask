import { Fragment } from "react";
import Home from "../assets/Frame.svg";
import Arrow from "../assets/Vector.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="flex items-center gap-1.5 mx-28 pt-12">
        <img src={Home} alt="" className=" w-6" />
        <img src={Arrow} alt="" />
        <p className=" text-[#3A3740]">Flashcard</p>
        <img src={Arrow} alt="" />
        <p className="text-[#3A3740]">Mathematics</p>
        <img src={Arrow} alt="" />
        <p className="text-[#06286e] font-bold">Relation and Function</p>
      </div>
    </Fragment>
  );
};

export default Navigation;
