import React from "react";
import rd3 from "react-d3-library"


export default function List() {
  const r = 50
  const list = [3, 6, 1, 2]
    return (
        list.map(item=> (
          <svg style = {{ width: "150", height:"200"}}>
            <defs>
              <marker id="arrow" markerWidth="5" 
                markerHeight="5" refX="3" 
                refY="2.5" orient="auto">
              <polygon points="0 0, 4 2.5, 0 5" />
              </marker>
            </defs>
            <circle
              cx= "50"
              cy="77"
              r={r}
              fill="#000000"
              opacity="0.5"
            />
            <text
              x = "50"
              y = "85"
              textAnchor="middle"
              fill="#d06034"
            >{item}</text>
            <line
              x1="100"
              y1="77"
              x2="150"
              y2="77"
              stroke="#000000"
              strokeWidth="5"
              strokeOpacity="0.5"
              marker-end="url(#arrow)"
            />
          </svg>
        ))
        
      )



}