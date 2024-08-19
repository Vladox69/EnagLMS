import React, { FC } from "react";
interface EmailTemplateProps {
  data: string;
}
export const EmailTemplate: FC<EmailTemplateProps> = ({ data }) => {
  return <div>{data}</div>;
};
