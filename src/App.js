import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

function App() {
  const msg = "Can you make it look like this clipart i found i'll know it when i see it, so can we have another option"
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <FeedbackItem rating={8} text={msg}/>
    </>
  );
}

export default App;
