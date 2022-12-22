import { useEffect, useState } from "react";

const Display = ({ currency, country }) => {
  const [currencies, setCurrencies] = useState([]);
  const handleData = async () => {
    const response = await fetch("http://localhost:8000/currencies");
    const currenciesData = await response.json();
    //const data= currenciesData.filter((item)=>item.name =="Euro");
    console.log(currenciesData);
    setCurrencies(currenciesData);
  };
  useEffect(() => {
    console.log(currencies);
    handleData();
  }, []);

  return (
    <>
      <div>
        {" "}
        Converter {currency} : {country}
      </div>
      App
      {currencies.map((currency) => (
        <div key={currency.code}>
          <div>Name : {currency.name}</div>
          <div>code : {currency.code}</div>
          <div>namePlural : {currency.namePlural}</div>
        </div>
      ))}
    </>
  );
};
export default Display;
