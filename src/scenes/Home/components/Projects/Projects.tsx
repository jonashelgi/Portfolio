import React from "react";
import { Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { BsKanban } from "react-icons/bs";

import { Card } from "../../../../components";
import { color, font } from "../../../../utils";

const Projects = () => {
  return (
    <Container maxW="8xl" pb={"28"}>
      <Stack direction={"row"} pt={5} pb={5}>
        <BsKanban size={40} color={color.second} />
        <Text fontSize={font.md} color={color.second}>
          VERKEFNI
        </Text>
      </Stack>
      <SimpleGrid minChildWidth={"300px"} gap={5}>
        <Card
          title="Aðalnámskrá grunnskóla"
          subTitle="Menntamálastofnun"
          info="Hanna og forrita aðalnámskrá grunnskóla yfir á rafrænt form ásamt áframhaldandi þróun og viðhald."
          linkUrl="https://adalnamskra.is/"
          tags={[
            { content: "React" },
            { content: "Typescript" },
            { content: "Prismic" },
            { content: "Jest" },
            { content: "Ísland.is UI library" },
          ]}
        />
        <Card
          title="Portfolio"
          subTitle="Jónas Helgi"
          info="Síða sem inniheldur yfirlit af öllum mínum verkefnum, þetta er síðan sem þú ert á núna. "
          githubUrl="https://github.com/jonashelgi/portfolio"
          tags={[
            { content: "React" },
            { content: "Typescript " },
            { content: "ChakraUI" },
            { content: "Firebase" },
          ]}
        />
        <Card
          title="Epic Store Clone"
          subTitle="Jónas Helgi"
          info="Endurherma af fræga windows tölvuleikja appinu hjá Epic Store."
          linkUrl="https://gamestore-clone.web.app/"
          githubUrl="https://github.com/jonashelgi/epicstore-clone"
          tags={[
            { content: "React" },
            { content: "Typescript " },
            { content: "React-Bootstrap" },
            { content: "Firebase" },
          ]}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
