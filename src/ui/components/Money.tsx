import currency from "currency.js";

export const Money = ({ value }: { value: number }) => {
  return (
    <>
      {currency(value, {
        decimal: ",",
        fromCents: true,
        symbol: "zł",
        pattern: `#!`,
      }).format()}
    </>
  );
};

export const toInteger = (value: number) => {
  return currency(value).intValue;
};
