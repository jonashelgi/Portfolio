/*

*/

import React from "react";
import { Container } from "@mui/material";

import { MotionRoot, Header } from "../../components";

interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
	return (
		<div>
			<MotionRoot>
				<Container>
					<Header />
					<div>{children}</div>
				</Container>
			</MotionRoot>
		</div>
	);
};

export default Wrapper;
