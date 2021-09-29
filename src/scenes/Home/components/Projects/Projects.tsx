import React from "react";

import {
	Card,
	Container,
	CardContent,
	Typography,
	CardActions,
	Button,
	CardMedia,
	Grid,
} from "@mui/material";

import { color } from '../../../../utils'

const card = {
	backgroundColor: color.blue,
	boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
}


const cardText = {
	color: color.white,
}

const Projects = () => {
	return (
		<Container>
			<Typography variant="h3" color={color.blue}>Verkefni / Projects</Typography>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid item xs={4} sm={4} md={4}>
					<Card sx={{ maxWidth: 345 }} style={card}>
						<CardMedia
							component="img"
							alt="green iguana"
							// height="140"
							image="https://images.prismic.io/adalnamskra/7e1c5a0e-f64e-47c9-b8e6-9b5a6f2e073d_lykilhaefni-mynd2.png?auto=compress,format"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div" style={cardText}>
								Aðalnámskrá grunnskóla
							</Typography>
							<Typography variant="body2" style={cardText}>
								Verkefni hjá Menntamálastofnun að setja aðalnámskrá grunnskóla
								upp á rafrænt form.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small" style={cardText}>Vefsíðan</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Projects;
