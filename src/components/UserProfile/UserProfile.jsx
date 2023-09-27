import React, { useContext } from 'react';
import UserContext from '../UserContext/UserContext';
import { useUserContext } from '../UserContext/UserContextProvider';


const UserProfile = () => {
  const { user, updateUser } = useUserContext();


  const handleLogout = () => {
    updateUser(null);
  };

  return (
    <div className="user-profile">
      {user ? (
        <React.Fragment>
          <img src={user.avatar} alt="User Avatar" />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          {user.isLoggedIn ? (
            <button onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          ) : (
            <button onClick={handleLogout}>
              <i className="fa fa-sign-out-alt"></i> Logout
            </button>
          )}
        </React.Fragment>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default UserProfile;
