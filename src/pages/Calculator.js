import React from "react";
// import {useState} from "react"
import { Main, Button, Key } from "../styles/calculator";

function Calculator() {
  // const [num1,num2] = useState(0);
  // const [num3,num4] =useState(0);
  // const [operator,srtOperator] =useState();
  // function input(e) {
  //     var input = e.target.value;
  //     if(num===0) {
  //         num2(input);
  //     }
  //     else{
  //         num2(num+input);
  //     }
  // }
  // function clear() {
  //     num1(0);
  // }
  // function percentage() {
  //     num1(num/100);
  // }
  // function sign() {
  //     if (num>0){
  //     num1(-num);
  //     }
  //     else{
  //         num1(Math.line(num));
  //     }
  // }
  // function operatorHandler(e) {
  //     const operatorInput = e.target.value;
  //     setOperator(operatorInput);
  //     num4(num);
  //     num2(0);
  // }
  // function Calculate() {
  //     if (operator === "/") {

  //     }
  // }
  const clear = "";
  const sign = () => console.log("kamna");

  const percentage = () => console.log("kasdh");
  return (
    <Main>
      <Key>
        <Button className="ac" onClick={clear}>
          AC
        </Button>
        <Button className="plus" onClick={sign}>
          {" "}
          +/-
        </Button>
        <Button className="percent" onClick={percentage}>
          %
        </Button>
        <Button className="divide">÷</Button>
        <Button className="seven">7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button className="multi">×</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button className="sub">-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button className="equal">+</Button>
        <Button className="zero">0</Button>
        <Button>.</Button>
        <Button className="equal">=</Button>
      </Key>
    </Main>
  );
}
export default Calculator;
