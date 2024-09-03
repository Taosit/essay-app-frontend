import QuestionHeader from "../components/QuestionHeader";
import Timer from "../components/Timer";
import EssayArea from "../components/EssayArea";
import { FormEvent, useState } from "react";
import { postEssay } from "../api/essay";
import { useNavigate } from "react-router-dom";

export const WriteEssay = () => {
  const [questionText, setQuestionText] = useState("");
  const [essayText, setEssayText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postEssay({ question: questionText, essayText });
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="essay-form">
        <div className="header">
          <QuestionHeader
            questionText={questionText}
            setQuestionText={setQuestionText}
          />
          <Timer />
        </div>
        <div className="essay-area">
          <EssayArea essayText={essayText} setEssayText={setEssayText} />
        </div>
      </form>
    </div>
  );
};
