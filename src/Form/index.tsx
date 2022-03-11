import { FC, useContext, useEffect, useState } from "react";
import { JsxElement } from "typescript";
import { valuesContext } from "../Contexts/ValuesContext";
import { calculateBmi } from "../Utils/bmi";
import Input from "./Input";
import Label from "./Label";

const Form: FC = () => {
  const { setHeight, setWeight, height, weight } = useContext(valuesContext);
  const [bmi, setBmi] = useState<string>("0");
  const [bmiBody, setBmiBody] = useState<JSX.Element>(<div></div>);

  useEffect(() => {
    const { newBmi, body } = calculateBmi(height, weight);
    setBmi(newBmi);
    setBmiBody(body);
  }, [height, weight]);

  return (
    <div className="flex flex-col bg-lightDark p-4 rounded-md shadow-lg">
      <div className="flex flex-col my-4">
        <Label>Height</Label>
        <Input
          placeholder="Height"
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col my-4">
        <Label>Weight</Label>
        <Input
          placeholder="Weight"
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      {bmi}
      {bmiBody}
    </div>
  );
};

export default Form;
