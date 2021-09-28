import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import App from "./App";
import { Home } from "./scenes";

export default function Routes() {
	const location = useLocation();
	return (
		<App>
			<AnimatePresence>
				<Switch location={location} key={location.pathname}>
					<Route>
						<Home />
					</Route>
					{/* <Route>
						<PageNotFound />
					</Route> */}
				</Switch>
			</AnimatePresence>
		</App>
	);
}
