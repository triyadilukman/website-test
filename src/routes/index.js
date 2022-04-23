import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

const RoutesComponent = () => (
	<Routes>
		<Route path="*" element={<NotFound />} />
		<Route exact path="/" element={<Home page="Home" />} />
		<Route path="/about" element={<About page="About" />} />
		<Route path="/contact" element={<Contact page="Contact" />} />
	</Routes>
);

export default RoutesComponent;
