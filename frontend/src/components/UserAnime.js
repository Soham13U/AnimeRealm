import React, { useEffect, useState } from "react";
import axios from "axios";
import Anime from "./Anime";
const UserAnime = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  //get request for anime by user
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/anime/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div>
      {/* display anime as per user */}
      {" "}
      {user &&
        user.animes &&
        user.animes.map((an, index) => (
          <Anime
            id={an._id}
            key={index}
            isUser={true}
            title={an.title}
            description={an.description}
            status={an.status}
            rating={an.rating}
            imageURL={an.image}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default UserAnime;
