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

  const [clickedOn, setClickedOn] = useState(false);
  const [entries, setEntries] = useState([]);
  const [showEntry, setShowEntry] = useState("");

  const [envelope, setEnvelope] = useState("💌");

  const validate = validator({ format: "YYYY-MM-DD" });

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
    if (typeof chosenYear === "number") {
      setChosenYear(chosenYear - 1);
    } else if (typeof chosenYear === "string") {
      let year = Number(chosenYear) - 1;
      setChosenYear(year.toString());
    }
  }

  function handleNextYear() {
    if (typeof chosenYear === "number") {
      setChosenYear(chosenYear + 1);
    } else if (typeof chosenYear === "string") {
      let year = Number(chosenYear) + 1;
      setChosenYear(year.toString());
    }
  }

  function handleChosenDay(e) {
    setChosenYear(chosenYear.toString());
    setShowEntry("");

    if (clickedOn === false) {
      e.target.className = "card selected-day";
      setClickedOn(true);
    } else {
      let parent = [...e.target.parentElement.children];

      for (let i = 0; i < parent.length; i++) {
        if (parent[i].className === "card selected-day") {
          e.target.parentElement.children[i].className = "card";
        }
      }
      e.target.className = "card selected-day";
    }

    let thatDay = "";

    if (e.target.textContent.includes("💌")) {
      thatDay = e.target.textContent.slice(2);
      console.log(thatDay);
      setChosenDay(Number(thatDay));
    } else {
      setChosenDay(Number(e.target.textContent));
    }

    for (let i = 0; i < entries.length; i++) {
      if (
        entries[i].day === Number(thatDay) &&
        entries[i].month === chosenMonth[monthCounter] &&
        entries[i].year === Number(chosenYear)
      ) {
        setShowEntry(entries[i].text);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target[0].value) {
      let entry = {
        day: chosenDay,
        month: chosenMonth[monthCounter],
        year: Number(chosenYear),
        text: e.target[0].value,
      };

      let entryExists = false;

      let updatedEntries = entries.map((existingEntry) => {
        if (
          existingEntry.day === entry.day &&
          existingEntry.month === entry.month &&
          existingEntry.year === entry.year
        ) {
          entryExists = true;
          return { ...existingEntry, text: entry.text };
        }
        return existingEntry;
      });

      if (!entryExists) {
        updatedEntries.push(entry);
      }

      setEntries(updatedEntries);
    }
  }

  function handleDelete() {
    setShowEntry("");

    let entry = {
      day: chosenDay,
      month: chosenMonth[monthCounter],
      year: Number(chosenYear),
      text: null,
    };

    let entryExists = false;

    let updatedEntries = entries.map((existingEntry) => {
      if (
        existingEntry.day === entry.day &&
        existingEntry.month === entry.month &&
        existingEntry.year === entry.year
      ) {
        entryExists = true;
        return { ...existingEntry, text: entry.text };
      }
      return existingEntry;
    });

    if (!entryExists) {
      updatedEntries.push(entry);
    }

    setEntries(updatedEntries);
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
        {arrayDays
          .filter((day) => {
            return validate(
              `${chosenYear}-${
                realMonth < 10
                  ? `0${realMonth}`
                  : realMonth >= 10
                  ? `${realMonth}`
                  : ""
              }-${day.day}`
            );
          })
          .map((day) => {
            return (
              <div
                onClick={handleChosenDay}
                className="card"
                key={day.id}
                id={
                  chosenMonth[monthCounter] === chosenMonth[currentMonth] &&
                  chosenYear === currentYear &&
                  Number(day.day) === currentDay
                    ? "highlight"
                    : null
                }
              >
                {entries.some(
                  (object) =>
                    object.day === Number(day.day) &&
                    object.month === chosenMonth[monthCounter] &&
                    object.year === Number(chosenYear) &&
                    object.text !== null
                )
                  ? envelope
                  : null}
                {day.day}
              </div>
            );
          })}
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setShowEntry(e.target.value)}
          value={showEntry}
        ></textarea>
        <div id="btns">
          <button id="submitBtn">Submit</button>
          {showEntry ? (
            <button id="deleteBtn" type="button" onClick={handleDelete}>
              Delete Entry
            </button>
          ) : null}
        </div>
      </form>
    </main>
  );
}
