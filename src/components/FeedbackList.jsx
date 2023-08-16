import React from "react";
import PropTypes from "prop-types";
import FeedbacItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  console.log("Feedback data is: ");
  console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No fedback yet!</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item, index) => (
        <FeedbacItem key={index} id={item.id} text={item.text} rating={item.rating} />
      ))}
    </div>
  );
}

FeedbackList.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
