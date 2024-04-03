import React, { useState } from "react";
import { useSelector } from "react-redux";
import useRegister from "../../hooks/useRegister";
import InputText from "./input-component/InputText";
import { IoMenu } from "react-icons/io5";

import { Chat, Navbar, Search, Messages } from "../index";

const Home = () => {
  const data = useSelector((store) => store.auth.user);
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="h-screen w-full bg-blue-500 grid place-content-center">
      <div className=" relative w-[70vw] h-[80vh] grid grid-cols-fraction grid-rows-1 rounded-3xl overflow-hidden max-lg:grid-cols-1 max-lg:grid-rows-1 max-sm:w-[80vw]">
        <div
          className={`max-lg:absolute transition-all max-sm:w-4/5 ${
            menuToggle ? "max-lg:translate-x-0" : "max-lg:-translate-x-[28rem]"
          } `}
        >
          <Navbar menuToggle={menuToggle} />
          <div className="h-[70vh] bg-violet-400 overflow-y-scroll">
            <Search />
            <div className="flex flex-col justify-center gap-2 p-2">
              <Chat />
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="bg-violet-700 h-[10vh] flex items-center px-5 border-none justify-between">
              <div className="flex items-center gap-2">
                <figure className="w-10 h-10 rounded-full border-none">
                  <img
                    className="w-10 h-10 rounded-full border-none"
                    src={data.photoURL}
                    alt="current user"
                  />
                </figure>
                <p className="font-medium text-lg capitalize">
                  {data.displayName}
                </p>
              </div>
              <IoMenu onClick={()=>{menuToggle? setMenuToggle(false): setMenuToggle(true)}} className="text-2xl font-semibold hidden max-lg:block "/>
            </div>
          </div>
          <Messages />
          <InputText />
        </div>
      </div>
    </div>
  );
};

export default Home;
