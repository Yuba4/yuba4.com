import { ReactNode } from "react";

import { Header } from "../components";

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="flex">
        <div className="container mx-auto max-w-2xl px-4 py-8">
          <div className="pb-6">
            <Header />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
