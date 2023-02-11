import React from "react";
import Button from "@mui/material/Button";

export interface ButtonProps {
  label: string;
}
const FormBuilder = (props: ButtonProps) => {
  return <Button variant="text">Text</Button>;
};
export default FormBuilder;
