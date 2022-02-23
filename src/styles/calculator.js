import styled from "styled-components";
export const Main = styled.div`
  width: 500px;
  height: 600px;
  background-color: black;
  border-radius: 50px;
  padding-top: 200px;
  margin-left: 100px;
  padding-left: 20px;
`;
export const Key = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  .divide {
    background-color: #fbb034;
  }
  .multi {
    background-color: #fbb034;
  }
  .sub {
    background-color: #fbb034;
  }
  .add {
    background-color: #fbb034;
  }
  .equal {
    background-color: #fbb034;
  }
  .ac {
    background-color: grey;
  }
  .plus {
    background-color: grey;
  }
  .percent {
    background-color: grey;
  }
  .zero {
    grid-column: 1 / span 2;
    border-radius: 65px;
    place-content: unset;
    align-items: center;
    padding-left: 2rem;
    width: 200px;
  }
`;

export const Button = styled.button`
  background-color: #333;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  cursor: pointer;
  color: white;
  border: 1px solid #333;
  flex-direction: coloumn-reverse;
`;
export const Heading = styled.h1`
  display: flex;
  flex-direction: end;
  text-align: end;
  align-items: right;
  justify-content: right;
  align-content: right;
  background-color: black;
  color: white;
  height: 80px;
  width: 450px;
  font-weight: 10px;
  font-size: 50px;
`;
