import React from "react";
import { useSelector } from "react-redux";
import useRegister from "../../hooks/useRegister";

import { Chat, Navbar, Search, Messages } from "../index";

const Home = () => {
  const { currentUser } = useRegister();
  const data = useSelector((store) => store.auth.user);

  return (
    <div className="h-screen w-full bg-blue-500 grid place-content-center">
      <div className="w-[70vw] h-[80vh] grid grid-cols-fraction grid-rows-1 rounded-3xl overflow-hidden">
        <div>
          <Navbar />
          <div className="h-[70vh] bg-violet-400 overflow-y-scroll">
            <Search />
            <Chat />
          </div>
        </div>
        <div className="">
          <div>
            <div className="bg-violet-700 h-[10vh] flex items-center gap-2 px-5">
              <figure>
                <img
                  className="w-10 h-10 rounded-full"
                  src={data.photoURL}
                  alt=""
                />
              </figure>
              <h1 className="font-medium text-lg capitalize">
                {data.displayName}
              </h1>
            </div>
          </div>
          <Messages />
          <div className="bg-white flex items-center h-[10vh]">
            <input
              type="text"
              placeholder="Write Text..."
              className=" w-full border-none outline-none px-5 font-medium "
            />
            <button className="text-blue-500 font-bold text-lg px-8 py-5">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
