export const Money = ({ value }: { value: number }) => {
  const valueString = value.toString();
  return (
    <>
      {valueString.slice(0, valueString.length - 2) +
        "," +
        valueString.slice(valueString.length - 2)}
      zł
    </>
  );
};

export const toInteger = (value: number) => {
  const int = (value * 100).toString();

  return Number.parseInt(int.split(/[,.]/g)[0]);
};
