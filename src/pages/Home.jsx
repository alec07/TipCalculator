import React, { useState } from "react";


const Home = () => {
    const [billAmount, setBillAmount] = useState("");
    const [tipPercentage, setTipPercentage] = useState(0);
    const [numPeople, setNumPeople] = useState("");
    const [customTipPercentage, setCustomTipPercentage] = useState("");
    const [error, setError] = useState("");



    // Function to handle input changes and error display
    const handleInputChange = (e) => {
        const inputValue = parseFloat(e.target.value);
        if (isNaN(inputValue) || inputValue < 1) {
            setError("Give a number greater than or equal to 1");
        } else {
            setError("");
        }
        setBillAmount(inputValue);
    };

    // Function for calculating the tip per person
    const calculateTipPerPerson = () => {
        if (billAmount >= 1 && tipPercentage >= 1 && numPeople >= 1) {
            const tipAmount = (billAmount * (tipPercentage / 100)) / numPeople;
            return tipAmount.toFixed(2);
        } else {
            return "0.00";
        }
    };

    // Function for calculating the total per person
    const calculateTotalPerPerson = () => {
        if (billAmount >= 1 && tipPercentage >= 1 && numPeople >= 1) {
        const totalAmount = (billAmount / numPeople) + parseFloat(calculateTipPerPerson());
        return totalAmount.toFixed(2);
        } else {
        return "0.00";
        }
    };

    // Function to set the percentage of custom tips
    const handleCustomTipChange = (e) => {
        setCustomTipPercentage(e.target.value);
        setTipPercentage(parseFloat(e.target.value));
    };

   // Function to reset values
   const resetValues = () => {
    setBillAmount("");
    setTipPercentage(0);
    setNumPeople("");
    setCustomTipPercentage("");
    setError("");
};


    return (
        <div className="container">
            <div className="left">
                <p>Bill</p>
                <input
                    type="text"
                    id="inputText"
                    placeholder="0.00"
                    value={billAmount}
                    onChange={handleInputChange}
                 />
                 {error && <p className="error">{error}</p>}
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
                    value={numPeople}
                    min="1"
                    onChange={(e) => {
                        const inputValue = parseInt(e.target.value);
                        if (inputValue < 1) {
                            e.target.value = 1;
                        }
                        setNumPeople(inputValue);
                    }}
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