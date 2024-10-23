import React from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
  // Adjust the selector to access the nested user object
  const user = useSelector((store) => store.user?.user); // Access the nested user object if needed
  
  console.log("User data:", user);

  if (!user) {
    return (
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevCommune</a>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevCommune</a>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <div className="form-control">Welcome, {user.firstName}</div> 
          <div className="dropdown dropdown-end mx-5 flex">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={user.photoUrl || "https://via.placeholder.com/150"} // Fallback if photoUrl is missing
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
