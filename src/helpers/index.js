import moment from "moment";
export const isCurrentDay = (day) => moment().isSame(day, "day");
export const isSelectedMonth = (day, today) => today.isSame(day, "month");

export const isDayContainCurrentTimeStamp = (a, b) =>
  a >= b.startOf("day").format("X") && a <= b.clone().endOf("day").format("X");

export const isDayContainCurrentEvent = (event, dayItem) =>
  isDayContainCurrentTimeStamp(event.date, dayItem);
