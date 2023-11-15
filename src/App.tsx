import HeaderComponent from "./components/Header";
import QuizzComponent from "./components/Quizz";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

import "./App.scss";

function App() {
	const notify = () =>
		toast("Hello Darkness!", {
			icon: "👏",
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});


	const [score, setScore] = useState<number>(0);

	function saveScore() {
		setScore((prevScore) => prevScore + 1);
		notify();
	}

	return (
		<>
			<Toaster />
			<HeaderComponent />
			<QuizzComponent
				updateScore={saveScore}
				resetScore={() => setScore(0)}
				currentScore={score}
			/>
			<h1>Score: {score}</h1>
		</>
	);
}

export default App;
