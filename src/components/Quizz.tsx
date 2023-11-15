import { QA } from "../interfaces/types";
import AnswerComponent from "./Answer";
import GenerateQA from "../utils/GenerateQA";
import "./Quizz.scss";
import { useState, useEffect } from "react";
interface QuizzProps {
	updateScore: () => void;
	resetScore: () => void;
	currentScore: number;
  }
  
  export default function QuizzComponent(props: QuizzProps) {

	const [round, setRound] = useState<QA>(GenerateQA());
	const [encodedImage, setEncodedImage] = useState<string>("");

	function handleSelection(index: number) {
		if (index === round.answers.correctIndex) {
			props.updateScore();
		}
		else {
			props.resetScore();
		}
		setTimeout(() => {setRound(GenerateQA)}, 200);
	}

	//to change the name of the image, so the user cannot see the name of the country by inspecting the page
	useEffect(() => {
		// Load the SVG image using an XMLHttpRequest
		const xhr = new XMLHttpRequest();
		xhr.open("GET", round.flag);
		xhr.onload = () => {
			// Encode the response in Base64 format
			const encoded = btoa(xhr.responseText);
			setEncodedImage(`data:image/svg+xml;base64,${encoded}`);
		};
		xhr.send();
	}, [round.flag]);

	return (
		<div id="quizz-wrapper">
			{/* Use the encoded image in the img tag */}
			<img src={encodedImage} alt="photo" />
			<div id="answer-wrapper">
				<AnswerComponent answer={round.answers.answer0} select={() => handleSelection(0)} index={0} />
				<AnswerComponent answer={round.answers.answer1} select={() => handleSelection(1)} index={1} />
				<AnswerComponent answer={round.answers.answer2} select={() => handleSelection(2)} index={2} />
				<AnswerComponent answer={round.answers.answer3} select={() => handleSelection(3)} index={3} />
			</div>
		</div>
	);
}