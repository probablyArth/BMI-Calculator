import { FC } from "react";

const Label: FC = ({ children }) => {
  return <label className="text-lighter">{children}</label>;
};

export default Label;
