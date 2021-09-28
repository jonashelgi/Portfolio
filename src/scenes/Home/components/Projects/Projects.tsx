import React from "react";

import { Card, Container, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";

const Projects = () => {
	return (
		<Container>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="green iguana"
					height="140"
					image="/static/images/cards/contemplative-reptile.jpg"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Container>
	);
};

export default Projects;
