import HeaderComponent from "./components/Header";
import QuizzComponent from "./components/Quizz";
import TimerScore from "./components/TimerAndScore";
import EndScreenModal from "./components/EndScreenModal";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { createToast } from "./utils/CreateToast";

import "./App.scss";

function App() {
	const [score, setScore] = useState<number>(0);
	const [bestScore, setBestScore] = useState<number>(0);
	const [isGameOver, setIsGameOver] = useState<boolean>(false);
	const [timeRemaining, setTimeRemaining] = useState<number>(10);

	function saveScore() {
		setScore((prevScore) => {
			const newScore = prevScore + 1;
			if (newScore > bestScore) {
				setBestScore(newScore);
			}
			createToast("success");
			return newScore;
		});
	}

	function resetScore() {
		setScore(0);
		createToast("error");
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (timeRemaining > 0) {
				setTimeRemaining((prevTime) => prevTime - 1);
			} else {
				setIsGameOver(true);
			}
		}, 1000);
		return () => clearInterval(intervalId);
	}, [timeRemaining]);

	return (
		<>
			{isGameOver === true ? (
				<EndScreenModal endScore={bestScore} restart={() => setIsGameOver(false)} />
			) : (
				<>
					<Toaster />
					<HeaderComponent />
					<TimerScore score={bestScore} timeRemaining={timeRemaining} />
					<QuizzComponent
						updateScore={saveScore}
						resetScore={resetScore}
						currentScore={score}
					/>
				</>
			)}
		</>
	);
}

export default App;