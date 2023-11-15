export interface AnswerProps {
    answer: string;
    index: number;
    select(index: number): void;
}

export interface QuizzProps {
	updateScore: () => void;
	resetScore: () => void;
	currentScore: number;
}

export interface EndScreenProps {
    endScore: number;
    restart(): void;
}