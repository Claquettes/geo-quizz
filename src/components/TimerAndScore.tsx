import { useState } from "react"
export default function TimerComponent (props: { score: number, timeRemaining: number }) {


    



  return (
    <h1>Score: {props.score} | Time: {props.timeRemaining}</h1>
  )
}
