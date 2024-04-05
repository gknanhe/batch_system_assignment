import { useState } from "react";
import Modal from "./components/Dialog";
import Home from "./components/Home";
import useStore from "./store/useSetting";

function App() {
  return (
    <div className="h-full w-full">
      <Home />
    </div>
  );
}

export default App;
