import Header from "./components/Header";
import Animes from "./components/Animes";
import UserAnime from "./components/UserAnime";
import AnimeDetail from "./components/AnimeDetail";
import AddAnime from "./components/AddAnime";
import CharSearch from "./components/CharSearch"
import MangaSearch from "./components/MangaSearch";



import React, { useEffect,useState } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import AnimeSearch from "./components/AnimeSearch";



function App() {


  
  const dispath = useDispatch();
//check if user is logged in
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  // routes for various anime pages
  return (
    
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/anime" element={<Animes />} />
              <Route path="/anime/add" element={<AddAnime />} />
              <Route path="/myAnime" element={<UserAnime />} />
              <Route path="/search" element={<AnimeSearch />} />
              <Route path="/charSearch" element={<CharSearch />} />
              <Route path="/mangaSearch" element={<MangaSearch />} />
            
              <Route path="/myAnime/:id" element={<AnimeDetail />} />{" "}
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
 

  );
}

export default App;
