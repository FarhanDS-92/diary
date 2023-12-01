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
  // state variables
  // array of objects storing 31 days
  const [arrayDays, setArrayDays] = useState(days);

  // chosen month, array of months stored in month.js
  const [chosenMonth, setChosenMonth] = useState(months);

  // chosen day, where the initial value will be set to current day
  const [chosenDay, setChosenDay] = useState(0);

  // month counter is number 0-11 to index through array, real month is actual 1-12 to be used on validate
  const [monthCounter, setMonthCounter] = useState(0);
  const [realMonth, setRealMonth] = useState(0);

  // chosen year, where initial value will be current year
  const [chosenYear, setChosenYear] = useState(0);

  // clickedOn state set to false, this is to track if the user finally clicks on a day, then sets the class in order to highlight, and from there on will always be true
  const [clickedOn, setClickedOn] = useState(false);

  // array of objects storing the entries from the user
  const [entries, setEntries] = useState([]);

  // entry to be displayed in the textarea
  const [showEntry, setShowEntry] = useState("");

  // just a state to have for the envelope
  const [envelope, setEnvelope] = useState("💌");

  // validate npm used, in order to validate the days, ie dayArray is filtered out with this
  const validate = validator({ format: "YYYY-MM-DD" });

  // in-built JS methods to get the current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // every day, month and year are set within and if statement to prevent infinite loop, and only set on load up
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

      {/* month component with props passed */}
      <MonthDisplay
        monthCounter={monthCounter}
        setMonthCounter={setMonthCounter}
        realMonth={realMonth}
        setRealMonth={setRealMonth}
        chosenMonth={chosenMonth}
      />

      {/* year component with props passed */}
      <YearDisplay chosenYear={chosenYear} setChosenYear={setChosenYear} />

      {/* days component with props passed */}
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

      {/* form component with props passed */}
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
