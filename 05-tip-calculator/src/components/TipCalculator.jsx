import { useState } from 'react';
import { MAX_PEOPLE } from '../constants/config.js';
import parseLocaleNumber from '../utils/parseLocaleNumber.js';
import calculateTotalTip from '../utils/calculateTotalTip.js';

import BillInput from './BillInput';
import PeopleInput from './PeopleInput';
import TipSelection from './TipSelection';
import TotalAmount from './TotalAmount';
import ResetButton from './ResetButton';

export default function TipCalculator() {
  const [billInput, setBillInput] = useState('0');
  const [peopleInput, setPeopleInput] = useState('1');
  const [tips, setTips] = useState({});

  const bill = parseLocaleNumber(billInput);

  const numOfPeople =
    peopleInput === ''
      ? 1
      : Math.min(Math.max(1, Number(peopleInput)), MAX_PEOPLE);

  const people = Array.from({ length: numOfPeople }, (_, i) => ({
    id: i + 1,
    tip: tips[i + 1] ?? ''
  }));

  const totalTipAmount = calculateTotalTip(bill, people);

  function handleBillInputChange(e) {
    const value = e.target.value;

    if (/^\d*[.,]?\d*$/.test(value)) {
      setBillInput(value);
    }
  }

  function handlePeopleInputChange(e) {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setPeopleInput(value);
    }
  }

  function handleTipChange(id, newPercentage) {
    setTips(prevTips => ({
      ...prevTips,
      [id]: newPercentage
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleReset() {
    setBillInput('0');
    setPeopleInput('1');
    setTips({});
  }

  return (
    <main>
      <form
        className='tip-calculator'
        onSubmit={handleSubmit}>
        <BillInput
          billInput={billInput}
          handleBillInputChange={handleBillInputChange}
        />

        <PeopleInput
          peopleInput={peopleInput}
          handlePeopleInputChange={handlePeopleInputChange}
        />

        <TipSelection
          people={people}
          handleTipChange={handleTipChange}
        />

        <TotalAmount
          bill={bill}
          totalTipAmount={totalTipAmount}
        />

        <ResetButton handleReset={handleReset} />
      </form>
    </main>
  );
}
