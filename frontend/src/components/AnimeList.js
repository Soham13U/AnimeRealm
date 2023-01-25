import React from 'react'
import '../index.css'

export const AnimeList = ({animelist, setAnimeInfo}) => {
  return (
    <>
    {/* animelist contains each anime which is passed */}
    {/* each element is mapped to the structure designed below*/}

    {
      animelist ? (
        animelist.map((anime, index)=>{
          return (
            <>
              <div class="animeContainer">           
             
                <img
                  src={anime.images.jpg.large_image_url}
                  
                  alt="animeImage"
                />
                <p class="animeTitle">
                  {anime.title}
                </p>
                <br/>
                <p >
                  {anime.synopsis}
                </p>
                <br/>

                <div class='stats'>
            
                <p >
                    <b>Episodes:</b>
                  {anime.episodes}
                </p>
                <p >
                <b>Status:</b>
                  {anime.status}
                </p>
                <p >
                <b>Score:</b>
                  {anime.score}
                </p>
              
                <p >
                <b>Rank:</b>
                  {anime.rank}
                </p>
               
                </div>
              </div>
            </>
          );
        })
      ): 'Sorry, Not Found'
    }
        
    </>
  )
}