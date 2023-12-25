"use strict";
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const giveAwayDate = document.querySelector(".giveaway-date");

const monthArr = [
  "january",
  "febuary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const targetDay = new Date("1 jan 2024").getTime();

const targetDay2 = new Date("1 jan 2024 12:00:00");

const weekD = weekDays[targetDay2.getDate() - 1];

const month = monthArr[targetDay2.getMonth()];

const time = targetDay2.getTime() / 1000;

// rendering the date to the view
giveAwayDate.innerHTML = `Giveaway Ends On ${weekD}, ${targetDay2.getDate()} ${month} ${targetDay2.getFullYear()} ${targetDay2.getHours()}:${targetDay2.getMinutes()}0 AM`;

const timeout = setInterval(function () {
  const presentDay = new Date();

  const differnce = (targetDay - presentDay) / 1000;

  const day = Math.floor(differnce / 3600 / 24);
  const hour = Math.floor((differnce / 3600) % 24);
  const min = Math.floor((differnce / 60) % 60);
  const sec = Math.floor(differnce % 60);

  days.innerHTML = timeFormat(day);
  hours.innerHTML = timeFormat(hour);
  mins.innerHTML = timeFormat(min);
  secs.innerHTML = timeFormat(sec);
}, 1000);

const timeFormat = function (time) {
  return time < 10 ? `0${time}` : time;
};
