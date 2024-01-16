import "./QuizPage.css";

import QuizButton from "./UI/Quiz/QuizButton";
import QuizTextInputBox from "./UI/Quiz/QuizTextInputBox";
import QuizCheckBox from "./UI/Quiz/QuizCheckBox";

function QuizPage({ recipes }) {
  return (
    <div className="QuizPage">
      <div className="QuizPage_Container">
        <h1>Please fill out the quiz below</h1>
        <QuizCheckBox />
        <QuizTextInputBox />
        <QuizButton />
      </div>
    </div>
  );
}

export default QuizPage;
