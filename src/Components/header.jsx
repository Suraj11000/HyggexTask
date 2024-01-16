import { Fragment } from "react";
import Logo from "../assets/Clip path group.svg";

const Header = () => {
  return (
    <Fragment>
      <div className=" flex justify-between mx-28 items-center pt-5">
        <div className=" flex gap-2 justify-center items-center">
          <img src={Logo} alt="" className="w-10 pt-3 cursor-pointer" />
          <h1 className=" text-3xl text-[#06286e] font-semibold  cursor-pointer">
            Hygge<span className=" font-bold">X</span>
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-12">
          <ul className=" flex gap-10">
            <li className="text-xl text-[#3A3740] cursor-pointer">Home</li>
            <li className="text-xl text-[#3A3740]  cursor-pointer">
              Flashcard
            </li>
            <li className="text-xl text-[#3A3740]  cursor-pointer">Contact</li>
            <li className="text-xl text-[#3A3740]  cursor-pointer">FAQ</li>
          </ul>
          <button className=" text-2xl bg-gradient-to-b from-[#072971] to-[#164DBD] rounded-full px-10 py-1.5 text-white">Login</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
