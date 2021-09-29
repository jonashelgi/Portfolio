import React from "react";
import { Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { color } from "../../../../utils";

// const root = {
// 	display: "flex",
// 	justifyContent: "center",
// 	alignItems: "center",
// 	fontFamily: "Roboto, sans-serif",
// };

const icon = {
	fontSize: "40px",
	color: color.blue,
};



const Greeting = () => {
	return (
		<div>
			<Typography variant="h1" color={color.blue}>
				Jonas Helgi
			</Typography>
			<div style={{ flexDirection: "row" }}>
				<IconButton aria-label="Github" onClick={() => {window.open("https://github.com/jonashelgi");}}>
					<GitHubIcon sx={icon} />
				</IconButton>

				<IconButton aria-label="LinkedIn" onClick={() => {window.open("https://www.linkedin.com/in/jonashelgi/");}}>
					<LinkedInIcon sx={icon} />
				</IconButton>
			</div>
		</div>
	);
};

export default Greeting;
