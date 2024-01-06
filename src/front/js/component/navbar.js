import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container-fluid">
				<div className="left">
					<Link to="/">
						<button className="homeButton btn btn-warning navbar-brand m-1 h1 text-dark">Screener</button>
					</Link>
					<button className="btn btn-dark">Films</button>
					<button className="btn btn-dark">TV Shows</button>
					<button className="btn btn-dark">Help me choose</button>
				</div>
				<div className="ml-auto">
					<Link to="/register">
						<button className="btn btn-dark">Register</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-dark">Login</button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-dark">demo</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};