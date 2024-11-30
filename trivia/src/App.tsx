import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lottieOpen from "./assets/lotties/triviaopening.json";
import lottieGo from "./assets/lotties/triviaGO.json";
import lottieThinking from "./assets/lotties/triviathink.json";
import { IoSettingsOutline } from "react-icons/io5";
import { PiRanking } from "react-icons/pi";

function App() {
  const [pageCount, setPageCount] = useState<number>(2);

  useEffect(() => {
    const text = document.querySelector<HTMLSpanElement>(".typingText");

    if (text) {
      const letters = text.textContent?.split("");
      console.log(letters);

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
        </div>
      )}

      {pageCount === 2 && (
        <>
          <div className="absolute flex flex-row items-center justify-between w-full px-6 text-white top-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <IoSettingsOutline size={20} color="white" />
              <div>settings</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <PiRanking size={20} color="white" />
              <div>rankings</div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Lottie
              animationData={lottieThinking}
              loop={true}
              className="w-96"
            />
            <div className="text-2xl font-bold text-white">Click to Start</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
