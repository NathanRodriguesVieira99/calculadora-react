import { Container, Content, Row } from "./styles";

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
	const [currentNumber, setCurrentNumber] = useState("0");
	const [firstNumber, setFirstNumber] = useState("0");
	const [operation, setOperation] = useState("");

	const handleOnClear = () => {
		setCurrentNumber("0");
		setFirstNumber("0");
	};

	const handleAddNumber = (num) => {
		setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
	};

	const handleSumNumbers = () => {
		if (firstNumber === "0") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("+");
		} else {
			const sum = Number(firstNumber) + Number(currentNumber);
			setCurrentNumber(String(sum));
			setOperation("");
		}
	};

	const handleSubNumbers = () => {
		if (firstNumber === "0") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("-");
		} else {
			const sub = Number(firstNumber) - Number(currentNumber);
			setCurrentNumber(String(sub));
			setOperation("");
		}
	};

	const handleMultiplyNumbers = () => {
		if (firstNumber === "0") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("*");
		} else {
			const mult = Number(firstNumber) * Number(currentNumber);
			setCurrentNumber(String(mult));
			setOperation("");
		}
	};

	const handleDivNumbers = () => {
		if (firstNumber === "0") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("/");
		} else {
			const div = Number(firstNumber) / Number(currentNumber);
			setCurrentNumber(String(div));
			setOperation("");
		}
	};

	const handleEquals = () => {
		if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
			switch (operation) {
				case "+":
					handleSumNumbers();
					break;
				// biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
				case "-":
					handleSubNumbers();
				// biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
				case "*":
					handleMultiplyNumbers();
				// biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
				case "/":
					handleDivNumbers();
				default:
					break;
			}
		}
	};

	return (
		<Container>
			<Content>
				<Input value={currentNumber} />
				<Row>
					<Button label="." onClick={handleMultiplyNumbers} />
					<Button label="/" onClick={handleDivNumbers} />
					<Button label="c" onClick={handleOnClear} />
					<Button label="0" onClick={() => handleAddNumber("0")} />
				</Row>
				<Row>
					<Button label="7" onClick={() => handleAddNumber("7")} />
					<Button label="8" onClick={() => handleAddNumber("8")} />
					<Button label="9" onClick={() => handleAddNumber("9")} />
					<Button label="-" onClick={handleSubNumbers} />
				</Row>
				<Row>
					<Button label="4" onClick={() => handleAddNumber("4")} />
					<Button label="5" onClick={() => handleAddNumber("5")} />
					<Button label="6" onClick={() => handleAddNumber("6")} />
					<Button label="+" onClick={handleSumNumbers} />
				</Row>
				<Row>
					<Button label="1" onClick={() => handleAddNumber("1")} />
					<Button label="2" onClick={() => handleAddNumber("2")} />
					<Button label="3" onClick={() => handleAddNumber("3")} />
					<Button label="=" onClick={handleEquals} />
				</Row>
			</Content>
		</Container>
	);
}

export default App;
