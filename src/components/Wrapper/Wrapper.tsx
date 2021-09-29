/*

*/

import React from "react";
import { Container } from "@mui/material";

import { Motion } from "../../components";
import { color } from "../../utils";

interface WrapperProps {
	children: React.ReactNode;
}
const root = {
	backgroundColor: color.blue,
	padding: "50px 10px 50px 10px",
	boxShadow: "120px 80px 40px 20px #0ff"
};
const cont = {
	backgroundColor: color.white,
	borderRadius: "20px",
	// boxShadow: "1px 3px 1px #9E9E9E"
	boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	
}

const Wrapper = ({ children }: WrapperProps) => {
	return (
		<div style={root}>
			<Motion>
				<Container style={cont}>
					<div>{children}</div>
				</Container>
			</Motion>
		</div>
	);
};

export default Wrapper;
