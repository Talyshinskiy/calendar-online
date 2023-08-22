import React from "react";
import { CalendarCell } from "../CalendarCell";
import { isDayContainCurrentEvent } from "../../helpers";

const MonthDaysList = ({
  startDay,
  totalDays,
  events,
  handleOpenForm,
  today,
}) => {
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  return (
    <>
      {daysMap.map((dayItem) => (
        <CalendarCell
          today={today}
          events={events.filter((event) =>
            isDayContainCurrentEvent(event, dayItem)
          )}
          handleOpenForm={handleOpenForm}
          dayItem={dayItem}
        />
      ))}
    </>
  );
};
export { MonthDaysList };
