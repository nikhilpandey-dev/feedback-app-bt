import React from "react";
import { useState } from "react";

function FeedbackItem() {
  const defMsg =
    "Other agencies charge much lesser can you make it more infographic-y the hair is just too polarising we don't need a contract";
  const [rating, setRating] = useState(6);
  const [text, setText] = useState(defMsg);
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;
