import React, { useContext } from 'react';
import UserContext from '../UserContext/UserContext';
import { Menu } from 'ant-design-vue';
const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="user-profile">
      <img src={user.avatar} alt="User Avatar" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {user.isLoggedIn ? (
        <button onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      ) : (
        <button>
          <i className="fas fa-sign-in-alt"></i> Login
        </button>
      )}
    </div>
  );
};

export default UserProfile;