import React from "react";


// Hold state (number of lines before an arrow)-> index of the lines
// Pass in if arrow should move forwards or backwards through the logic (-1, 0, 1)
// Only works for iterative



export default function CursorIter({fwd_bk}) {
  const lines = [0, 1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 6];
  let arrow = "\n".repeat(5) + "➤"


  return (
    <div className="Code">
      <pre>
        <pre>{arrow}</pre>
      </pre>
    </div>
  );
}
