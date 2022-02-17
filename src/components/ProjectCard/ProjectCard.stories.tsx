// ButtonGroup.stories.ts | ButtonGroup.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";

import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import { Waves } from "..";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
} as Meta;

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  Title: "Aðalnámskrá grunnskóla",
  SubTitle: "Menntamálastofnun",
  Text: "Hanna og forrita aðalnámskrá grunnskóla yfir á rafrænt form ásamt áframhaldandi þróun og viðhald.",
  ExtraText: "Hér er auka texti sem birtist þegar ýtt er á upplýsinga takkann",
  LinkUrl: "https://portfolio-c3ae9.web.app/",
  GithubUrl: "https://portfolio-c3ae9.web.app/",
};

export const WithWaves = () => {
  return (
    <div>
      <Waves Type="bottom" Points={2} />
      <ProjectCard
        Title="Portfolio"
        SubTitle="Jónas Helgi"
        Text="Síða sem inniheldur yfirlit af öllum mínum verkefnum, þetta er síðan sem þú ert á núna. "
        ExtraText="halló"
        GithubUrl="https://github.com/jonashelgi/portfolio"
      />
      <Waves Type="top" Points={2} />
    </div>
  );
};
