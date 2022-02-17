import React from "react";
import { BsLink45Deg, BsPatchCheck } from "react-icons/bs";

import styles from "./CourseProgress.module.css";

export interface CourseProgressProps {
  Title?: string;
  Text?: string;
  Progress?: number;
  Link?: string;
  Cert?: string;
}

// TODO add progressbar

export const CourseProgress = ({
  Title,
  Text,
  Progress,
  Link,
  Cert,
}: CourseProgressProps) => {
  return (
    <div className={styles.root}>
      {Title && <h3 className={styles.title}>{Title}</h3>}
      {Text && <p className={styles.text}>{Text}</p>}
      {/* {Progress && (
        
      )} */}
      {Link && (
        <a href={Link} target="_blank" rel="noreferrer">
          <BsLink45Deg
            size={40}
            className={styles.icon}
            aria-label="Link to another course page"
          />
        </a>
      )}
      {Cert && (
        <a href={Cert} target="_blank" rel="noreferrer">
          <BsPatchCheck
            size={40}
            className={styles.icon}
            aria-label="Link to certificate page"
          />
        </a>
      )}
    </div>
  );
};

export default CourseProgress;
