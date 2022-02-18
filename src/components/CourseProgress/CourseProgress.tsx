import React from "react";
import { BsLink45Deg, BsPatchCheck } from "react-icons/bs";
import { Box, HStack, Progress as ProgressBar, Text } from "@chakra-ui/react";
import { color } from "../../utils";

export interface CourseProgressProps {
  Title?: string;
  Info?: string;
  Progress?: number;
  Link?: string;
  Cert?: string;
}

// TODO add progressbar

export const CourseProgress = ({
  Title,
  Info,
  Progress,
  Link,
  Cert,
}: CourseProgressProps) => {
  return (
    <Box>
      {Title && (
        <Text fontSize={"2xl"} color={color.main}>
          {Title}
        </Text>
      )}
      {Info && (
        <Text fontSize={"xl"} pb={2} color={color.main}>
          {Info}
        </Text>
      )}
      {Progress && (
        <ProgressBar value={Progress} colorScheme={"main"} bg={color.red} />
      )}
      <HStack pt={2} pb={5}>
        {Link && (
          <a href={Link} target="_blank" rel="noreferrer">
            <BsLink45Deg
              size={40}
              aria-label="Link to another course page"
              color={color.main}
            />
          </a>
        )}
        {Cert && (
          <a href={Cert} target="_blank" rel="noreferrer">
            <BsPatchCheck
              size={40}
              aria-label="Link to certificate page"
              color={color.main}
            />
          </a>
        )}
      </HStack>
    </Box>
  );
};

export default CourseProgress;
