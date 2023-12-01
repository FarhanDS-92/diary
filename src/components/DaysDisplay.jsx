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
  // this function is set to every div of day that is rendered from the daysArray, so on click event, also updating state to track the day chosen
  function handleChosenDay(e) {
    // by setting the year to a string we stop the id highlight on the current date, as its dynamically changed through a turnery checking the day, month and year strictly --- so by changing it to a string it won't be highlight except for the day the user clicked on
    setChosenYear(chosenYear.toString());

    // by clicking on a day, the text area display is immediately emptied out
    setShowEntry("");

    // this is to check initially when some day is clicked --- once it is --- it will always loop through the parent container which contains all the days and check which has the selected-day class and remove it -- but also change the one that the user choose in order for that to be highlighted
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

    // variable created to manipulate and check the textContent of the day that is clicked, as the text content will be a string of a number, otherwise a string also containing the envelope which takes up 2 indexes in a string, hence sliced at 2
    let thatDay = "";

    // if statement to update the chosenDay which is kept track to know which day was clicked on, if statement is used to check if textContent contains envelope and thereby needs to be sliced otherwise just changed to a number
    if (e.target.textContent.includes("💌")) {
      thatDay = e.target.textContent.slice(2);
      console.log(thatDay);
      setChosenDay(Number(thatDay));
    } else {
      setChosenDay(Number(e.target.textContent));
    }

    // this is a for loop to check the state of entries, an array of objects containing the entries of the user, each object has a day,month,year and sometimes text -- reason why is bcz on the form component the text will be erased completely if the user press delete entry button --- when the entries does contain the chosen day month and year and showEntry state is updated --- to update the value of the text area
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
    // filtering out arrayDays by using the npm validate -- which validates if the particular date is a valid date---thanks to this we can incorporate leap years, months with 30 days and 31 days --- by default arrayDays has 31days --- after which we map it out ---- has the on click event as explained with function --- also id is dynamically rendered on load up to show the real time date --- it also dynamically renders the envelope by checking if the entries array of objects contain the chosen year month and day
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
