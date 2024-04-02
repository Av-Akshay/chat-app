import React from "react";
import useChat from "../hooks/useChat";

const Chat = () => {
  const { chats, handleSelect } = useChat();

  return (
    <>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          return (
            <div
              className="flex items-center gap-2"
              key={chat[0]}
              onClick={() => {
                handleSelect(chat[1].userInfo);
              }}
            >
              <figcaption>
                <img
                  className="rounded-[50%] w-9 h-9"
                  src={chat[1]?.userInfo?.photoURL}
                  alt="person"
                />
              </figcaption>
              <div>
                <span> {chat[1]?.userInfo?.displayName} </span>
                <p> {chat[1]?.lastMessage?.text} </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Chat;
