import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary me-2">Demo 1</button>
					</Link>
					<Link to="/demo2">
						<button className="btn btn-primary me-2">Demo 2</button>
					</Link>
					<Link to="/demo3">
						<button className="btn btn-primary">Demo 3</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
