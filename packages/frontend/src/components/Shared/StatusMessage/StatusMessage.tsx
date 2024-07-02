import React, { ReactNode } from "react";
import { Message } from "./StatusMessage.styled";
import { Status } from "./types";

interface StatusMessageProps {
  status: Status;
  minwidth?: string;
  children: ReactNode;
}

const StatusMessage: React.FC<StatusMessageProps> = ({
  status,
  children,
  minwidth,
}) => {
  return (
    <Message status={status} minwidth={minwidth}>
      {children}
    </Message>
  );
};

export default StatusMessage;
