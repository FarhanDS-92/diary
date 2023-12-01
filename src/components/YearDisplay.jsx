"use client";

export default function YearDisplay({ chosenYear, setChosenYear }) {
  // both functions are just + or - the year, at some point the year will turn to a string -- this is because on load up the initial highlighted day will have an id being dynamically rendered through a turnery whereby one of the conditions checks the year strictly -- so by changing the year to a string it will not have the id that highlights the current date anymore
  // this is updating state for year as well
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
    // rendered year with on click event
    <div id="year">
      <button onClick={handlePrevYear}>◀</button>
      <p>{chosenYear}</p>
      <button onClick={handleNextYear}>▶</button>
    </div>
  );
}
