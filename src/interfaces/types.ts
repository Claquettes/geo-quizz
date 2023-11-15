export interface Answers{
    answer0: string;
    answer1: string;
    answer2: string;
    answer3: string;
    correctIndex: number; //0 to 3
}

export interface QA{
    flag: string; //path to flag image
    answers: Answers;
}