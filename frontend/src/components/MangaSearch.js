import React,{ useEffect, useState } from 'react'
import '../index.css'
import { MangaList } from './MangaList'

//manga details are fetched from jikan api
const MangaSearch = () => {
    const [search, setSearch] = useState()
  const [mangaData, setMangaData] = useState()
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/manga?q=${search}&page=1&limit=20`)
    const resData = await res.json();
    setMangaData(resData.data)
    
  }
  useEffect(() => {
    getData()
    },[search])
  return (
    <>
    {/* form for search */}
   <div class="formContainer">
            <h1>
              Search Manga
            </h1>
            <br/>
            <form>
            <input
                  type="search"
                  name="searchText"
                  id="searchTextDesktop"
                  required
                 
                  onChange={(e) => setSearch(e.target.value)}
                  
                  placeholder="Enter Manga Name"
                />
            </form>
        </div>
    
      <div className="animeInfo"></div>
      <div clasisName="anime-row">
       {/* pass data to MangaList */}
        <div>      
        
          <MangaList mangalist={mangaData} />
         
        </div>
      </div>
 
  </>
  )
}

export default MangaSearch