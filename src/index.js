import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/GlobalStyles.css";
import Routers from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Routers />
	</React.StrictMode>
);
