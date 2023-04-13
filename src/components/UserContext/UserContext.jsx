import React from 'react'

function UserContext() {
  return (
    <div>
      <Menu
  id="menu-appbar"
  anchorEl={anchorEl}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={open}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
    </div>
  )
}

export default UserContext
