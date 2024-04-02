import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const { currentUser, user } = useSelector((store) => store.auth);

  console.log(message);
  console.log(new Date(408000000).toLocaleTimeString());
  let time = new Date(message.date.seconds).toLocaleTimeString();

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoview({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      className={`flex items-center gap-2 ${
        message?.senderId === currentUser.uid && "flex-row-reverse float-right"
      }  `}
    >
      <figcaption>
        <img
          className="rounded-[50%] w-9 h-9"
          src={
            message?.senderId === currentUser.uid
              ? currentUser?.photoURL
              : user?.photoURL
          }
          alt="person"
        />
      </figcaption>
      <div className=" flex flex-col justify-center">
        <p
          className={`bg-white p-2 rounded-message font-medium ${
            message?.senderId === currentUser.uid && "rounded-owner"
          } `}
        >
          {` ${message?.text ? message.text : null}`}
        </p>
        {message?.senderId === currentUser.uid && (
          <p className="text-sm text-end "> {time} </p>
        )}
      </div>
    </div>
  );
};

export default Message;
