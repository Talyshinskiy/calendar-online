import React from "react";
import { CalendarCell } from "../CalendarCell";
import { isDayContainCurrentEvent } from "../../helpers";
import { DISPLAY_MODE_DAY } from "../../helpers/constants";

const MonthDaysList = ({
  startDay,
  totalDays,
  events,
  handleOpenForm,
  today,
}) => {
  const day = startDay.clone().subtract(1, DISPLAY_MODE_DAY);
  const daysMap = [...Array(totalDays)].map(() =>
    day.add(1, DISPLAY_MODE_DAY).clone()
  );
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
