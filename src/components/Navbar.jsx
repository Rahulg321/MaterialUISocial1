import { Toolbar, AppBar, styled, Typography } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HomeIcon from '@mui/icons-material/Home';
import React from "react";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          BWF Media
        </Typography>

        <DeveloperModeIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
