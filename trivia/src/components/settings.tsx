import React, { useState, useEffect, SetStateAction } from "react";
import Modal from "./modal";
import ModalHeader from "./modalHeader";

type SettingsProps = {
  modalInfo: boolean;
  setModalInfo: (value: SetStateAction<boolean>) => void;
};

type Category = {
  id: number;
  name: string;
};

const Settings: React.FC<SettingsProps> = ({ modalInfo, setModalInfo }) => {
  const [catagories, setCatagories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedNumOfQuestions, setSelectedNumOfQuestions] = useState(5);
  const [selectedDifficulty, setSelectedDifficulty] = useState("any");
  const [selectedQuestionType, setSelectedQuestionType] = useState("any");

  const difficulties = ["any", "easy", "medium", "hard"];

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // setIsLoading(true);
      const url = "https://opentdb.com/api_category.php";
      try {
        const response = await fetch(url);
        const data = await response.json();
        const trivia = data["trivia_categories"];
        console.log(trivia);
        setCatagories(trivia);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "error:(";
        console.log(errorMessage);
      }
    };
    fetchData();
  }, []);
  console.log(selectedQuestionType);

  return (
    <Modal isOpen={modalInfo} setIsOpen={setModalInfo}>
      <ModalHeader
        title={"Trivia Settings"}
        onClose={() => setModalInfo(false)}
      />
      <div className="flex flex-col items-center justify-center w-full gap-5">
        {/* Categories */}
        <label className="w-full">
          <span className="block mb-2 text-gray-700">Category</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option key={0} value={0}>
              All Categories
            </option>
            {catagories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        {/* Number Of Questions */}
        {/* add check to only allow numbers */}
        <label className="w-full">
          <span className="block mb-2 text-gray-700">Number Of Questions</span>
          <input
            min={0}
            value={selectedNumOfQuestions}
            onChange={(e) => setSelectedNumOfQuestions(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          ></input>
        </label>

        {/* Difficulty */}
        <label className="w-full">
          <span className="block mb-2 text-gray-700">Difficulty</span>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </select>
        </label>

        {/* type */}
        <label className="w-full">
          <span className="block mb-2 text-gray-700">Type</span>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={selectedQuestionType}
            onChange={(e) => setSelectedQuestionType(e.target.value)}
          >
            <option key={"any"} value={"any"}>
              Any
            </option>
            <option key={"multiple"} value={"multiple"}>
              Multiple Choice
            </option>
            <option key={"boolean"} value={"boolean"}>
              True / False
            </option>
          </select>
        </label>

        {/* button */}
        <div
          className="w-full py-2 font-semibold text-center text-white rounded-lg bg-violet-500 hover:bg-violet-900"
          onClick={() => setModalInfo(false)}
        >
          Save Changes
        </div>
      </div>
    </Modal>
  );
};

export default Settings;
