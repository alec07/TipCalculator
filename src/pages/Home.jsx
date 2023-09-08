import React, { useState } from "react";


const Home = () => {
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(0);
    const [numPeople, setNumPeople] = useState(1);
    const [customTipPercentage, setCustomTipPercentage] = useState(""); // valoarea personalizată a procentului de tips

    // Funcție pentru calculul tipsului pe persoană
    const calculateTipPerPerson = () => {
      const tipAmount = (billAmount * (tipPercentage / 100)) / numPeople;
      return tipAmount.toFixed(2); // Arată rezultatul cu două zecimale
    };

    // Funcție pentru calculul totalului pe persoană
    const calculateTotalPerPerson = () => {
      const totalAmount = (billAmount / numPeople) + parseFloat(calculateTipPerPerson());
      return totalAmount.toFixed(2);
    };

    // Funcție pentru a seta procentul de tips personalizat
    const handleCustomTipChange = (e) => {
        setCustomTipPercentage(e.target.value);
        setTipPercentage(parseFloat(e.target.value));
    };

    // Funcție pentru resetarea valorilor
    const resetValues = () => {
        setBillAmount(0);
        setTipPercentage(0);
        setNumPeople(1);
    };


    return (
        <div className="container">
            <div className="left">
                <p>Bill</p>
                <input  type="text" id="inputText" placeholder="0.00"  onChange={(e) => setBillAmount(parseFloat(e.target.value))}/>
                <p>Select Tip %</p>
                <div className="tip-options">
  <div className="tip-row">
    <input
      type="radio"
      id="tip5"
      name="tip"
      value="5"
      onChange={() => setTipPercentage(5)}
    />
    <label htmlFor="tip5">5%</label>
  </div>
  <div className="tip-row">
    <input
      type="radio"
      id="tip10"
      name="tip"
      value="10"
      onChange={() => setTipPercentage(10)}
    />
    <label htmlFor="tip10">10%</label>
  </div>
  <div className="tip-row">
    <input
      type="radio"
      id="tip15"
      name="tip"
      value="15"
      onChange={() => setTipPercentage(15)}
    />
    <label htmlFor="tip15">15%</label>
  </div>
</div>
<div className="tip-options">
  <div className="tip-row">
    <input
      type="radio"
      id="tip25"
      name="tip"
      value="25"
      onChange={() => setTipPercentage(25)}
    />
    <label htmlFor="tip25">25%</label>
  </div>
  <div className="tip-row">
    <input
      type="radio"
      id="tip50"
      name="tip"
      value="50"
      onChange={() => setTipPercentage(50)}
    />
    <label htmlFor="tip50">50%</label>
  </div>
  <div className="tip-row">
    <input
      type="text"
      id="customTip"
      placeholder="Custom"
      value={customTipPercentage}
      onChange={handleCustomTipChange}
    />

  </div>
</div>
                <p>Number of people</p>
                <input
                    type="number"
                    id="inputPeople"
                    placeholder="1"
                    onChange={(e) => setNumPeople(parseInt(e.target.value))}
                />
            </div>
            <div className="right">
                <div className="section">
                    <p>Tip Amount/person</p>
                    <p>${calculateTipPerPerson()}</p>
                </div>
                <div className="section">
                    <p>Total/person</p>
                    <p>${calculateTotalPerPerson()}</p>
                </div>
                <button onClick={resetValues}>Reset</button>
            </div>
        </div>
    )
}




export default Home