import React from "react";
import { Box } from "@chakra-ui/react";

import { Waves, Header } from "../../components";
import { color } from "../../utils";
import { Greeting, Projects, Addition } from "./components";

const Home = () => {
  return (
    <Box bg={color.second}>
      <Header />
      <Box bg={color.second}>
        <Greeting />
      </Box>
      <Waves type="top" />
      <Box bg={color.main} id="Projects">
        <Projects />
      </Box>
      <Waves type="bottom" />
      <Box bg={color.second} id="Addition">
        <Addition />
      </Box>
      <Waves type="top" />
    </Box>
  );
};

export default Home;
