import React from "react";

const Message = ({item}) => {
  return (
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
  );
};

export default Message;
