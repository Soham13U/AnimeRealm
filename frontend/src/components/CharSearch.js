import React,{ useEffect, useState } from 'react'
import '../index.css'
import { CharList } from './CharList'

//character details are fetched from jikan api
const CharSearch = () => {
    const [search, setSearch] = useState()
  const [charData, setCharData] = useState()
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/characters?q=${search}&page=1&limit=20`)
    const resData = await res.json();
    setCharData(resData.data)
    
  }
  useEffect(() => {
    getData()
    },[search])
  return (
    <>
     {/* form for search */}
   
   <div class="formContainer">
            <h1>
              Search Character
            </h1>
            <br/>

            <form>
            <input
                  type="search"
                  name="searchText"
                  id="searchTextDesktop"
                  required
                 
                  onChange={(e) => setSearch(e.target.value)}
                  
                  placeholder="Enter Character Name"
                />
            </form>
        </div>
    
      <div className="animeInfo"></div>
      <div clasisName="anime-row">
       {/* Pass data to CharList*/}
        <div>      
        
          <CharList charlist={charData} />
         
        </div>
      </div>
 
  </>
  )
}

export default CharSearch