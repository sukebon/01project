import { createContext, ReactNode } from "react";
import { useState } from "react";

type Props = {
  children: ReactNode;
};

type InitialState = {
  useFlag: boolean;
  setUseFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TopicsContext = createContext<InitialState | null>(null);

export const TopicsProvider: React.VFC<Props> = ({ children }) => {
  const [useFlag, setUseFlag] = useState(false);

  return (
    <TopicsContext.Provider value={{ useFlag, setUseFlag }}>
      {children}
    </TopicsContext.Provider>
  );
};
