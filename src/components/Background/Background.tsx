import React from "react";
import Particles from "react-particles-js";

const Background = () => {
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundSize: "cover",
				backgroundColor: "#F8F8F8",
				zIndex: 0,
			}}
		>
			<Particles
				params={{
					particles: {
						color: {
							value: "#000000",
						},
						number: {
							value: 160,
							density: {
								enable: false,
							},
						},
						size: {
							value: 4,
							random: true,
							anim: {
								speed: 4,
								size_min: 0.3,
							},
						},
						line_linked: {
							enable: false,
						},
						move: {
							random: true,
							speed: 1,
							direction: "top",
							out_mode: "out",
						},
					},
					// interactivity: {
					// 	events: {
					// 		onhover: {
					// 			enable: true,
					// 			mode: "bubble",
					// 		},
					// 		onclick: {
					// 			enable: true,
					// 			mode: "repulse",
					// 		},
					// 	},
					// 	modes: {
					// 		bubble: {
					// 			distance: 250,
					// 			duration: 2,
					// 			size: 0,
					// 			opacity: 0,
					// 		},
					// 		repulse: {
					// 			distance: 400,
					// 			duration: 2,
					// 		},
					// 	},
					// },
				}}
			/>
		</div>
	);
};

export default Background;
