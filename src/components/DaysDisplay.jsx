"use client";

export default function DaysDisplay({
  arrayDays,
  chosenYear,
  setChosenYear,
  setShowEntry,
  realMonth,
  chosenMonth,
  monthCounter,
  currentMonth,
  currentYear,
  currentDay,
  entries,
  envelope,
  clickedOn,
  setClickedOn,
  validate,
  setChosenDay,
}) {
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

  return (
    <div id="days-container">
      {arrayDays
        .filter((day) =>
          validate(
            `${chosenYear}-${
              realMonth < 10
                ? `0${realMonth}`
                : realMonth >= 10
                ? `${realMonth}`
                : ""
            }-${day.day}`
          )
        )
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
  );
}
