import { Box } from "@chakra-ui/react";
import React from "react";

import { Header } from "../";
import styles from "./Wrapper.module.css";

export interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box className={styles.header}>
      <Header />
      <>{children}</>
    </Box>
  );
};

export default Wrapper;
