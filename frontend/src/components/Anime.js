import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";
const Anime = ({ title, description,status,rating, imageURL, userName, isUser, id }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myAnime/${id}`);
  };
  //delete request
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/anime/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/anime"));
  };
  return (
    <div>
      {" "}
      <Card
        sx={{
          width: "50%",
          height: "fit-content",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 5px 5px #ccc",
          ":hover": {
            boxShadow: "10px 10px 10px 10px #ccc",
          },
        }}
      >
          {/* Show buttons only if user is the creator of review*/}
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="primary" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="secondary" />
            </IconButton>
          </Box>
        )}
        {/* Show username*/}
        <CardHeader
          avatar={
            <Avatar
              className={classes.font}
              sx={{ bgcolor: "darkblue" ,padding:"5px",width:"fit-content",height:"fit-content"}}
              
            >
              {userName ? userName.toUpperCase() : ""}
            </Avatar>
          }
          
        />
        <Typography variant="h3" sx={{color: "blue"}}>
          {title}
        </Typography>
        {/* Image */}
        <CardMedia
          component="img"
          image={imageURL}
          alt="image"
        />
      {/* Card Content*/}
        <CardContent>
          <hr />
          <br />
          <Typography
            className={classes.font}
            variant="h5"
            color="text.primary"
          >
            <b>{userName}</b> {": "} {description}
            <br /><br/>
            <b>Status:</b>
            {status}
            <br /><br/>
            <b>Rating:</b>
            {rating}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Anime;
