import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    setIsLoggedIn(false);
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
        {isLoggedIn ? (
          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
