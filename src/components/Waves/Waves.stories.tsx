// ButtonGroup.stories.ts | ButtonGroup.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react";

import { Waves, WavesProps } from "./Waves";

export default {
  title: "Components/Waves",
  component: Waves,
} as Meta;

const Template: Story<WavesProps> = (args) => <Waves {...args} />;

export const Default = Template.bind({});
Default.args = {
  Type: "top",
  Points: 2,
};
