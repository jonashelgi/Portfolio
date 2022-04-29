import React from "react";
import { Badge, Box, Stack, Text } from "@chakra-ui/react";
import { BsLink, BsGithub } from "react-icons/bs";
import { color, font } from "../../utils";

export interface CardProps {
  title?: string;
  subTitle?: string;
  info?: string;
  linkUrl?: string;
  githubUrl?: string;
  tags?: {
    content: string;
  }[];
}

export const Card = ({
  title,
  subTitle,
  info,
  linkUrl,
  githubUrl,
  tags,
}: CardProps) => {
  return (
    <Box bg={color.second} borderRadius={10} p={5} className={"boxShadow"}>
      {title && (
        <Text fontSize={font.md} fontWeight={"semibold"} color={color.main}>
          {title}
        </Text>
      )}
      {subTitle && (
        <Text fontSize={font.sm} fontWeight={"semibold"} color={color.main}>
          {subTitle}
        </Text>
      )}
      {info && (
        <Text fontSize={font.sm} color={color.main} pt={2}>
          {info}
        </Text>
      )}
      {tags && (
        <Text fontSize={font.md}>
          {tags.map((data: any, index: number) => (
            <Badge key={index} color={color.main} bg={color.second}>
              {data.content}
            </Badge>
          ))}
        </Text>
      )}
      <Stack direction={"row"} pt={2}>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <BsGithub
              size={40}
              aria-label="Linkur á Github"
              color={color.main}
            />
          </a>
        )}
        {linkUrl && (
          <a href={linkUrl} target="_blank" rel="noreferrer">
            <BsLink
              size={40}
              aria-label="Linkur á vefsíðuna"
              color={color.main}
            />
          </a>
        )}
      </Stack>
    </Box>
  );
};

export default Card;
