/*
Simple header component
Uses: MUI ButtonGroup
https://mui.com/components/button-group/
*/

import React from "react";
import { ButtonGroup, Button, Link } from "@mui/material";

import { color } from "../../utils";
import "./Header.css";

// STYLES
const root = {
	display: "flex",
	justifyContent: "center",
	paddingTop: "20px",
};
const btn = {
	borderColor: color.white,
	fontSize: "20px",
};
const link = {
	color: color.white,
};

const Header = () => {
	return (
		<header>
			<div style={root}>
				<ButtonGroup
					size="large"
					variant="outlined"
					aria-label="outlined button group"
				>
					<Button sx={btn}>
						<Link href="#Projects" underline="none" sx={link}>
							Projects
						</Link>
					</Button>
					<Button sx={btn}>
						<Link href="#Courses" underline="none" sx={link}>
							Courses
						</Link>
					</Button>
				</ButtonGroup>
			</div>
		</header>
	);
};

export default Header;
