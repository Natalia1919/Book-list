import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Switch, Container } from "@mui/material";

import BookContext from "../context/BookContext";
import { ModeNightRounded, WbSunnyRounded } from "@mui/icons-material";

const Header = () => {
  const { mode, handleTheme } = useContext(BookContext);

  return (
    <AppBar className="header" position="static" color="primary">
      <Container>
        <Toolbar className="header__inner">
          <Typography
            className="header__logo"
            variant="h4"
            component="span"
            sx={{ flexGrow: 1 }}
          >
            Boooks
          </Typography>
          <WbSunnyRounded />
          <Switch onChange={handleTheme} checked={mode === "dark"} />
          <ModeNightRounded />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
