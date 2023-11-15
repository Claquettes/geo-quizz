import { useEffect, useState } from "react";
import { EndScreenProps } from "../interfaces/props";

export default function EndScreenModal(props: EndScreenProps) {
    const [localBestScore, setLocalBestScore] = useState<number>(0);

    useEffect(() => {
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
    }, [props.endScore]);

    return (
        <div id="endscreen">
            Your score is: {props.endScore}  <br /> 
            Your best score is: {localBestScore}
        </div>
    );
}