"use client";

export default function MonthDisplay({
  monthCounter,
  setMonthCounter,
  realMonth,
  setRealMonth,
  chosenMonth,
}) {
  // as with both functions, did a minus or plus, setting the MonthCounter (valued at 0-11) and Real Month (valued at 1-12) in order to either use for displaying the month, or used to validate the date - this is updating state for the month also to keep track
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

  return (
    // on Click event and thereby dynamically updating state with function, className and disabled are in a turnery using a state so that they both are also dynamically rendered where by we cannot press the button anymore if reached a certain condition
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
  );
}
