import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  const msg = "Can you make it look like this clipart i found i'll know it when i see it, so can we have another option"
  return (
    <>
      <Header />
      <FeedbackItem rating={8} text={msg}/>
    </>
  );
}

export default App;
