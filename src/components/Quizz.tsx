import { QA } from "../interfaces/types";
import AnswerComponent from "./Answer";
import GenerateQA from "../utils/GenerateQA";
import "./Quizz.scss";
import { useState } from "react";

export default function QuizzComponent() {

	const [Round, setRound] = useState<QA>(GenerateQA());

	function handleSelection(index: number) {
		if (index === Round.answers.correctIndex) {
			alert("Correct!");
		}
		else {
			alert("Wrong!");
		}
		setTimeout(() => {setRound(GenerateQA)}, 200);
	}

	return (
		<div id="quizz-wrapper">
			<img src={Round.flag} alt="photo" />
			<div id="answer-wrapper">
				<AnswerComponent answer={Round.answers.answer0} select={() => handleSelection(0)} index={0} />
				<AnswerComponent answer={Round.answers.answer1} select={() => handleSelection(1)} index={1} />
				<AnswerComponent answer={Round.answers.answer2} select={() => handleSelection(2)} index={2} />
				<AnswerComponent answer={Round.answers.answer3} select={() => handleSelection(3)} index={3} />
			</div>
		</div>
	);
}
