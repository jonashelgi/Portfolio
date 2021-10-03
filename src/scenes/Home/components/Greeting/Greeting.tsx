import React from "react";
import { Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { color } from "../../../../utils";

const icon = {
	fontSize: "40px",
	color: color.white,
};



const Greeting = () => {
	return (
		<div>
			{/* <Background /> */}
			<Typography variant="h1" color={color.white}>
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
