import React from "react";
import { BsLink45Deg, BsPatchCheck } from "react-icons/bs";

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
    <div>
      {Title && <h3>{Title}</h3>}
      {Text && <p>{Text}</p>}
      {/* {Progress && (
        
      )} */}
      {Link && (
        <a href={Link} target="_blank" rel="noreferrer">
          <BsLink45Deg size={40} aria-label="Link to another course page" />
        </a>
      )}
      {Cert && (
        <a href={Cert} target="_blank" rel="noreferrer">
          <BsPatchCheck size={40} aria-label="Link to certificate page" />
        </a>
      )}
    </div>
  );
};

export default CourseProgress;
