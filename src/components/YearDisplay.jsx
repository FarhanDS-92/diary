"use client";

export default function YearDisplay({ chosenYear, setChosenYear }) {
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

  return (
    <div id="year">
      <button onClick={handlePrevYear}>◀</button>
      <p>{chosenYear}</p>
      <button onClick={handleNextYear}>▶</button>
    </div>
  );
}
