import React from "react";
import {
  Box,
  HStack,
  Progress as ProgressBar,
  Text,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { color, font } from "../../utils";

export interface ProgressProps {
  title?: string;
  info?: string;
  progress?: number;
  link?: string;
  cert?: string;
}

export const Progress = ({
  title,
  info,
  progress,
  link,
  cert,
}: ProgressProps) => {
  return (
    <Box>
      {title && (
        <Text fontSize={font.md} color={color.main} fontWeight={"semibold"}>
          {title}
        </Text>
      )}
      {info && (
        <Text fontSize={font.sm} pb={2} color={color.main}>
          {info}
        </Text>
      )}
      {progress && (
        <ProgressBar value={progress} colorScheme={"main"} bg={color.red} />
      )}
      <HStack pt={2} pb={5}>
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <Tag
              color={color.main}
              boxShadow={"inset 0 0 0px 1px " + color.main}
              variant={"outline"}
              transition={"0.2s"}
              _hover={{
                background: color.main,
                color: color.second,
                transition: "0.1s",
              }}
            >
              <TagLabel>Námskeið</TagLabel>
            </Tag>
          </a>
        )}
        {cert && (
          <a href={cert} target="_blank" rel="noreferrer">
            <Tag
              color={color.main}
              boxShadow={"inset 0 0 0px 1px " + color.main}
              variant={"outline"}
              transition={"0.2s"}
              _hover={{
                background: color.main,
                color: color.second,
                transition: "0.1s",
              }}
            >
              <TagLabel>Vottorð</TagLabel>
            </Tag>
          </a>
        )}
      </HStack>
    </Box>
  );
};

export default Progress;
