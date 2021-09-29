import React from "react";

import { Wrapper } from "../../components";
import { Greeting, Projects, Education } from "./components";

const Home = () => {
	return (
		<Wrapper>
			<div>
				<div style={{paddingTop: "100px", paddingBottom: "100px"}}>
					<Greeting/>
				</div>
				<div style={{paddingTop: "100px", paddingBottom: "100px"}}>
					<Projects />
				</div>
				<div style={{paddingTop: "100px", paddingBottom: "100px"}}>
					<Education />
				</div>
			</div>
		</Wrapper>
	);
};

export default Home;
