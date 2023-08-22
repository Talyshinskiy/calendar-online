import React from "react";
import { CalendarGridHeader } from "../CalendarGridHeader";
import { MonthDaysList } from "../MonthDaysList";
import { GridWrapper } from "../containers/StyledComponents";

const CalendarGrid = ({
  startDay,
  today,
  totalDays,
  events,
  handleOpenForm,
}) => {
  return (
    <>
      <GridWrapper isHeader>
        <CalendarGridHeader />
      </GridWrapper>
      <GridWrapper>
        <MonthDaysList
          totalDays={totalDays}
          handleOpenForm={handleOpenForm}
          events={events}
          startDay={startDay}
          today={today}
        />
      </GridWrapper>
    </>
  );
};

export { CalendarGrid };
