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
