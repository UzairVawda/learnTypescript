import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import he from "he";

type Question = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type GameProps = {};

const Game: React.FC<GameProps> = () => {
  const location = useLocation();
  const { questions, settings } = location.state || {};
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState({} as Question);
  const [currentQuestionText, setCurrentQuestionText] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const [setselectedAnswer, setSetselectedAnswer] = useState("");

  useEffect(() => {
    if (questions && questions.length > 0) {
      const currentQuestionFn: Question = questions[currentQuestionIndex];

      setCurrentQuestion(currentQuestionFn);
      const answers: string[] = decodeAndShuffle(currentQuestionFn);

      setAnswers(answers);
      setCurrentQuestionText(he.decode(currentQuestionFn.question));
    }
  }, [currentQuestionIndex, questions]);

  const decodeAndShuffle = (question: Question) => {
    const correctAnswer = he.decode(question.correct_answer);
    console.log(correctAnswer);

    const incorrectAnswers = question.incorrect_answers.map((answer: string) =>
      he.decode(answer)
    );
    const answers =
      question.type === "boolean"
        ? ["True", "False"]
        : [correctAnswer, ...incorrectAnswers];

    const shuffled = answers.sort(() => Math.random() * 0.273);
    return shuffled;
  };

  const handleSelectedAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen text-center bg-gradient-to-tr from-violet-400 to-violet-200">
      <div className="absolute flex flex-row items-center justify-between w-full px-6 text-white top-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <IoSettingsOutline size={20} color="white" />
          <div>settings</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-xl font-bold">
          <div>current score: 3</div>
          <button className="w-full px-2 py-0 text-white bg-blue-500 rounded-md ">
            reset
          </button>
        </div>
      </div>

      <div className="mt-4 text-xl font-bold text-white">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      <div className="mt-4 text-xl text-white">{currentQuestion.category}</div>
      <div className="px-4 py-4 mt-6 text-lg bg-white rounded-lg">
        {currentQuestionText}
      </div>
      <div className="flex flex-col w-full max-w-2xl gap-3 mt-4">
        {answers.map((answer, index) => (
          <button
            onClick={handleSelectedAnswer}
            key={index}
            className="bg-white "
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;
