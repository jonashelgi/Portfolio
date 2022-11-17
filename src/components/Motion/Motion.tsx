import React from 'react'
import { motion } from 'framer-motion'

type MotionType = 'up' | 'down' | 'left' | 'right'
type MotionTypes = {
  [Type in MotionType]: {
    initial?: { x: number; opacity: number } | { y: number; opacity: number }
    animate?: { x: number; opacity: number } | { y: number; opacity: number }
  }
}

const motionList: MotionTypes = {
  up: {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  down: {
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  left: {
    initial: { x: 30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  right: {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
}

export interface MotionProps {
  type: MotionType
  children: React.ReactNode
}

export const Motion = ({ type, children }: MotionProps) => {
  return (
    <motion.div
      initial={motionList[type].initial}
      animate={motionList[type].animate}
      transition={{ type: 'spring', stiffness: 40 }}
    >
      {children}
    </motion.div>
  )
}

export default Motion
