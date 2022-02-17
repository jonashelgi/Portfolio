import React from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { BsKanban } from "react-icons/bs";

import { ProjectCard } from "../../../../components";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <Container className={styles.root} maxW="8xl">
      <h3 className={styles.title}>
        <BsKanban size={40} className={styles.icon} /> VERKEFNI
      </h3>
      <SimpleGrid>
        <ProjectCard
          Title="Aðalnámskrá grunnskóla"
          SubTitle="Menntamálastofnun"
          Text="Hanna og forrita aðalnámskrá grunnskóla yfir á rafrænt form ásamt áframhaldandi þróun og viðhald."
          LinkUrl="https://adalnamskra.is/"
          Tags={[
            { content: "React" },
            { content: "Typescript" },
            { content: "Prismic" },
            { content: "Jest" },
            { content: "Ísland.is UI library" },
          ]}
        />
        <ProjectCard
          Title="Portfolio"
          SubTitle="Jónas Helgi"
          Text="Síða sem inniheldur yfirlit af öllum mínum verkefnum, þetta er síðan sem þú ert á núna. "
          GithubUrl="https://github.com/jonashelgi/portfolio"
          Tags={[
            { content: "React" },
            { content: "Typescript " },
            { content: "React-Bootstrap" },
            { content: "Firebase" },
          ]}
        />
        <ProjectCard
          Title="Epic Store Clone"
          SubTitle="Jónas Helgi"
          Text="Endurherma af fræga windows tölvuleikja appinu hjá Epic Store."
          LinkUrl="https://gamestore-clone.web.app/"
          GithubUrl="https://github.com/jonashelgi/epicstore-clone"
          Tags={[
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
