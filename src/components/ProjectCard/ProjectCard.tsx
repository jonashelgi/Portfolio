import { Badge } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsLink, BsGithub, BsInfoCircle } from "react-icons/bs";

import styles from "./ProjectCard.module.css";

export interface ProjectCardProps {
  Title?: string;
  SubTitle?: string;
  Text?: string;
  ExtraText?: string;
  LinkUrl?: string;
  GithubUrl?: string;
  Storybook?: string;
  Tags?: {
    content: string;
  }[];
}

export const ProjectCard = ({
  Title,
  SubTitle,
  Text,
  Tags,
  ExtraText,
  LinkUrl,
  GithubUrl,
  Storybook,
}: ProjectCardProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <div className={styles.card}>
      {Title && <h3 className={styles.title}>{Title}</h3>}
      {SubTitle && <h4>{SubTitle}</h4>}
      {Text && <p className={styles.text}>{Text}</p>}
      {Tags && (
        <h5>
          {Tags.map((data: any, index: number) => (
            <Badge
              style={{ margin: "2px", backgroundColor: "red" }}
              key={index}
            >
              {data.content}
            </Badge>
          ))}
        </h5>
      )}
      {LinkUrl && (
        <a href={LinkUrl} target="_blank" rel="noreferrer">
          <BsLink
            size={40}
            className={styles.icon}
            aria-label="Linkur á vefsíðuna"
          />
        </a>
      )}
      {GithubUrl && (
        <a href={GithubUrl} target="_blank" rel="noreferrer">
          <BsGithub
            size={40}
            className={styles.icon}
            aria-label="Linkur á Github"
          />
        </a>
      )}
      {ExtraText && (
        <BsInfoCircle
          size={40}
          onClick={toggleShow}
          className={styles.icon}
          aria-label="Opnar upplýsinga glugga"
        />
      )}
    </div>
  );
};

export default ProjectCard;
