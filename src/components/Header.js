import React from "react";
import { Link } from "react-router-dom";
import "../index.css";




const Header = () => {
return (
    <header className="header">
        <h2>Book Search</h2>
        <Link to="/"> Home</Link>
        <Link to="/wishlist"> Wishlist</Link>
        {/* <Link to="/bookcards"> bookCards</Link> */}

        

    </header>
);
};

export default Header;

