import { useState } from "react";
export default function TimerComponent(props: {
	score: number;
	timeRemaining: number;
}) {
	return (
    <div id="timer">
		<h1>
			Score: {props.score} | Time: {props.timeRemaining}
		</h1>
    </div>
	);
}
