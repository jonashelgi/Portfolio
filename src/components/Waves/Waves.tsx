import { Box } from "@chakra-ui/react";
import React from "react";
import Wave from "react-wavify";

import { color } from "../../utils";
import styles from "./Waves.module.css";

export interface WavesProps {
  points?: number;
  type?: "top" | "bottom";
}

export const Waves = ({ points = 3, type = "top" }: WavesProps) => (
  <Box display={"flex"}>
    {type === "top" && (
      <Wave
        fill={color.main}
        paused={false}
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.1,
          points: points,
        }}
        className={styles.top}
      />
    )}
    {type === "bottom" && (
      <Wave
        fill={color.second}
        paused={false}
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.1,
          points: points,
        }}
        className={styles.bottom}
      />
    )}
  </Box>
);

export default Waves;
