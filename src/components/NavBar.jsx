import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check authentication state on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user); // Set to true if a user exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setIsLoggedIn(false); // Update state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Movie Database</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/favorites" style={styles.link}>
              Favorites
            </Link>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/account" style={styles.link}>
              Create Account
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  logoutButton: {
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "1rem",
  },
};

export default Navbar;
