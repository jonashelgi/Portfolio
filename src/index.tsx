import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import Routes from "./Routes";
// import { Background } from "./components";
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Background /> */}
			<Routes />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
