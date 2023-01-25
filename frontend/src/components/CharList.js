import React from 'react'
import '../index.css'

export const CharList = ({charlist, setCharInfo}) => {
  return (
    <>
     {/* charlist contains each character which is passed */}
    {/* each element is mapped to the structure designed below*/}
    {
      charlist ? (
        charlist.map((char, index)=>{
          return (
            <>
              <div class="animeContainer">           
             
                <img
                  src={char.images.jpg.image_url}
                  
                  alt="animeImage"
                />
                <p class="animeTitle">
                  {char.name}
                </p>
                <br/>
                <p >
                  {char.about}
                </p>
                <br/>

                <div class='stats'>
                <p >
                    <b>URL: </b>
                    <a href= {char.url}>Click Here</a>
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