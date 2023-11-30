export default function test() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  let presentDate = currentDate.toJSON().slice(0, 10);
  let todaysDate = currentDate.toLocaleDateString();

  console.log(
    currentDate,
    currentDay,
    currentMonth,
    currentYear,
    presentDate,
    todaysDate
  );

  return <div></div>;
}
