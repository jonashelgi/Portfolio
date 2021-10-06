import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	CardMedia,
	Grid,
	IconButton,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import InfoIcon from "@mui/icons-material/Info";

import { color } from "../../../../utils";
import { MotionUp } from "../../../../components";
import adalnamskralogo from "../../../../utils/Images/adalnamskra.jpg";

const icon = {
	fontSize: "40px",
	color: color.black,
};
const card = {
	borderRadius: "25px",
	boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};

const Projects = () => {
	const [isClick, setClick] = useState(false);
	return (
		<div>
			<MotionUp>
				<Typography
					variant="h3"
					color={color.black}
					style={{ paddingBottom: "25px" }}
					className="textShadow"
				>
					Verkefni
				</Typography>
			</MotionUp>
			<MotionUp>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={6} lg={4}>
						<Card sx={card}>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									paddingTop: "15px",
								}}
							>
								<CardMedia
									component="img"
									alt="green iguana"
									image={adalnamskralogo}
									sx={{
										borderRadius: "25px",
										maxWidth: "300px",
										cursor: "pointer"
									}}
									onClick={() => {
										window.open("https://adalnamskra.is/");
									}}
								/>
							</div>
							<CardContent>
								<Typography variant="h5">Aðalnámskrá grunnskóla</Typography>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://adalnamskra.is/");
									}}
								>
									<LinkIcon sx={icon} />
								</IconButton>
								<IconButton
									aria-label="Github"
									onClick={() => {
										setClick(!isClick);
									}}
								>
									<InfoIcon sx={icon} />
								</IconButton>
							</CardContent>
						</Card>
						<div style={{ paddingTop: "15px" }}>
							{isClick && (
								<MotionUp>
									<Card sx={card}>
										<CardContent>
											<Typography>Góðan dag</Typography>
										</CardContent>
									</Card>
								</MotionUp>
							)}
						</div>
					</Grid>
				</Grid>
			</MotionUp>
		</div>
	);
};

export default Projects;
