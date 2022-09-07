import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import PlusPlayListModal from "./components/PlusPlayListModal/PlusPlayListModal";
import PlayListPage from "./components/PlayListPage/PlayListPage";
import PlusMusicPage from "./components/PlusMusicPage/PlusMusicPage";
import SharingListModal from "./components/SharingPlayListModal/SharingListModal";
import LoginModal from "./components/LoginModal/LoginModal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/myPage" element={<PlayListPage />}></Route>
          <Route path="/" element={<LoginModal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
