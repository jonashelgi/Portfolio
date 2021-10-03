/*

*/

import React from "react";
import { Container } from "@mui/material";

import { Motion } from "../../components";

interface WrapperProps {
	children: React.ReactNode;
}

// const root = {
// 	backgroundColor: "#ededed",
// }

const Wrapper = ({ children }: WrapperProps) => {
	return (
		<div>
			<Motion>
				<Container>
					<div>{children}</div>
				</Container>
			</Motion>
		</div>
	);
};

export default Wrapper;
