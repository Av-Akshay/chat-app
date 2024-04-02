import React from "react";
import Message from "./Messages-component/Message";
import useMessages from "../../hooks/useMessages";

const Messages = () => {
  const { messages } = useMessages();
  console.log(messages);
  return (
    <div
      className={`bg-violet-300 h-[60vh] flex flex-col gap-3 p-3 snap-y text-clip overflow-y-scroll`}
    >
      {messages.map((item) => {
        return <Message key={item.id} message={item} />;
      })}
    </div>
  );
};

export default Messages;
