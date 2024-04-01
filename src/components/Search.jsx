import React from "react";
import useSearch from "../hooks/useSearch";


const Search = () => {
    const {
        handleSelect,
        handleKey,
        username,
        user,
        error,
        setUsername
      } = useSearch()
 

  return (
    <div>
      <div>
        <input
          className="w-full p-2 font-medium text-lg"
          type="text"
          value={username}
          placeholder="Find a user... "
          onKeyDown={handleKey}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      {error && <span> User not found</span>}
      {user && (
        <div className="flex gap-2 items-center p-2" onClick={handleSelect}>
          <img
            className="w-[3rem] h-[3rem] rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <div>
            <span className="font-medium text-lg"> {user?.displayName} </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
