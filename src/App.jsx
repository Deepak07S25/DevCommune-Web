import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { Provider } from "react-redux"; // Correct Provider import
import appStore from "./utils/appStore"; // Redux store
import Feed from "./components/Feed";


function App() {
  return (
    <Provider store={appStore}> {/* Correctly passing the store */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} /> {/* Relative paths */}
            <Route path="login" element={<Login />} /> {/* Relative paths */}
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
