import React from "react";
import moment from "moment";
import {
  isDayContainCurrentEvent,
  isDayContainCurrentTimeStamp,
} from "../../helpers";

import {
  DayShowWrapper,
  EventsListWrapper,
  EventFormWrapper,
  NoEventMsg,
  ScaleWrapper,
  ScaleCellWrapper,
  ScaleCellTimeWrapper,
  ScaleCellEventWrapper,
  EventItemButton,
  SelectEventTimeWrapper,
  ListOfHours,
  PositionRelative,
  HoursButton,
  ButtonsWrapper,
  ButtonWrapper,
  EventBody,
  EventTitle,
  RedLine,
} from "../../containers/StyledDayShowComponents";
import { ITEMS_PER_DAY } from "../../helpers/constants";

const DayShowComponents = ({
  events,
  today,
  selectedEvent,
  method,
  handleChangeEvent,
  handleCancelButton,
  handleEventFetch,
  handleRemoveEvent,
  handleOpenForm,
}) => {
  const [showTimePicker, setShowTimePicker] = React.useState(false);
  const [, setCounter] = React.useState(0);

  const eventList = events.filter((event) =>
    isDayContainCurrentEvent(event, today)
  );

  const cells = [...new Array(ITEMS_PER_DAY)].map((_, i) => {
    const temp = [];
    eventList.forEach((event) => {
      // event.date -> '1661295600' -> moment -> timestamp -> H  ? -> 0
      if (+moment.unix(+event.date).format("H") === i) {
        temp.push(event);
      }
    });
    return temp;
  });

  const setTimeForEvent = (i) => {
    setShowTimePicker(false);
    const time = moment.unix(+selectedEvent.date).hour(i).format("X");
    handleChangeEvent(time, "date");
  };

  const getRedLinePosition = () =>
    ((moment().format("X") - today.format("X")) / 86400) * 100;

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <DayShowWrapper>
      <EventsListWrapper>
        <ScaleWrapper>
          {isDayContainCurrentTimeStamp(moment().format("X"), today) ? (
            <RedLine position={getRedLinePosition()} />
          ) : null}

          {cells.map((eventsList, i) => (
            <ScaleCellWrapper>
              <ScaleCellTimeWrapper>
                {i ? <>{`${i}`.padStart(2, "0")}:00</> : null}
              </ScaleCellTimeWrapper>
              <ScaleCellEventWrapper>
                {eventsList.map((event) => (
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
              value={selectedEvent.title}
              onChange={(e) => handleChangeEvent(e.target.value, "title")}
              placeholder="Title"
            />

            <SelectEventTimeWrapper>
              <PositionRelative>
                <button>
                  {moment.unix(+selectedEvent.date).format("dddd, D, MMMM")}
                </button>
              </PositionRelative>

              <PositionRelative>
                <button
                  onClick={() => setShowTimePicker((prevState) => !prevState)}
                >
                  {moment.unix(+selectedEvent.date).format("HH:mm")}
                </button>

                {showTimePicker ? (
                  <ListOfHours>
                    {[...new Array(ITEMS_PER_DAY)].map((_, i) => (
                      <li>
                        <HoursButton onClick={() => setTimeForEvent(i)}>
                          {i ? <>{`${i}`.padStart(2, "0")}:00</> : null}
                        </HoursButton>
                      </li>
                    ))}
                  </ListOfHours>
                ) : null}
              </PositionRelative>
            </SelectEventTimeWrapper>

            <EventBody
              value={selectedEvent.description}
              onChange={(e) => handleChangeEvent(e.target.value, "description")}
              placeholder="Description"
            />
            <ButtonsWrapper>
              <ButtonWrapper onClick={handleCancelButton}>Cancel</ButtonWrapper>
              <ButtonWrapper onClick={handleEventFetch}>{method}</ButtonWrapper>
              {method === "Update" ? (
                <ButtonWrapper danger onClick={handleRemoveEvent}>
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
};
export { DayShowComponents };
