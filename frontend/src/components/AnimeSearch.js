import React,{ useEffect, useState } from 'react'
import '../index.css'
import { AnimeList } from './AnimeList'

// anime data is fetched from jikan api
const AnimeSearch = () => {
    const [search, setSearch] = useState()
  const [animeData, setAnimeData] = useState()
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&page=1&limit=20`)
    const resData = await res.json();
    setAnimeData(resData.data)
    
  }
  useEffect(() => {
    getData()
    },[search])
  return (
    <>
    {/* Form for searching */}
   <div class="formContainer">
            <h1>
              Search Anime
            </h1>
            <br/>
            <form>
            <input
                  type="search"
                  name="searchText"
                  id="searchTextDesktop"
                  required
                 
                  onChange={(e) => setSearch(e.target.value)} //on change results will be updated
                  
                  
                  placeholder="Enter Anime Name"
                />
            </form>
        </div>
    
      <div className="animeInfo"></div>
      <div clasisName="anime-row">
       {/* Pass data to AnimeList*/}
        <div>      
        
          <AnimeList animelist={animeData} />
         
        </div>
      </div>
 
  </>
  )
}

export default AnimeSearch