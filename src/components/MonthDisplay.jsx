"use client";

export default function MonthDisplay({
  monthCounter,
  setMonthCounter,
  realMonth,
  setRealMonth,
  chosenMonth,
}) {
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
