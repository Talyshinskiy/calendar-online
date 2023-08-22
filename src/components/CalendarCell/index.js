import React from "react";
import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  EventItemWrapper,
  EventListItemWrapper,
  EventListWrapper,
  RowInCell,
  ShowDayWrapper,
} from "../containers/StyledComponents";
import { isCurrentDay, isSelectedMonth } from "../../helpers";

const CalendarCell = ({ dayItem, today, handleOpenForm, events }) => {
  return (
    <>
      <CellWrapper
        key={dayItem.unix()}
        isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        isSelectedMonth={isSelectedMonth(dayItem, today)}
      >
        <RowInCell>
          <ShowDayWrapper>
            <DayWrapper onClick={() => handleOpenForm("Create", null, dayItem)}>
              {isCurrentDay(dayItem) ? (
                <CurrentDay>{dayItem.format("D")}</CurrentDay>
              ) : (
                dayItem.format("D")
              )}
            </DayWrapper>
          </ShowDayWrapper>
          <EventListWrapper>
            {events.slice(0, 2).map((event) => (
              <EventListItemWrapper key={event.id}>
                <EventItemWrapper
                  onClick={() => handleOpenForm("Update", event)}
                >
                  {event.title}
                </EventItemWrapper>
              </EventListItemWrapper>
            ))}
            {events.length > 2 ? (
              <EventListItemWrapper key="showMore">
                <EventItemWrapper>Show more...</EventItemWrapper>
              </EventListItemWrapper>
            ) : null}
          </EventListWrapper>
        </RowInCell>
      </CellWrapper>
    </>
  );
};
export { CalendarCell };
