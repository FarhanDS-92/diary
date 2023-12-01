"use client";
import validator from "is-my-date-valid";
import { useState } from "react";
import days from "@/lib/days.js";
import months from "@/lib/months.js";
import MonthDisplay from "@/components/MonthDisplay.jsx";
import YearDisplay from "@/components/YearDisplay.jsx";
import DaysDisplay from "@/components/DaysDisplay.jsx";
import FormDisplay from "@/components/FormDisplay.jsx";

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

  return (
    <main>
      <h1>
        <em>Dear Diary</em>
      </h1>

      <MonthDisplay
        monthCounter={monthCounter}
        setMonthCounter={setMonthCounter}
        realMonth={realMonth}
        setRealMonth={setRealMonth}
        chosenMonth={chosenMonth}
      />

      <YearDisplay chosenYear={chosenYear} setChosenYear={setChosenYear} />

      <DaysDisplay
        arrayDays={arrayDays}
        chosenYear={chosenYear}
        setChosenYear={setChosenYear}
        setShowEntry={setShowEntry}
        realMonth={realMonth}
        chosenMonth={chosenMonth}
        monthCounter={monthCounter}
        currentMonth={currentMonth}
        currentYear={currentYear}
        currentDay={currentDay}
        entries={entries}
        envelope={envelope}
        clickedOn={clickedOn}
        setClickedOn={setClickedOn}
        validate={validate}
        setChosenDay={setChosenDay}
      />

      <FormDisplay
        showEntry={showEntry}
        setShowEntry={setShowEntry}
        entries={entries}
        setEntries={setEntries}
        chosenDay={chosenDay}
        chosenMonth={chosenMonth}
        monthCounter={monthCounter}
        chosenYear={chosenYear}
      />
    </main>
  );
}
