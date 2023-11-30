"use client";
import validator from "is-my-date-valid";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import days from "@/lib/days.js";
import months from "@/lib/months.js";

export default function Home() {
  const [arrayDays, setArrayDays] = useState(days);
  const [chosenDay, setChosenDay] = useState(0);
  const [chosenMonth, setChosenMonth] = useState(months);
  const [monthCounter, setMonthCounter] = useState(0);
  const [realMonth, setRealMonth] = useState(0);
  const [chosenYear, setChosenYear] = useState(0);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  if (chosenDay === 0 && monthCounter === 0 && chosenYear === 0) {
    setChosenDay(currentDay);
    setChosenYear(currentYear);
    setMonthCounter(currentMonth);
    setRealMonth(currentMonth + 1);
  }

  function handlePrevMonth() {
    let prevMonth = monthCounter - 1;
    setMonthCounter(prevMonth);
    setRealMonth(realMonth - 1);
  }

  function handleNextMonth() {
    let nextMonth = monthCounter + 1;
    setMonthCounter(nextMonth);
    setRealMonth(realMonth + 1);
  }

  function handlePrevYear() {
    setChosenYear(chosenYear - 1);
  }

  function handleNextYear() {
    setChosenYear(chosenYear + 1);
  }

  return (
    <main>
      <h1>
        <em>Dear Diary</em>
      </h1>

      <div id="month">
        <button
          onClick={handlePrevMonth}
          className={monthCounter === 0 ? "disabledBtn" : null}
          disabled={monthCounter === 0 ? true : false}
        >
          ◀
        </button>
        <p>{chosenMonth[monthCounter]}</p>
        <button
          onClick={handleNextMonth}
          className={monthCounter === 11 ? "disabledBtn" : null}
          disabled={monthCounter === 11 ? true : false}
        >
          ▶
        </button>
      </div>

      <div id="year">
        <button onClick={handlePrevYear}>◀</button>
        <p>{chosenYear}</p>
        <button onClick={handleNextYear}>▶</button>
      </div>

      <div id="days-container">
        {arrayDays.map((day) => {
          return (
            <div className="card" key={day.id}>
              {day.day}
            </div>
          );
        })}
      </div>

      <form>
        <textarea></textarea>
        <button id="submitBtn">Submit</button>
      </form>
    </main>
  );
}
