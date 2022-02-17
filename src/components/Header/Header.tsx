import {
  Button,
  ButtonGroup,
  Container,
  SimpleGrid,
  // useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { Link } from "react-scroll";

import { Motion } from "..";
import styles from "./Header.module.css";

export const Header = () => {
  // const [isSmall] = useMediaQuery("(max-width: 1000px)");

  return (
    <Container>
      <SimpleGrid>
        <Motion Type="right">
          <div>
            <a
              href={"https://github.com/jonashelgi"}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub
                size={46}
                className={styles.icon}
                aria-label="Link to Github"
              />
            </a>
            <a
              href={"https://www.linkedin.com/in/jonashelgi/"}
              target="_blank"
              rel="noreferrer"
              className="HoverItem"
            >
              <BsLinkedin
                size={46}
                className={styles.icon}
                aria-label="Link to Linkedin"
              />
            </a>
            <a
              href={"https://stackoverflow.com/users/14008605/icejonas"}
              target="_blank"
              rel="noreferrer"
            >
              <BsStackOverflow
                size={46}
                className={styles.icon}
                aria-label="Link to StackOverflow"
              />
            </a>
          </div>
        </Motion>

        <Motion Type="left">
          <ButtonGroup className="BoxShadow">
            <Button size="lg" className={styles.btn}>
              <Link to="Projects">Verkefni</Link>
            </Button>
            <Button size="lg" className={styles.btn}>
              <Link to="Courses">Námskeið</Link>
            </Button>
            <Button size="lg" className={styles.btn}>
              <a
                href={
                  "https://jonas-helgi-sb.web.app/?path=/story/welcome--page"
                }
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Storybook
              </a>
            </Button>
          </ButtonGroup>
        </Motion>
      </SimpleGrid>
    </Container>
  );
};

export default Header;
