import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";

// import { Motion } from "..";
import { color } from "../../utils";

export const Header = () => {
  const [isSmall] = useMediaQuery("(max-width: 500px)");

  return (
    <Container maxW="8xl" paddingTop={"10"}>
      <SimpleGrid minChildWidth="200px">
        <Stack direction={"row"} gap={"3"}>
          <a
            href={"https://github.com/jonashelgi"}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub
              size={46}
              color={color.main}
              aria-label="Link to Github"
            />
          </a>
          <a
            href={"https://www.linkedin.com/in/jonashelgi/"}
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin
              size={46}
              color={color.main}
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
              color={color.main}
              aria-label="Link to StackOverflow"
            />
          </a>
        </Stack>

        <ButtonGroup
          size="lg"
          isAttached
          style={isSmall ? {} : { display: "flex", justifyContent: "flex-end" }}
        >
          <Button bg={color.main} _hover={{ bg: color.secmain }}>
            <ScrollLink to="Projects">
              <Text color={color.white100}>Verkefni</Text>
            </ScrollLink>
          </Button>
          <Button bg={color.main} _hover={{ bg: color.secmain }}>
            <ScrollLink to="Courses">
              <Text color={color.white100}>Námskeið</Text>
            </ScrollLink>
          </Button>
        </ButtonGroup>
      </SimpleGrid>
    </Container>
  );
};

export default Header;
