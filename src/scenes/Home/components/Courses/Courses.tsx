import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	IconButton,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import VerifiedIcon from '@mui/icons-material/Verified';

import { color } from "../../../../utils";
import { MotionUp } from "../../../../components";

const icon = {
	fontSize: "40px",
	color: color.black,
};

const Courses = () => {
	return (
		<div>
			<MotionUp>
				<Typography variant="h3" color={color.white} style={{paddingBottom: "25px"}} className="textShadow">
					Námskeið
				</Typography>
			</MotionUp>
			<MotionUp>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={6} lg={4}>
						<Card
							sx={{
								borderRadius: "25px",
								boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
							}}
						>
							<CardContent>
								<Typography variant="h5">Tableau 2020 A-Z: Hands-On Tableau Training for Data Science</Typography>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://www.udemy.com/course/tableau10/");
									}}
								>
									<LinkIcon sx={icon} />
								</IconButton>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://www.udemy.com/certificate/UC-3c163630-9a06-4ea5-8221-14e07bf856bc/");
									}}
								>
									<VerifiedIcon sx={icon} />
								</IconButton>
							</CardContent>
						</Card>
					</Grid>


					<Grid item xs={12} sm={6} md={6} lg={4}>
						<Card
							sx={{
								borderRadius: "25px",
								boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
							}}
						>
							<CardContent>
								<Typography variant="h5">The Complete 2021 Web Development Bootcamp</Typography>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://www.udemy.com/course/the-complete-web-development-bootcamp/");
									}}
								>
									<LinkIcon sx={icon} />
								</IconButton>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://www.udemy.com/certificate/UC-10471ff1-f7dd-4142-af02-a1e33a151341/");
									}}
								>
									<VerifiedIcon sx={icon} />
								</IconButton>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</MotionUp>
		</div>
	);
};

export default Courses;
