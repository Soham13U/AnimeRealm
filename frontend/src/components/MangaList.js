import React from 'react'
import '../index.css'

export const MangaList = ({mangalist, setMangaInfo}) => {
  return (
    <>
    {/* mangalist contains each manga which is passed */}
    {/* each element is mapped to the structure designed below*/}

    {
      mangalist ? (
        mangalist.map((manga, index)=>{
          return (
            <>
              <div class="animeContainer">           
             
                <img
                  src={manga.images.jpg.large_image_url}
                  
                  alt="animeImage"
                />
                <p class="animeTitle">
                  {manga.title}
                </p>
                <br/>
                <p >
                  {manga.synopsis}
                </p>
                <br/>

                <div class='stats'>
            
                <p >
                    <b>Chapters,Volumes:</b>
                  {manga.chapters},{manga.volumes}
                </p>
                <p >
                <b>Status:</b>
                  {manga.status}
                </p>
                <p >
                <b>Score:</b>
                  {manga.score}
                </p>
              
                <p >
                <b>Rank:</b>
                  {manga.rank}
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