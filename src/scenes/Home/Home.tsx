import React from "react";

import { Wrapper } from "../../components";
import { Greeting, Projects, Education } from "./components";

const Home = () => {
	return (
		<Wrapper>
			<div>
				<div>
					<Greeting/>
				</div>
				<div>
					<Projects />
				</div>
				<div>
					<Education />
				</div>
			</div>
		</Wrapper>
	);
};

export default Home;
