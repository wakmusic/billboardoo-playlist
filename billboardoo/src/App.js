import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import PlusPlaylistModal from "./components/PlusPlaylistModal/PlusPlaylistModal";
import MyPage from "./components/MyPage/MyPage";
import PlusMusicPage from "./components/PlusMusicPage/PlusMusicPage";
import SharingListModal from "./components/SharingPlaylistModal/SharingListModal";
import LoginModal from "./components/LoginModal/LoginModal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/" element={<LoginModal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
