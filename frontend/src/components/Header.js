import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
const Header = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  
  const [value, setValue] = useState();
  //design header
  return (
     <AppBar
    
      position="sticky"
      sx={{
        background:
          "blue",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">
          AnimeRealm
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              {/* Tab for All Anime*/}
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/anime"
                label="All Anime"
              />
              {/* Tab for My Anime*/}
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myAnime"
                label="My Anime"
              />
              {/* Tab for Add Anime*/}
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/anime/add"
                label="Add Anime"
              />
              {/* Tab for Search Anime*/}
               <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/search"
                label="Search Anime"
              />
              {/* Tab for Search Manga*/}
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/mangaSearch"
                label="Search Manga"
              />
              {/* Tab for Search Character*/}
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/charSearch"
                label="Search Character"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
            {/* Buttons*/}
              {" "}
          
            </>
          )}
          {/* Show only if logged in*/}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="secondary"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
