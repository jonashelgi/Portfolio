import React from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";

import { Motion } from "../../../../components";
import avatar from "../../../../utils/images/avatar.png";
import styles from "./Greeting.module.css";

const Greeting = () => {
  return (
    <Container>
      <SimpleGrid>
        <Motion Type="right">
          <div className={styles.colorMain}>
            <h3>Hæ! Ég heiti Jónas Helgi</h3>
            <p className={styles.smallFont}>
              Ég sérhæfi mig í vefhönnun, þróun og forritun á vefsíðum. Ég
              starfa sem vefhönnuður hjá Menntamálastofnun og sé um að þróa og
              viðhalda rafrænu útgáfunni af Aðalnámskrá Grunnskóla. Einnig er ég
              í námi í Tölvunarfræði hjá Háskólanum í Reykjavík. Ég legg mikið
              upp úr því að öll mín viðmót og allar mínar vefsíður líta vel út á
              sama hvaða græju þau eru skoðuð.
            </p>
          </div>
          <div className={styles.logos}>
            <h5 className={styles.colorMain}>Það sem ég er helst að nota:</h5>
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
              height="30px"
            />
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="Javascript"
              height="30px"
            />
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              alt="Typescript"
              height="30px"
            />
            {/* <img
                src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
                alt="Firebase"
                height="30px"
              /> */}
            <img
              src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
              alt="GraphQL"
              height="30px"
            />
            <img
              src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"
              alt="Jest"
              height="30px"
            />
            <img
              src="https://img.shields.io/badge/Prismic-8B66A9?style=for-the-badge&logo=prismic&logoColor=white"
              alt="Prismic"
              height="30px"
            />
            <img
              src="https://img.shields.io/badge/strapi%20-6933FF?style=for-the-badge&logo=strapi&logoColor=white"
              alt="Strapi"
              height="30px"
            />
            <img
              src="https://img.shields.io/badge/-storybook-e35182?style=for-the-badge&logo=storybook&logoColor=white"
              alt="StoryBook"
              height="30px"
            />
            <img
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              alt="Github"
              height="30px"
            />
          </div>
          {/* <div className={styles.logos}>
              <h5 className={styles.colorMain}>
                Hægt er að sjá Storybook fyrir þessa vefsíðu hérna:
              </h5>
              <div>
                <Button size="lg" className={styles.btn}>
                  <a
                    href={"https://jonas-helgi-sb.web.app/"}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.smallFont}>Storybook</div>
                  </a>
                </Button>
              </div>
            </div> */}
        </Motion>
        <div className={styles.avatar}>
          <img
            className={styles.img}
            src={avatar}
            alt="Avatar of Jonas"
            width="300px"
          />
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default Greeting;
