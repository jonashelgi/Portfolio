import React from "react";
import { Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { color } from "../../../../utils";
import { MotionUp } from "../../../../components";

const icon = {
	fontSize: "40px",
	color: color.white,
};

const center = {
	display: "flex",
	justifyContent: "center",
	paddingTop: "20px",
};

const Greeting = () => {
	return (
		<MotionUp>
			<div style={center}>
				<Typography variant="h1" color={color.white} className="textShadow">
					Jonas Helgi
				</Typography>
			</div>
			<div
				style={{
					flexDirection: "row",
					display: "flex",
					justifyContent: "center",
					paddingTop: "20px",
				}}
			>
				<IconButton
					aria-label="Github"
					onClick={() => {
						window.open("https://github.com/jonashelgi");
					}}
				>
					<GitHubIcon sx={icon}/>
				</IconButton>

				<IconButton
					aria-label="LinkedIn"
					onClick={() => {
						window.open("https://www.linkedin.com/in/jonashelgi/");
					}}
				>
					<LinkedInIcon sx={icon} />
				</IconButton>
			</div>
		</MotionUp>
	);
};

export default Greeting;
