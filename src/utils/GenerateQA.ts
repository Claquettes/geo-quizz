import { Answers, QA } from "../interfaces/types";
import GenerateRandomFlag from "./GenerateRandomFlag";

export default function GenerateQA(): QA {
	const answers: Answers = {
		answer0: "France",
		answer1: "Spain",
		answer2: "USA",
		answer3: "Canada",
		correctIndex: 2, // index of the correct answer (starting from 0)
	};

	const questionAndAnswer: QA = {
		flag: "../../public/svg/" + GenerateRandomFlag(),
		answers: answers
	}

	return questionAndAnswer;
}
