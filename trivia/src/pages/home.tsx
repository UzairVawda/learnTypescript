import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lottieOpen from "../assets/lotties/triviaopening.json";
import lottieGo from "../assets/lotties/triviaGO.json";
import lottieThinking from "../assets/lotties/triviathink.json";
import lottieGoing from "../assets/lotties//triviagoing.json";
import { IoSettingsOutline } from "react-icons/io5";
import { PiRanking } from "react-icons/pi";
import Settings from "../components/settings";
import { useNavigate } from "react-router-dom";

function Home() {
  type Category = {
    id: number;
    name: string;
  };
  type Question = {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  const navigate = useNavigate();
  const [animationIndex, setAnimationIndex] = useState<number>(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [catagories, setCatagories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedNumOfQuestions, setSelectedNumOfQuestions] = useState(5);
  const [selectedDifficulty, setSelectedDifficulty] = useState("any");
  const [selectedQuestionType, setSelectedQuestionType] = useState("any");

  useEffect(() => {
    const text = document.querySelector<HTMLSpanElement>(".typingText");

    if (text) {
      const letters = text.textContent?.split("");
      text.textContent = "";
      letters?.forEach((letter, index) => {
        const span = document.createElement("span");

        span.textContent = letter === " " ? "\u00A0" : letter;
        span.style.animationDelay = `${index * 0.15}s`;
        span.classList.add("fadeIn");
        text.appendChild(span);
      });
    }
  }, []);

  const handleStep = (): void => {
    setPageCount(pageCount + 1);
  };

  const handleSettingsModal = (): void => {
    setIsSettingsOpen(true);
  };

  const handleGameStart = async () => {
    setAnimationIndex(2);
    const params = new URLSearchParams();
    params.append("amount", selectedNumOfQuestions.toString());
    if (selectedCategory !== 0)
      params.append("category", selectedCategory.toString());
    if (selectedDifficulty !== "any")
      params.append("difficulty", selectedDifficulty.toString());
    if (selectedQuestionType !== "any")
      params.append("type", selectedQuestionType.toString());

    const url = `https://opentdb.com/api.php?${params.toString()}`;
    console.log(url);
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.response_code === 1)
          alert("Failed to fetch questions - Please try again later!");
        else
          navigate("/game", {
            state: {
              questions: data.results,
              settings: {
                selectedCategory,
                selectedNumOfQuestions,
                selectedDifficulty,
                selectedQuestionType,
              },
            },
          });
        setQuestions(data.results);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "error:(";
        console.log(errorMessage);
      }
    }, 3000); // 5000 milliseconds = 5 seconds
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen text-center bg-gradient-to-tr from-violet-400 to-violet-200">
      {pageCount === 1 && (
        <div>
          <Lottie animationData={lottieOpen} loop={true} className="w-96" />

          <div className="flex flex-col items-center justify-center text-3xl font-bold text-center">
            <span className="text-white typingText">Lets Play Trivia!</span>
            <Lottie
              animationData={lottieGo}
              loop={true}
              onClick={handleStep}
              className="cursor-pointer w-28"
            />
          </div>
          <h1></h1>
        </div>
      )}

      {pageCount === 2 && (
        <>
          <div className="absolute flex flex-row items-center justify-between w-full px-6 text-white top-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <IoSettingsOutline
                size={20}
                color="white"
                onClick={handleSettingsModal}
              />
              <div>settings</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <PiRanking size={20} color="white" />
              <div>rankings</div>
            </div>
          </div>
          <div className="cursor-pointer" onClick={handleGameStart}>
            {animationIndex === 1 ? (
              <Lottie
                animationData={lottieThinking}
                loop={true}
                className="w-96"
              />
            ) : (
              <Lottie
                animationData={lottieGoing}
                loop={true}
                className="cursor-pointer w-96"
              />
            )}
            <div className="text-2xl font-bold text-white">Click to Start</div>
          </div>
        </>
      )}

      {/* Settings Modal */}
      <Settings
        modalInfo={isSettingsOpen}
        setModalInfo={setIsSettingsOpen}
        catagories={catagories}
        setCatagories={setCatagories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedNumOfQuestions={selectedNumOfQuestions}
        setSelectedNumOfQuestions={setSelectedNumOfQuestions}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        selectedQuestionType={selectedQuestionType}
        setSelectedQuestionType={setSelectedQuestionType}
      />
    </div>
  );
}

export default Home;
