/*
Motion: Sér um að gera animation þegar farið er á milli síða.
Notar framer-motion.

Handles animation while going between pages or loading the website.
Uses framer-motion
*/

import React from "react";
import { motion } from "framer-motion";

interface PropTypes {
	children: React.ReactNode;
}

const MotionUp = ({ children }: PropTypes) => {
	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 60 }}
		>
			{children}
		</motion.div>
	);
};

export default MotionUp;
