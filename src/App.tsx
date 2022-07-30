import React from "react";
import { BrowserRouter } from "react-router-dom";
import TabView from "./views/TabView/TabView";

function App() {
  return (
    <BrowserRouter>
      <TabView />
    </BrowserRouter>
  );
}

export default App;
