import React from "react";
import { Container, Typography } from "@mui/material";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
} from "@mui/lab";

import { color } from "../../../../utils";
import "./Education.css";

const Education = () => {
	return (
		<Container maxWidth="md">
			<Timeline>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot sx={{ backgroundColor: color.black }} />
						<TimelineConnector sx={{ backgroundColor: color.black }} />
					</TimelineSeparator>
					<TimelineContent sx={{ color: color.black }}>
						<Typography variant="h6" component="span">
							Menntamálastofnun
						</Typography>
						<Typography>Vefhönnuður</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot sx={{ backgroundColor: color.black }} />
						<TimelineConnector sx={{ backgroundColor: color.black }} />
					</TimelineSeparator>
					<TimelineContent sx={{ color: color.black }}>Code</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot sx={{ backgroundColor: color.black }} />
					</TimelineSeparator>
					<TimelineContent sx={{ color: color.black }}>Sleep</TimelineContent>
				</TimelineItem>
			</Timeline>
		</Container>
	);
};

export default Education;
