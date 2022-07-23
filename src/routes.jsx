import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<Navigate to="/" replace={true} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
