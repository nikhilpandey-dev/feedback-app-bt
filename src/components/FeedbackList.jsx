import React from "react";
import FeedbacItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
    console.log('Feedback data is: ');
    console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No fedback yet!</p>;
  }

  return (
    <div className="feedback-list">{feedback.map((item) => (
        <FeedbacItem key={item.id} item={item} />
    ))}</div>
  )

}

export default FeedbackList;
