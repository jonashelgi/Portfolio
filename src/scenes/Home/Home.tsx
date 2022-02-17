import React from "react";

import { Wrapper, Waves } from "../../components";
import { Greeting, Projects, Courses, Work } from "./components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#efefef" }}>
      <Wrapper>
        <div>
          <div className={styles.root}>
            <Greeting />
          </div>
          <Waves Type="top" />
          <div id="Projects" className={styles.main}>
            <Projects />
          </div>
          <Waves Type="bottom" />
          <div id="Courses" className={styles.second}>
            <Courses />
          </div>
          <Waves Type="top" />
          <div id="Work" className={styles.main}>
            <Work />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
