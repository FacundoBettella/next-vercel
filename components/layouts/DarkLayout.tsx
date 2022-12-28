import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(201, 201, 201, 0.515)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark_layout</h3>
      <div>{children}</div>
    </div>
  );
};
