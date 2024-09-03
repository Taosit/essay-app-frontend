type Props = {
  questionText: string;
  setQuestionText: (text: string) => void;
};

export default function QuestionHeader({
  questionText,
  setQuestionText,
}: Props) {
  return (
    <div className="question-header">
      <label className="label" htmlFor="question">
        Question
      </label>
      <input
        type="text"
        name="question"
        id="question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        required
      />
    </div>
  );
}
