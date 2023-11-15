import { Answers, QA } from "../interfaces/types";
import GenerateRandomFlag from "./GenerateRandomFlag";
import GetCorrespondanceIdToName from "./GetCorrespondanceIdToName";

export default function GenerateQA(): QA {

	const flagName = GenerateRandomFlag();
	const wrongFlagName1 = GenerateRandomFlag();
	const wrongFlagName2 = GenerateRandomFlag();
	const wrongFlagName3 = GenerateRandomFlag();

	const answersString: string[] = [
		GetCorrespondanceIdToName(flagName),
		GetCorrespondanceIdToName(wrongFlagName1),
		GetCorrespondanceIdToName(wrongFlagName2),	
		GetCorrespondanceIdToName(wrongFlagName3)
	];

	// Shuffle the answers randomly
	const shuffledAnswers = answersString.sort(() => Math.random() - 0.5);

	// Find the index of the correct answer in the shuffled array
	const correctIndex = shuffledAnswers.indexOf(GetCorrespondanceIdToName(flagName));

	const answers: Answers = {
		answer0: shuffledAnswers[0],
		answer1: shuffledAnswers[1],
		answer2: shuffledAnswers[2],
		answer3: shuffledAnswers[3],
		correctIndex: correctIndex,
	};

	const questionAndAnswer: QA = {
		flag: "../../public/svg/" + flagName + ".svg",
		answers: answers
	}

	return questionAndAnswer;
}