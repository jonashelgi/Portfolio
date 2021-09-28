/*

*/

import React from "react";

import { Motion, Header } from "../../components";

interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
	return (
		<Motion>
			<Header />
			<div>{children}</div>
		</Motion>
	);
};

export default Wrapper;
