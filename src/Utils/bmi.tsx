export const calculateBmi = (height: number, weight: number) => {
  if (!height || !weight) return { newBmi: "0", body: <span></span> };

  const newBmi = (weight / ((height * height) / 10000)).toFixed(2);

  const numeric = Number(newBmi);
  let body = <></>;
  if (numeric < 18.6)
    body = <span className="text-yellow-600 font-bold">Under Weight</span>;
  else if (numeric >= 18.6 && numeric < 25)
    body = <span className="text-green-500 font-bold">Healthy Weight</span>;
  else if (numeric >= 25 && numeric < 30)
    body = (
      <span className="text-green-500 font-bold">
        You're overweight my dude
      </span>
    );
  else
    body = (
      <span className="text-red-600 font-extrabold">DUDE YOU'RE CRAZY</span>
    );

  return { newBmi, body };
};
