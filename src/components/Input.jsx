import React from "react";

const Input = React.forwardRef(function Input(
  { className, id, type, label, ...props },
  ref
) {
  return (
    <div className=" w-full flex flex-col gap-1">
      {label ? (
        <label className="font-medium text-xl " htmlFor={id}>
          {label}:-
        </label>
      ) : null}
      <input
        id={id}
        className={`${className} w-full px-5 py-2 text-xl font-medium text-slate-950 outline-none border-none bg-white rounded-xl`}
        {...props}
        type={type}
        ref={ref}
      />
    </div>
  );
});

export default Input;
