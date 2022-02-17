import { Container } from "@chakra-ui/react";
import React from "react";

import { BsBook } from "react-icons/bs";
import { CourseProgress } from "../../../../components";
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <Container>
      <div>
        <h3 className={styles.title}>
          <BsBook size={40} className={styles.icon} /> NÁMSKEIÐ
        </h3>
        <CourseProgress
          Title="Docker and Kubernetes: The Complete Guide"
          Text="Build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows."
          Progress={30}
          Link="https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/"
        />
        <CourseProgress
          Title="Complete C# Masterclass"
          Text="Learn C# Programming - WPF, Databases, Linq, Collections, Game Development with Unity. More than just the C# basics!"
          Progress={55}
          Link="https://www.udemy.com/course/complete-csharp-masterclass/"
        />
        <CourseProgress
          Title="The Complete 2021 Web Development Bootcamp"
          Text="Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, build real projects."
          Progress={100}
          Link="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
          Cert="https://www.udemy.com/certificate/UC-10471ff1-f7dd-4142-af02-a1e33a151341/"
        />
        <CourseProgress
          Title="Tableau 2020 A-Z: Hands-On Tableau Training for Data Science"
          Text="Learn Tableau 2020 for data science step by step. Real-life data analytics exercises & quizzes included. Learn by doing!"
          Progress={100}
          Link="https://www.udemy.com/course/tableau10/"
          Cert="https://www.udemy.com/certificate/UC-3c163630-9a06-4ea5-8221-14e07bf856bc/"
        />
      </div>
    </Container>
  );
};

export default Courses;
