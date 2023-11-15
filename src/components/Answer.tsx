
import { AnswerProps } from "../interfaces/props";

export default function AnswerComponent(props: Readonly<AnswerProps>) {
    const { answer,select, index } = props;
    return (
        <div className="answerComponent" onClick={() => select(index)}>
            {answer}
        </div>
    );
}