import React from "react";
import { Story, Meta } from "@storybook/react";

import { Motion, MotionProps } from "./Motion";
import { color } from "../../utils";

export default {
  title: "Components/Motion",
  component: Motion,
} as Meta;

const style = {
  fontSize: "25px",
  backgroundColor: color.main,
  color: color.second,
  width: "25%",
  textAlign: "center" as "center",
};

const Template: Story<MotionProps> = (args) => <Motion {...args} />;

export const Default = Template.bind({});
Default.args = {
  Type: "up",
  children: <div style={style}>Góðan dag</div>,
};
