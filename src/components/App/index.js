import React from "react";
import moment from "moment";
import { Title } from "../Title";
import { CalendarGrid } from "../CalendarGrid";
import { Monitor } from "../Monitor";
import {
  ButtonWrapper,
  ButtonsWrapper,
  EventBody,
  EventTitle,
  FormPositionWrapper,
  FormWrapper,
  ShadowWrapper,
} from "../containers/StyledComponents";

const url = "http://localhost:4000";
const totalDays = 42;
const defaultEvent = {
  title: "",
  description: "",
  date: moment().format("X"),
};

function App() {
  const [today, setToday] = React.useState(moment());
  const [isShowForm, setShowForm] = React.useState(false);
  const [method, setMethod] = React.useState(null);
  const [event, setEvent] = React.useState(null);

  const [events, setEvents] = React.useState([]);

  moment.updateLocale("en", { week: { dow: 1 } });
  // const today = moment();

  const startDay = today.clone().startOf("month").startOf("week");

  const startDateQuery = startDay.clone().format("X");
  const endDateQuery = startDay.clone().add(totalDays, "days").format("x");

  const handlePrev = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));

  const handleToday = () => setToday(moment());

  const handleNext = () => setToday((prev) => prev.clone().add(1, "month"));

  React.useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
      .then((res) => res.json())
      .then((res) => setEvents(res));
  }, [today]);

  const handleOpenForm = (methodName, eventForUpdate, dayItem) => {
    setShowForm(true);
    setEvent(eventForUpdate || { ...defaultEvent, date: dayItem.format("X") });
    setMethod(methodName);
  };

  const handleCancelButton = () => {
    setShowForm(false);
    setEvent(null);
  };

  const handleChangeEvent = (text, field) => {
    setEvent((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  const handleEventFetch = () => {
    const fetchUrl =
      method === "Update" ? `${url}/events/${event.id}` : `${url}/events`;
    const httpMethod = method === "Update" ? "PATCH" : "POST";

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (method === "Update") {
          setEvents((prevState) =>
            prevState.map((eventEl) => (eventEl.id === res.id ? res : eventEl))
          );
        } else {
          setEvents((prevState) => [...prevState, res]);
        }

        handleCancelButton();
      });
  };

  const handleRemoveRvent = () => {
    const fetchUrl = `${url}/events/${event.id}`;
    const httpMethod = "DELETE";

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setEvents((prevState) =>
          prevState.filter((eventEl) => eventEl.id !== event.id)
        );
        handleCancelButton();
      });
  };

  return (
    <>
      {isShowForm ? (
        <FormPositionWrapper onClick={handleCancelButton}>
          <FormWrapper onClick={(e) => e.stopPropagation()}>
            <EventTitle
              onChange={(e) => handleChangeEvent(e.target.value, "title")}
              value={event.title}
              placeholder="Title"
            />
            <EventBody
              onChange={(e) => handleChangeEvent(e.target.value, "description")}
              value={event.description}
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
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
      <ShadowWrapper>
        <Title />
        <Monitor
          today={today}
          handlePrev={handlePrev}
          handleToday={handleToday}
          handleNext={handleNext}
        />
        <CalendarGrid
          startDay={startDay}
          today={today}
          totalDays={totalDays}
          events={events}
          handleOpenForm={handleOpenForm}
        />
      </ShadowWrapper>
    </>
  );
}

export default App;
