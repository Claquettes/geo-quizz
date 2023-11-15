import HeaderComponent from "./components/Header";
import QuizzComponent from "./components/Quizz";
import TimerScore from "./components/TimerAndScore";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { createToast } from "./utils/CreateToast";

import "./App.scss";

function App() {
	const [score, setScore] = useState<number>(0);
	const [bestScore, setBestScore] = useState<number>(0);
	const  [timeRemaining, setTimeRemaining] = useState<number>(15);
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
		  if (timeRemaining >= 0) {
			setTimeRemaining((prevTime) => prevTime - 1);
		  } else {
			alert("Game Over, your score is " + score);	
		  }
		}, 1000);
		return () => clearInterval(intervalId);
	  }, [timeRemaining]);

	return (
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
	);
}

export default App;
