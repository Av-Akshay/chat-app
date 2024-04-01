import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase/index";
import { signOut } from "firebase/auth";
import { deleteUser } from "../redux-toolkit/slice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.auth.user);
  console.log(data);
  return (
    <div className="bg-violet-800 h-[16vh] flex items-center justify-between px-5">
      <div className="text-white text-sm">
        <h1 className="font-semibold">Chat App</h1>
      </div>
      <div className="flex flex-col text-sm gap-1 items-center">
        <div className="flex items-center gap-2 ">
          <figure>
            <img
              className="w-10 h-10 rounded-full"
              src={data?.photoURL}
              alt="profile"
            />
          </figure>
          <p>{data?.displayName}</p>
        </div>
        <button
          className="p-2 border border-black text-white w-fit rounded-xl"
          onClick={() => {
            signOut(auth);
            dispatch(deleteUser());
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
