import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function UserContext() {
  // State to manage the anchor element and open state of the menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to open the menu
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Trigger element for opening the menu */}
      <button onClick={handleOpen}>Open Menu</button>

      {/* The Menu component */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)} // Use Boolean to determine if it should be open
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default UserContext;
