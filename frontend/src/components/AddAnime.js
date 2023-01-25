import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddAnime = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    status:"",
    rating:"",
    imageURL: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //post request to add anime
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/anime/add", {
        title: inputs.title,
        description: inputs.description,
        status:inputs.status,
        rating:inputs.rating,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/anime"));
  };
  //using material UI for UI
  return (
   
    <div>
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
            className={classes.font}
            fontWeight={"bold"}
            padding={3}
            color="blue"
            variant="h2"
            textAlign={"center"}
          > 
          {/* Anime review form card*/}
            Post Your Anime Review
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles} >
              {/* Name*/}
            Name
          </InputLabel>
          <TextField
            className={classes.font}
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="auto"
            variant="outlined"
            placeholder="Anime Name"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
              {/* Review*/}
            Review
          </InputLabel>
          <TextField
            className={classes.font}
            name="description"
            onChange={handleChange}
            value={inputs.description}
            margin="auto"
            variant="outlined"
            placeholder="Your Review"
          />
          
          <InputLabel className={classes.font} sx={labelStyles}>
              {/* Status*/}
            Status 
          </InputLabel>
          <TextField
            className={classes.font}
            name="status"
            onChange={handleChange}
            value={inputs.status}
            margin="auto"
            variant="outlined"
            placeholder="completed,dropped,watching,on-hold"
          />
           <InputLabel className={classes.font} sx={labelStyles}>
              {/* Rating*/}
            Rating 
          </InputLabel>
          <TextField
            className={classes.font}
            name="rating"
            onChange={handleChange}
            value={inputs.rating}
            margin="auto"
            variant="outlined"
            placeholder="0 to 10"
          />


          <InputLabel className={classes.font} sx={labelStyles}>
              {/* Image */}
            Image
          </InputLabel>
          <TextField
            className={classes.font}
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            margin="auto"
            variant="outlined"
            placeholder="Image Link"
          />
          <Button
            sx={{ mt: 2, borderRadius: 4 , width:"50%",mb :"auto",ml:"auto",mr: "auto"}}
            variant="contained"
            color="primary"
            type="submit"
          >
              {/* Submit*/}
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddAnime;
