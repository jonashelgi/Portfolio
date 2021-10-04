
import React from "react";
import { motion } from "framer-motion";

interface PropTypes {
	children: React.ReactNode;
}

const MotionRight = ({ children }: PropTypes) => {
	return (
		<motion.div
			initial={{ x: -50, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 60 }}
		>
			{children}
		</motion.div>
	);
};

export default MotionRight;
