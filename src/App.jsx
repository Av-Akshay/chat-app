import { useState } from "react";
import Signup from "./components/Signup";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
