import React from "react";
import { useState } from "react";

import { Main, Button, Key, Heading } from "../styles/calculator";

function Calculator() {
  const [calc, setCalc] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (calc === 1) {
      setCalc(input);
    } else {
      setCalc(calc + input);
    }
  }

  function clear() {
    setCalc(0);
  }

  function percent() {
    setCalc(calc / 100);
  }

  function minusPlus() {
    if (calc > 0) {
      setCalc(-calc);
    } else {
      setCalc(Math.abs(calc));
    }
  }

  function operatorType(event) {
    const operatorInput = event.target.value;
    setOperator(operatorInput);
    setResult(calc);
    setCalc(0);
  }

  function equal() {
    if (operator === "÷") {
      setCalc(parseFloat(result) / parseFloat(calc));
    } else if (operator === "*") {
      setCalc(parseFloat(result) * parseFloat(calc));
    } else if (operator === "-") {
      setCalc(parseFloat(result) - parseFloat(calc));
    } else if (operator === "+") {
      setCalc(parseFloat(result) + parseFloat(calc));
    }
  }

  return (
    <Main>
      <Heading className="operation">{calc}</Heading>
      <Key>
        <Button className="ac" onClick={clear} value={""}>
          AC
        </Button>
        <Button className="plus" onClick={minusPlus} value={""}>
          +/-
        </Button>
        <Button className="percent" onClick={percent}>
          %
        </Button>
        <Button className="divide" onClick={operatorType} value={"÷"}>
          ÷
        </Button>

        <Button className="seven" onClick={inputNum} value={7}>
          7
        </Button>
        <Button onClick={inputNum} value={8}>
          8
        </Button>
        <Button onClick={inputNum} value={9}>
          9
        </Button>
        <Button className="multi" onClick={operatorType} value="*">
          *
        </Button>
        <Button onClick={inputNum} value={4}>
          4
        </Button>
        <Button onClick={inputNum} value={5}>
          5
        </Button>
        <Button onClick={inputNum} value={6}>
          6
        </Button>
        <Button className="sub" onClick={operatorType} value="-">
          -
        </Button>
        <Button onClick={inputNum} value={1}>
          1
        </Button>
        <Button onClick={inputNum} value={2}>
          2
        </Button>
        <Button onClick={inputNum} value={3}>
          3
        </Button>
        <Button className="equal" onClick={operatorType} value="+">
          +
        </Button>
        <Button className="zero" onClick={inputNum} value={0}>
          0
        </Button>
        <Button onClick={inputNum} value=".">
          .
        </Button>
        <Button className="equal" onClick={equal} value="=">
          =
        </Button>
      </Key>
    </Main>
  );
}
export default Calculator;
