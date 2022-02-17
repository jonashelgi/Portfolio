import React from "react";
import { Tooltip } from "react-bootstrap";

interface TextTooltipProps {
  Text: string;
}
const TextTooltip = ({ Text }: TextTooltipProps) => (
  <Tooltip id="button-tooltip">{Text}</Tooltip>
);

export default TextTooltip;
