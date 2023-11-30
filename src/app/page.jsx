"use client";
import validator from "is-my-date-valid";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import days from "@/lib/days.jsx";

export default function Home() {
  const [arrayDays, setArrayDays] = useState(days);
  const [chosenDay, setChosenDay] = useState("");
  const [chosenMonth, setChosenMonth] = useState("");
  const [chosenYear, setChosenYear] = useState("");

  console.log(arrayDays);

  return (
    <main>
      <h1>
        <em>Dear Diary</em>
      </h1>
      <div id="month">
        <button>◀</button>
        <p>Month</p>
        <button>▶</button>
      </div>
      <div id="year">
        <button>◀</button>
        <p>Year</p>
        <button>▶</button>
      </div>

      <div id="days-container"></div>

      <form>
        <textarea></textarea>
        <button id="submitBtn">Submit</button>
      </form>
    </main>
  );
}
