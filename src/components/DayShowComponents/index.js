import React from "react";
import { isDayContainCurrentEvent } from "../../helpers";
import {
  DayShowWrapper,
  EventFormWrapper,
  EventItemWrapper,
  EventListItemWrapper,
  EventListWrapper,
  EventsListWrapper,
  NoEventMsg,
} from "../containers/StyledComponents";

function DayShowComponents({ events, today, selectedEvent, setEvent }) {
  const eventList = events.filter((event) =>
    isDayContainCurrentEvent(event, today)
  );
  return (
    <DayShowWrapper>
      <EventsListWrapper>
        <EventListWrapper>
          {eventList.map((event) => (
            <EventListItemWrapper key={event.id}>
              <EventItemWrapper onClick={() => setEvent(event)}>
                {event.title}
              </EventItemWrapper>
            </EventListItemWrapper>
          ))}
        </EventListWrapper>
      </EventsListWrapper>

      <EventFormWrapper>
        {selectedEvent ? (
          <div>
            <h3>{selectedEvent.title}</h3>
          </div>
        ) : (
          <NoEventMsg>No event selected</NoEventMsg>
        )}
      </EventFormWrapper>
    </DayShowWrapper>
  );
}

export { DayShowComponents };
