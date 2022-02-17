// ButtonGroup.stories.ts | ButtonGroup.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";

import { Wrapper, WrapperProps } from "./Wrapper";

export default {
  title: "Components/Wrapper",
  component: Wrapper,
} as Meta;

const Template: Story<WrapperProps> = (args) => <Wrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div key={1}>Wrapper fyrir hvert scene.</div>,
};
