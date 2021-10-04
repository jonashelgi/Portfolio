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

const MotionRoot = ({ children }: PropTypes) => {
	return (
		<motion.div
			key="modal"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default MotionRoot;
