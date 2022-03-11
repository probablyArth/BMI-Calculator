import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export interface ValueProps {
  height: number;
  weight: number;
  setHeight: Dispatch<SetStateAction<number>>;
  setWeight: Dispatch<SetStateAction<number>>;
}

export const valuesContext = createContext<ValueProps>({
  height: 0,
  weight: 0,
  setHeight: () => {},
  setWeight: () => {},
});

const ValuesContext: FC = ({ children }) => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  return (
    <valuesContext.Provider value={{ height, setHeight, weight, setWeight }}>
      {children}
    </valuesContext.Provider>
  );
};

export default ValuesContext;
