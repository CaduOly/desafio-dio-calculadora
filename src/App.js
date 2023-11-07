import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => {
      if (prev === "0" && num === ".") {
        return "0.";
      } else {
        return `${prev === "0" ? "" : prev}${num}`;
      }
    });
  };

  const handleOperation = (op) => {
    setOperation(op);
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
    } else {
      switch (op) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "x":
          handleMultNumber();
          break;
        case "/":
          handleDivNumber();
          break;
        default:
          break;
      }
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "x":
          handleMultNumber();
          break;
        case "/":
          handleDivNumber();
          break;
        default:
          break;
      }
    }
  };

  const handleSumNumber = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    showResult(sum);
  };

  const handleMinusNumber = () => {
    const sum = Number(firstNumber) - Number(currentNumber);
    showResult(sum);
  };

  const handleMultNumber = () => {
    const sum = Number(firstNumber) * Number(currentNumber);
    showResult(sum);
  };

  const handleDivNumber = () => {
    const sum = Number(firstNumber) / Number(currentNumber);
    showResult(sum);
  };

  const showResult = (sum) => {
    setCurrentNumber(String(sum));
    setOperation("");
    setFirstNumber("0");
  };

  const handleBackSpace = () => {
    setCurrentNumber((prev) => `${prev.length > 1 ? prev.slice(0, -1) : "0"}`);
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="c" onClick={() => handleOnClear()} />
          <Button label="<" onClick={() => handleBackSpace()} />
          <Button label="("/>
          <Button label=")"/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="÷" onClick={() => handleOperation("/")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="x" onClick={() => handleOperation("x")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
