import React, { useState } from "react";
import CurrencySwitcher from "./CurrencySwitcher";
import Display from "./Display";

const Converter = ({ country }) => {
  const [currency, setCurrency] = useState("Euro");

  const handleChangeCurrency = () => {
    setCurrency(currency === "Euro" ? "Yen" : "Euro");
  };

  return (
    <>
      <Display currency={currency} country={country} />
      <CurrencySwitcher handleChangeCurrency={handleChangeCurrency} />
    </>
  );
};

export default Converter;
