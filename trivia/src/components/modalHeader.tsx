import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

type ModalHeaderProps = {
  onClose(): void;
  title: string;
};

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose, title }) => {
  return (
    <div className="relative flex items-center justify-center p-3">
      <button className="absolute top-0 right-0 rounded-md" onClick={onClose}>
        <IoMdCloseCircleOutline
          size={30}
          className="text-gray-300 transition-all duration-500 ease-in-out transform hover:text-red-700"
        />
      </button>
      <span className="text-2xl font-bold">{title}</span>
    </div>
  );
};

export default ModalHeader;
