import React from "react";
import { isDayContainCurrentEvent } from "../../helpers";
import {
  ButtonWrapper,
  ButtonsWrapper,
  DayShowWrapper,
  EventBody,
  EventFormWrapper,
  EventItemWrapper,
  EventListItemWrapper,
  EventListWrapper,
  EventTitle,
  EventsListWrapper,
  NoEventMsg,
} from "../containers/StyledComponents";

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
  return (
    <DayShowWrapper>
      <EventsListWrapper>
        <EventListWrapper>
          {eventList.map((event) => (
            <EventListItemWrapper key={event.id}>
              <EventItemWrapper onClick={() => handleOpenForm("Update", event)}>
                {event.title}
              </EventItemWrapper>
            </EventListItemWrapper>
          ))}
        </EventListWrapper>
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
