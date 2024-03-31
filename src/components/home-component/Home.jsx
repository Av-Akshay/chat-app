import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../../redux-toolkit/slice";
import { Navbar } from "../index";
import useRegister from "../../hooks/useRegister";

const Home = () => {
  const { currentUser } = useRegister();

  return (
    <div className="h-screen w-full bg-blue-500 grid place-content-center">
      <div className="w-[70vw] h-[80vh] grid grid-cols-fraction grid-rows-1 rounded-3xl overflow-hidden">
        <div>
          <Navbar />
          <div className="h-[70vh] bg-violet-400 overflow-y-scroll"></div>
        </div>
        <div className="">
          <div>
            <div className="bg-violet-700 h-[10vh] flex flex-col items-start justify-center px-5">
              <h1 className="font-semibold text-xl">user</h1>
              <p className="font-medium text-sm">status</p>
            </div>
          </div>
          <div
            className={`bg-violet-300 h-[60vh] flex flex-col gap-3 p-3 snap-y text-clip overflow-y-scroll`}
          >
            <div className="flex items-center gap-2">
              <figcaption>
                <img
                  className="rounded-[50%] w-9 h-9"
                  src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
                  alt="person"
                />
              </figcaption>
              <p className="bg-white p-2 rounded-message font-medium">
                Hello how are you
              </p>
            </div>
          </div>
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
