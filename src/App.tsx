import HeaderComponent from "./components/Header";
import QuizzComponent from "./components/Quizz";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { createToast } from "./utils/CreateToast";

import "./App.scss";

function App() {

	const [score, setScore] = useState<number>(0);

	function saveScore() {
		setScore((prevScore) => prevScore + 1);
		createToast("success");
	}

	function resetScore() {
		setScore(0);
		createToast("error");
	}
	return (
		<>
			<Toaster />
			<HeaderComponent />
			<QuizzComponent
				updateScore={saveScore}
				resetScore={resetScore}
				currentScore={score}
			/>
			<h1>Score: {score}</h1>
		</>
	);
}

export default App;
