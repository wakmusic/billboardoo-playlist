import React from "react";
import { Routes } from "react-router-dom";
import PlusPlayListModal from "./components/PlusPlayListModal/PlusPlayListModal";
import PlayListPage from "./components/PlayListPage/PlayListPage";
import PlusMusicPage from "./components/PlusMusicPage/PlusMusicPage";
import LoginModal from "./components/LoginModal/LoginModal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PlusMusicPage />
    </div>
  );
}

export default App;
