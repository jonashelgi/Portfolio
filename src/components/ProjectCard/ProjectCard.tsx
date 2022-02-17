import React from "react";
import { Badge, Box, Stack, Text } from "@chakra-ui/react";
import { BsLink, BsGithub } from "react-icons/bs";
import { color } from "../../utils";

export interface ProjectCardProps {
  Title?: string;
  SubTitle?: string;
  Info?: string;
  LinkUrl?: string;
  GithubUrl?: string;
  Tags?: {
    content: string;
  }[];
}

export const ProjectCard = ({
  Title,
  SubTitle,
  Info,
  LinkUrl,
  GithubUrl,
  Tags,
}: ProjectCardProps) => {
  return (
    <Box bg={color.second} borderRadius={10} padding={5} className={"boxShadow"}>
      {Title && (
        <Text fontSize={"2xl"} fontWeight={"semibold"} color={color.main}>
          {Title}
        </Text>
      )}
      {SubTitle && (
        <Text fontSize={"xl"} fontWeight={"semibold"} color={color.main}>
          {SubTitle}
        </Text>
      )}
      {Info && (
        <Text fontSize={"lg"} color={color.main}>
          {Info}
        </Text>
      )}
      {Tags && (
        <Text fontSize={"2xl"}>
          {Tags.map((data: any, index: number) => (
            <Badge key={index} color={color.main}>
              {data.content}
            </Badge>
          ))}
        </Text>
      )}
      <Stack direction={"row"}>
        {LinkUrl && (
          <a href={LinkUrl} target="_blank" rel="noreferrer">
            <BsLink
              size={40}
              aria-label="Linkur á vefsíðuna"
              color={color.main}
            />
          </a>
        )}
        {GithubUrl && (
          <a href={GithubUrl} target="_blank" rel="noreferrer">
            <BsGithub
              size={40}
              aria-label="Linkur á Github"
              color={color.main}
            />
          </a>
        )}
      </Stack>
    </Box>
  );
};

export default ProjectCard;
