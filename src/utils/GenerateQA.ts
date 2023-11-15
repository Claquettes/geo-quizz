import { Answers, QA } from "../interfaces/types";
import GenerateRandomFlag from "./GenerateRandomFlag";
import GetCorrespondanceIdToName from "./GetCorrespondanceIdToName";

export default function GenerateQA(): QA {

	const flagName = GenerateRandomFlag();
	const wrongFlagNames = new Set<string>();

	// Generate three unique wrong flag names
	while (wrongFlagNames.size < 3) {
		const name = GenerateRandomFlag();
		if (name !== flagName) {
			wrongFlagNames.add(name);
		}
	}

	const answersString: string[] = [
		GetCorrespondanceIdToName(flagName),
		...Array.from(wrongFlagNames).map(GetCorrespondanceIdToName)
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