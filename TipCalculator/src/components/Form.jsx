import React, { useEffect, useState } from 'react';
import Result from './Result';

function Form() {
  // States for the various input field
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [totaltipAmount, setTotalAmount] = useState(0)
  const [perAmount, setPerAmount] = useState(0)
// function to handle the bill input field change
  function handleBill(e) {
    const { value } = e.target;
    isNaN(value) ? setBill('') : setBill(value);
  }
// function to handle the perentage input field change

  function handleTipPercentage(e) {
    const { value } = e.target;
    isNaN(value) ? setTipPercentage('') : setTipPercentage(value);
  }
// function to handle the people input field change

  function handlePeople(e) {
    const { value } = e.target;
    isNaN(value) ||value == 0 ? setPeople('') : setPeople(value);
  }

// Function for calculating the the various logic for the tip
  const calculateTip = () => {
    if (bill && tipPercentage && people) {
      const billAmount = parseFloat(bill);
      const tipAmount = (billAmount * tipPercentage) / 100;
      const totalAmount = billAmount + tipAmount;
      const amountPerPerson = totalAmount / people;

      if (isNaN(amountPerPerson)) {
        setPerAmount(0);
        setTotalAmount(0)
      }

     else {
      setTotalAmount(totalAmount);
      setPerAmount(amountPerPerson);
      }
      }
      else {
        setPerAmount(0)
        setTotalAmount(0)
      }
      
    }
    useEffect(()=>{
      calculateTip()
    })
    
  // Value for the button with static values
  const staticTipPercentage = [5,10,15,25,50]

  return (
    <>
      <form>
        <div className="box bill">
          <label htmlFor="bill" className="form__label">
            Bill
          </label>
          <input
            type="text"
            name="bill"
            id="bill"
            className="form__input dollar-icon"
            placeholder="0"
            onChange={handleBill}
            value={bill}
          />
        </div>
        <div className="percent">
          <label htmlFor="custom" className="form__label tip">
            Select Tip %
          </label>
          <div className="percent__box">
            {staticTipPercentage.map((value,index)=>(
               <button  type="button" onClick={() => setTipPercentage(value)} className="percent__btn">
               {value}%
             </button>
            ))}
            <input
              type="text"
              className="form__input custom"
              name="custom"
              id="custom"
              placeholder="Custom"
              onChange={handleTipPercentage}
              value={tipPercentage}
            />
          </div>
        </div>
        <div className="box people">
          <label htmlFor="people" className="form__label people_label">
            Number of People
            {people <= 0 && <span id="zero_span">Can't be empty</span>}
          </label>

          <input
            onChange={handlePeople}
            value={people}
            type="text"
            name="people"
            id="people"
            className={people <= 0 ? 'form__input invalid' : 'form__input valid people-icon'}
            placeholder="0"
          />
        </div>
      </form>
      <Result total={totaltipAmount.toFixed(2)} perperson={perAmount.toFixed(2)}/>

    </>
  );
};
export default Form;
