import React from "react";
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
import { MotionRight, MotionLeft } from "../../../../components";

const icon = {
	fontSize: "40px",
	color: color.black,
};

const Projects = () => {
	return (
		<div>
			<MotionLeft>
				<Typography variant="h3" color={color.white}>
					Verkefni
				</Typography>
			</MotionLeft>
			<MotionLeft>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={6} lg={4}>
						<Card
							sx={{
								borderRadius: "25px",
								boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
							}}
						>
							<CardMedia
								component="img"
								alt="green iguana"
								image="https://images.prismic.io/adalnamskra/366bb611-d6da-4ec4-95dc-e20f3503b4f0_merki-logo-min.png?auto=compress,format"
								sx={{
									borderRadius: "25px",
									padding: "10px",
									maxWidth: "300px",
								}}
							/>
							<CardContent>
								<Typography variant="h5">Aðalnámskrá grunnskóla</Typography>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://github.com/jonashelgi");
									}}
								>
									<LinkIcon sx={icon} />
								</IconButton>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://github.com/jonashelgi");
									}}
								>
									<InfoIcon sx={icon} />
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
							<CardMedia
								component="img"
								alt="green iguana"
								image="https://images.prismic.io/adalnamskra/366bb611-d6da-4ec4-95dc-e20f3503b4f0_merki-logo-min.png?auto=compress,format"
								sx={{
									borderRadius: "25px",
									padding: "10px",
									maxWidth: "300px",
								}}
							/>
							<CardContent>
								<Typography variant="h5">Aðalnámskrá grunnskóla</Typography>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://github.com/jonashelgi");
									}}
								>
									<LinkIcon sx={icon} />
								</IconButton>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://github.com/jonashelgi");
									}}
								>
									<InfoIcon sx={icon} />
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
							<CardMedia
								component="img"
								alt="green iguana"
								image="https://images.prismic.io/adalnamskra/366bb611-d6da-4ec4-95dc-e20f3503b4f0_merki-logo-min.png?auto=compress,format"
								sx={{
									borderRadius: "25px",
									padding: "10px",
									maxWidth: "300px",
								}}
							/>
							<CardContent>
								<Typography variant="h5">Aðalnámskrá grunnskóla</Typography>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://github.com/jonashelgi");
									}}
								>
									<LinkIcon sx={icon} />
								</IconButton>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://github.com/jonashelgi");
									}}
								>
									<InfoIcon sx={icon} />
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
							<CardMedia
								component="img"
								alt="green iguana"
								image="https://images.prismic.io/adalnamskra/366bb611-d6da-4ec4-95dc-e20f3503b4f0_merki-logo-min.png?auto=compress,format"
								sx={{
									borderRadius: "25px",
									padding: "10px",
									maxWidth: "300px",
								}}
							/>
							<CardContent>
								<Typography variant="h5">Aðalnámskrá grunnskóla</Typography>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://github.com/jonashelgi");
									}}
								>
									<LinkIcon sx={icon} />
								</IconButton>
								<IconButton
									aria-label="Github"
									onClick={() => {
										window.open("https://github.com/jonashelgi");
									}}
								>
									<InfoIcon sx={icon} />
								</IconButton>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</MotionLeft>
		</div>
	);
};

export default Projects;
