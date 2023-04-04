import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Profile from "./Profile";
import Orders from "./Orders";
import Blogs from "./Blogs";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
const Header = () => {
  const style = {
    display: "flex",
    gap: 10,
  };
  return (
    <nav style={style}>
      <Link to="/">Home</Link>
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/login">login</Link>
      <Link to="/profile">profile</Link>
      <Link to="/orders">orders</Link>
      <Link to="/blogs">blogs</Link>
    </nav>
  );
};
const App = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile/>
          </ProtectedRoute>
        } /> */}

        {/*-------------- 1 st approach to protect proute and access using <outlet/> ----------*/}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Route>

        {/* <Route path="/orders" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Orders />
          </ProtectedRoute>
        } /> */}


        
        {/* ------------------ 2 nd approach to access route using childern props --------------  */}
        <Route
          path="/blogs"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Blogs />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
