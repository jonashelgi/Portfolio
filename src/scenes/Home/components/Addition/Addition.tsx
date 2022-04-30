import {
  Box,
  Container,
  useMediaQuery,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { BsJournalBookmarkFill, BsBook } from "react-icons/bs";
import { Progress } from "../../../../components";
import { color, font } from "../../../../utils";

const Addition = () => {
  const [isSmall] = useMediaQuery("(max-width: 767px)");
  return (
    <Container maxW="8xl">
      <SimpleGrid columns={isSmall ? 1 : 2} spacing={10}>
        <Box>
          <HStack pb={5}>
            <BsJournalBookmarkFill size={40} color={color.main} />
            <Text fontSize={font.md} color={color.main}>
              NÁMSKEIÐ
            </Text>
          </HStack>
          <Progress
            title="Docker and Kubernetes: The Complete Guide"
            info="Build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows."
            progress={30}
            link="https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/"
          />
          <Progress
            title="Complete C# Masterclass"
            info="Learn C# Programming - WPF, Databases, Linq, Collections, Game Development with Unity. More than just the C# basics!"
            progress={100}
            link="https://www.udemy.com/course/complete-csharp-masterclass/"
            cert={
              "https://www.udemy.com/certificate/UC-4fb1ecdc-bff4-47e9-bd2b-7b42ac3542ff/"
            }
          />
          <Progress
            title="The Complete 2021 Web Development Bootcamp"
            info="Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, build real projects."
            progress={100}
            link="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            cert="https://www.udemy.com/certificate/UC-10471ff1-f7dd-4142-af02-a1e33a151341/"
          />
          <Progress
            title="Tableau 2020 A-Z: Hands-On Tableau Training for Data Science"
            info="Learn Tableau 2020 for data science step by step. Real-life data analytics exercises & quizzes included. Learn by doing!"
            progress={100}
            link="https://www.udemy.com/course/tableau10/"
            cert="https://www.udemy.com/certificate/UC-3c163630-9a06-4ea5-8221-14e07bf856bc/"
          />
        </Box>
        <Box>
          <HStack pb={5}>
            <BsBook size={40} color={color.main} />
            <Text fontSize={font.md} color={color.main}>
              BÆKUR
            </Text>
          </HStack>
          <Progress
            title="Refactoring UI"
            info="Learn how to design beautiful user interfaces by yourself using specific tactics explained from a developer's point-of-view."
            link="https://www.refactoringui.com/"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Addition;
