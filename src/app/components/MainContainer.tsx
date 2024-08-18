import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="md:px-[64px] px-8">
      <div className="max-w-[1440px] m-auto">{children}</div>
    </div>
  );
};

export default MainContainer;
