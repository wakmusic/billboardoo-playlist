import React, { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MyPage from "./components/MyPage/MyPage";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
import LoginModal from "./components/LoginModal/LoginModal";
import "./App.css";

function App() {
  const [playlistInfo, setPlaylistInfo] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/playlist"
            element={<PlaylistPage playlistInfo={playlistInfo} />}
          ></Route>
          <Route
            path="/mypage"
            element={
              <MyPage
                setPlaylistInfo={setPlaylistInfo}
                playlistInfo={playlistInfo}
              />
            }
          ></Route>
          <Route path="/" element={<LoginModal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
