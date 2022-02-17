// ButtonGroup.stories.ts | ButtonGroup.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";

import { CourseProgress, CourseProgressProps } from "./CourseProgress";

export default {
  title: "Components/CourseProgress",
  component: CourseProgress,
} as Meta;

const Template: Story<CourseProgressProps> = (args) => (
  <CourseProgress {...args} />
);

export const CourseFinished = Template.bind({});
CourseFinished.args = {
  Title: "Nafn á námskeiði",
  Text: "Lýsing á námskeiðinu.",
  Progress: 100,
  Link: "https://portfolio-c3ae9.web.app/",
  Cert: "https://portfolio-c3ae9.web.app/",
};

export const CourseNotFinished = () => {
  return (
    <CourseProgress
      Title="Ólokið námskeið"
      Text="Lýsing á námskeiðinu."
      Progress={60}
      Link="https://portfolio-c3ae9.web.app/"
      Cert="https://portfolio-c3ae9.web.app/"
    />
  );
};

export const WithoutIcons = () => {
  return (
    <CourseProgress
      Title="Námskeið án icons og án námskeiðslýsingu"
      Progress={60}
    />
  );
};
