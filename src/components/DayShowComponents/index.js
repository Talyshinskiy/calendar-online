import React from "react";
import moment, { unix } from "moment";

import { isDayContainCurrentEvent } from "../../helpers";
import {
  ButtonWrapper,
  ButtonsWrapper,
  DayShowWrapper,
  EventBody,
  EventFormWrapper,
  EventItemButton,
  EventItemWrapper,
  EventListItemWrapper,
  EventListWrapper,
  EventTitle,
  EventsListWrapper,
  NoEventMsg,
  ScaleCellEventWrapper,
  ScaleCellTimeWrapper,
  ScaleCellWrapper,
  ScaleWrapper,
} from "../containers/StyledComponents";
import { ITEMS_PER_DAY } from "../../helpers/constants";

function DayShowComponents({
  events,
  today,
  selectedEvent,
  handleChangeEvent,
  handleCancelButton,
  handleEventFetch,
  handleRemoveRvent,
  method,
  handleOpenForm,
}) {
  const eventList = events.filter((event) =>
    isDayContainCurrentEvent(event, today)
  );

  const cells = [...new Array(ITEMS_PER_DAY)].map((_, i) => {
    const temp = [];
    eventList.forEach((event) => {
      if (+moment.unix(+event.date).format("H") === i) {
        temp.push(event);
      }
    });
    return temp;
  });

  return (
    <DayShowWrapper>
      <EventsListWrapper>
        {/* <EventListWrapper>
          {eventList.map((event) => (
            <EventListItemWrapper key={event.id}>
              <EventItemWrapper onClick={() => handleOpenForm("Update", event)}>
                {event.title}
              </EventItemWrapper>
            </EventListItemWrapper>
          ))}
        </EventListWrapper> */}
        <ScaleWrapper>
          {cells.map((eventList, i) => (
            <ScaleCellWrapper>
              <ScaleCellTimeWrapper>
                {i ? <>{`${i}`.padStart(2, "0")}:00</> : null}
              </ScaleCellTimeWrapper>
              <ScaleCellEventWrapper>
                {eventList.map((event) => (
                  <EventItemButton
                    onClick={() => handleOpenForm("Update", event)}
                  >
                    {event.title}
                  </EventItemButton>
                ))}
              </ScaleCellEventWrapper>
            </ScaleCellWrapper>
          ))}
        </ScaleWrapper>
      </EventsListWrapper>

      <EventFormWrapper>
        {selectedEvent ? (
          <div>
            <EventTitle
              onChange={(e) => handleChangeEvent(e.target.value, "title")}
              value={selectedEvent.title}
              placeholder="Title"
            />
            <EventBody
              onChange={(e) => handleChangeEvent(e.target.value, "description")}
              value={selectedEvent.description}
              placeholder="Description"
            />
            <ButtonsWrapper>
              <ButtonWrapper onClick={handleCancelButton}>Cancel</ButtonWrapper>
              <ButtonWrapper onClick={handleEventFetch}>{method}</ButtonWrapper>
              {method === "Update" ? (
                <ButtonWrapper danger onClick={handleRemoveRvent}>
                  Remove
                </ButtonWrapper>
              ) : null}
            </ButtonsWrapper>
          </div>
        ) : (
          <>
            <div>
              <button onClick={() => handleOpenForm("Create", null, today)}>
                Create new event
              </button>
            </div>
            <NoEventMsg>No event selected</NoEventMsg>
          </>
        )}
      </EventFormWrapper>
    </DayShowWrapper>
  );
}

export { DayShowComponents };
