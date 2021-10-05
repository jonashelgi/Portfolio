import React from "react";

import { Wrapper } from "../../components";
import { Greeting, Projects, Courses } from "./components";

const Home = () => {
	return (
		<Wrapper>
			<div>
				<div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
					<Greeting />
				</div>
				<div
					id="Projects"
					style={{ paddingTop: "100px", paddingBottom: "100px" }}
				>
					<Projects />
				</div>
				<div
					id="Courses"
					style={{ paddingTop: "100px", paddingBottom: "100px" }}
				>
					<Courses />
				</div>
			</div>
		</Wrapper>
	);
};

export default Home;
