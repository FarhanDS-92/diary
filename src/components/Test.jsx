// filter
// if (entries.length === 0) {
//   setEntries([...entries, entry]);
// } else if (entries.length > 0) {
//   for (let i = 0; i < entries.length; i++) {
//     if (
//       entries[i].day === entry.day &&
//       entries[i].month === entry.month &&
//       entries[i].year === entry.year
//     ) {
//       let changedEntry = { ...entries[i] };
//       changedEntry.text = entry.text;

//       let finalChangedEntry = entries.filter((diary) => {
//         return (
//           entries[i].day !== diary.day &&
//           entries[i].month !== diary.month &&
//           entries[i].year !== diary.year
//         );
//       });

//       console.log(finalChangedEntry);

//       setEntries(...finalChangedEntry, changedEntry);
//     } else {
//       setEntries([...entries, entry]);
//     }
//   }
// }
