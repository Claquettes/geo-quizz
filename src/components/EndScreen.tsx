import { useEffect, useState } from "react";
import { EndScreenProps } from "../interfaces/props";
import "./EndScreen.scss";

function updateTotalScore(score: number) {
	const storedTotalScore = localStorage.getItem("totalScore");
	if (storedTotalScore !== null) {
		const parsedTotalScore = parseInt(storedTotalScore);
		if (!isNaN(parsedTotalScore)) {
			localStorage.setItem("totalScore", (parsedTotalScore + score).toString());
		}
	} else {
		localStorage.setItem("totalScore", score.toString());
	}
}

export default function EndScreen(props: EndScreenProps) {
	const [localBestScore, setLocalBestScore] = useState<number>(0);

	function checkBestScore() {
		const storedBestScore = localStorage.getItem("bestScore");
		if (storedBestScore !== null) {
			const parsedBestScore = parseInt(storedBestScore);
			if (!isNaN(parsedBestScore)) {
				setLocalBestScore(parsedBestScore);
				if (props.endScore > parsedBestScore) {
					localStorage.setItem("bestScore", props.endScore.toString());
					setLocalBestScore(props.endScore);
				}
			}
		} else {
			localStorage.setItem("bestScore", props.endScore.toString());
			setLocalBestScore(props.endScore);
		}
	}

	useEffect(() => {
		checkBestScore();
		return () => {
			updateTotalScore(props.endScore);
		};
	}, [props.endScore]);

	return (
		<div id="endscreen">
			<h3>Your score is: ✨{props.endScore}✨</h3>
			<h3>
				{props.endScore === localBestScore
					? "🍾Congratulations, this is a new Highscore!🍾"
					: `Your High Score is: 💪${localBestScore}💪`}
			</h3>
			<br />
			<button onClick={props.restart}>Restart</button>
			<p>
				Did you know that the sum of all your scores is:{" "}
				{localStorage.getItem("totalScore")} ?
			</p>
		</div>
	);
}