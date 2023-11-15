export interface AnswerProps {
    answer: string;
    index: number;
    select(index: number): void;
}
