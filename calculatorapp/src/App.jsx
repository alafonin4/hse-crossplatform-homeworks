import CalculatorInput from './Components/CalculatorInput';
import CalculatorOutput from './Components/CalculatorOutput';

function App() {
  const [result, setResult] = useState('');

  const handleCalculate = (operand1, operand2, operator) => {
    let calculatedResult;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    if (operator === '+') {
      calculatedResult = num1 + num2;
    } else if (operator === '-') {
      calculatedResult = num1 - num2;
    } else if (operator === '*') {
      calculatedResult = num1 * num2;
    } else if (operator === '/') {
      calculatedResult = num1 / num2;
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <CalculatorInput onCalculate={handleCalculate} />
      <CalculatorOutput result={result} />
    </div>
  );
}

export default App;
