import React from "react";
import rd3 from "react-d3-library"

const Circle = () => {
    return (
      <svg style = {{ width: "inherit", height:"inherit"}}>
        <circle
          cx="150"
          cy="77"
          r="50"
        />
        <circle
          cx="300"
          cy="77"
          r="50"
        />
      </svg>
    )
  }




export default function List() {
  const r = 50
  const circle_x = [r + 100, r * 4 + 100, r * 7 + 100, r * 10 + 100]
  const list = [3, 6, 1, 2]
    return (
        <svg style = {{ width: "900", height:"200"}}>

          <defs>
            <marker id="arrow" markerWidth="5" 
                markerHeight="5" refX="3" 
                refY="2.5" orient="auto"
                >
                <polygon points="0 0, 4 2.5, 0 5" />
            </marker>
          </defs>



            <circle
                cx= {circle_x[0]}
                cy="77"
                r={r}
                fill="#000000"
                opacity="0.5"
            />
            <text
                x = {circle_x[0]}
                y = "85"
                textAnchor="middle"
                fill="#d06034"
            >{list[0]}</text>
            <line
                x1={circle_x[0] + r}
                y1="77"
                x2={circle_x[0 + 1] - r}
                y2="77"
                stroke="#000000"
                strokeWidth="5"
                strokeOpacity="0.5"
                marker-end="url(#arrow)"
            />

            <circle
                cx="300"
                cy="77"
                r="50"
                fill="#000000"
                opacity="0.5"
            />
            <text
                x = "300"
                y = "85"
                textAnchor="middle"
                fill="#d06034"
            >6</text>

            <circle
                cx="450"
                cy="77"
                r="50"
                fill="#000000"
                opacity="0.5"
            />
            <circle
                cx="600"
                cy="77"
                r="50"
                fill="#000000"
                opacity="0.5"
            />
            <text
                x = "750"
                y = "85"
                textAnchor="middle"
                fill="#d06034"
            >X</text>

        </svg>
      )



}