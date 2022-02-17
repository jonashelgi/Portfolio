import React from "react";

import { Header } from "../";
import styles from "./Wrapper.module.css";

export interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={styles.header}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
