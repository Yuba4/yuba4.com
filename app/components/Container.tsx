import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  <div className="flex justify-center items-center h-screen">
    <div className="max-w-lg w-full p-4 space-y-4">{children}</div>
  </div>;
};
