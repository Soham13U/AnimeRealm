import React, { useEffect, useState } from "react";
import axios from "axios";
import Anime from "./Anime";



const Animes = () => {
  const [animes, setAnime] = useState();
  //get request for all anime reviews
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/anime")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setAnime(data.animes));
  }, []);
  console.log(animes);

  

  return (
    
    <div id="an">
      
    {/* All elements are showed with the template from Anime*/}
      {animes &&
        animes.map((an, index) => (
          <Anime
            id={an._id}
            isUser={localStorage.getItem("userId") === an.user._id}
            title={an.title}
            description={an.description}
            status={an.status}
            rating={an.rating}
            imageURL={an.image}
            userName={an.user.name}
          />
        ))}
    </div>
  );
};

export default Animes;
