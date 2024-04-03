import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/index";
import { signOut } from "firebase/auth";
import { deleteUser } from "../../redux-toolkit/slice";
import { useDispatch } from "react-redux";

const Navbar = ({}) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.auth.currentUser);

  return (
    <div className="bg-violet-800 h-[16vh] flex items-center justify-between px-5">
      <div className="flex items-center justify-between ">
        <div className="flex items-center flex-col gap-2 ">
          <figure>
            <img
              className="w-10 h-10 rounded-full"
              src={data?.photoURL}
              alt="profile"
            />
          </figure>
          <p>{data?.displayName}</p>
        </div>
      </div>
      <button
        className="px-2 py-1 border border-black text-white w-fit rounded-xl font-medium"
        onClick={() => {
          signOut(auth);
          dispatch(deleteUser());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
