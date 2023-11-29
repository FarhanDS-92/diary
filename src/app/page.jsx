"use client";
import validator from "is-my-date-valid";
import { useState } from "react";

export default function Home() {
  const [presentDay, setPresentDay] = useState("");

  const currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  console.log(currentDate, currentDay, currentMonth, currentYear);

  return <main></main>;
}
