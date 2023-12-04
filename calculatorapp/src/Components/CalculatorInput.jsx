import React, { useState } from 'react';

function CalculatorInput({ onCalculate }) {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');

  const handleOperand1Change = (e) => {
    const operand = e.target.value;
    setOperand1(operand);
  };

  const handleOperand2Change = (e) => {
    const operand = e.target.value;
    setOperand2(operand);
  };

  const handleOperatorChange = (e) => {
    const operator = e.target.value;
    setOperator(operator);
  };

  const handleCalculate = () => {
    onCalculate(operand1, operand2, operator);
  };

  return (
    <div>
      <input type="text" value={operand1} onChange={handleOperand1Change} />
      <input type="text" value={operand2} onChange={handleOperand2Change} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={handleCalculate}>=</button>
    </div>
  );
}

export default CalculatorInput;