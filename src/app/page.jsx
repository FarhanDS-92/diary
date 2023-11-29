"use client";
import validator from "is-my-date-valid";
import { useState } from "react";

export default function Home() {
  const [presentDay, setPresentDay] = useState("");

  const currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  let presentDate = currentDate.toJSON().slice(0, 10);
  let todaysDate = currentDate.toLocaleDateString();
  console.log(
    currentDate,
    currentDay,
    currentMonth,
    currentYear,
    presentDate,
    todaysDate
  );

  return (
    <main>
      <h1>
        <em>Dear Dairy</em>
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
