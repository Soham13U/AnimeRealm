import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AnimeDetail = () => {
  const navigate = useNavigate();
  const [an, setAnime] = useState();
  const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //get request for specific anime
  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/anime/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    fetchDetails().then((data) => {
      setAnime(data.an);
      setInputs({
        title: data.an.title,
        description: data.an.description,
        status:data.an.status,
        rating:data.an.rating,
      });
    });
  }, [id]);
  //put request to update anime review
  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:5000/api/anime/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
        status:inputs.status,
        rating:inputs.rating,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  console.log(an);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myAnime/"));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={0}
            borderRadius={10}
            boxShadow="10px 10px 10px 10px #ccc"
            padding={3}
            margin={"auto"}
            marginTop={3}
            display="flex"
            flexDirection={"column"}
            width={"50%"}
          >
            <Typography
              fontWeight={"bold"}
              padding={3}
              color="blue"
              variant="h2"
              textAlign={"center"}
            >
              {/* Form details for updating review*/}
              Update Your Anime Review
            </Typography>
            {/* Name */}
            <InputLabel sx={labelStyles}>Name</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              margin="auto"
              variant="outlined"
              placeholder="Anime Name"
            />
            {/* Review */}
            <InputLabel sx={labelStyles}>Review</InputLabel>
            <TextField
              name="description"
              onChange={handleChange}
              value={inputs.description}
              margin="auto"
              variant="outlined"
              placeholder="Your Review"
            />
            {/* Status */}
             <InputLabel sx={labelStyles}>Status</InputLabel>
            <TextField
              name="status"
              onChange={handleChange}
              value={inputs.status}
              margin="auto"
              variant="outlined"
              placeholder="completed,dropped,watching,on-hold"
            />
            {/* Rating */}
             <InputLabel sx={labelStyles}>Rating</InputLabel>
            <TextField
              name="rating"
              onChange={handleChange}
              value={inputs.rating}
              margin="auto"
              variant="outlined"
              placeholder="0 to 10"
            />

            <Button
              sx={{ mt: 2, borderRadius: 4 , width:"50%",mb :"auto",ml:"auto",mr: "auto" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default AnimeDetail;
