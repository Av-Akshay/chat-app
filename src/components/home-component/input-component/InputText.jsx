import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/index";

const InputText = () => {
  const [text, setText] = useState("");
  const { currentUser, user, chatId } = useSelector((store) => store?.auth);

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({
        id: uuidv4(),
        senderId: currentUser?.uid,
        date: Timestamp.now(),
        text: text,
      }),
    });
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", user.uid), {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };

  return (
    <div className="bg-white flex items-center h-[10vh]">
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="Write Text..."
        className=" w-full border-none outline-none px-5 font-medium "
      />
      <button
        onClick={() => {
          handleSend();
        }}
        className="text-blue-500 font-bold text-lg px-8 py-5"
      >
        Send
      </button>
    </div>
  );
};

export default InputText;
