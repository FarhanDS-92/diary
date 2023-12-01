"use client";

export default function FormDisplay({
  showEntry,
  setShowEntry,
  entries,
  setEntries,
  chosenDay,
  chosenMonth,
  monthCounter,
  chosenYear,
}) {
  // prevent default to prevent refresh when submitted --- function essentially takes user entry in the textarea and stores it in the state array of objects called entries --- this object will contain the day month year and text --- this function also allows for user to edit the text entry that they have inputted before
  // I created a separate array first and manipulate and check that using a map and if statement --- whereby I check the entries array of object state --- ofc a separate variable is also made to be false --- that way if the entries array of object does not contain an entry for the chosen day month and year it just adds it as regular --- but if it does contain an existing object that matches with the chosen day month and year then the text will be edited
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

  // this uses the same logic as before except with delete the value in the key-value pair for text to null
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
    // delete button is conditionally rendered if the value of the text area is truthy
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
  );
}
