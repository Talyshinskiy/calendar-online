import React from "react";
import moment from "moment";
import { Title } from "../Title";
import { CalendarGrid } from "../CalendarGrid";
import { Monitor } from "../Monitor";
import { styled } from "styled-components";

const ShadowWrapper = styled("div")`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  border-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px #888;
`;

const FormPositionWrapper = styled("div")`
  position: absolute;
  z-index: 100px;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled(ShadowWrapper)`
  width: 200px;
  // height: 300px;
  background-color: #1e1f21;
  color: #dddddd;
  box-shadow: unset;
`;
const EventTitle = styled("input")`
  padding: 4px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
`;
const EventBody = styled("input")`
  padding: 4px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

const ButtonsWrapper = styled("div")`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;

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

  const handleOpenForm = (methodName, eventForUpdate) => {
    setShowForm(true);
    setEvent(eventForUpdate || defaultEvent);
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

  return (
    <>
      {isShowForm ? (
        <FormPositionWrapper onClick={handleCancelButton}>
          <FormWrapper onClick={(e) => e.stopPropagation()}>
            <EventTitle
              onChange={(e) => handleChangeEvent(e.target.value, "title")}
              value={event.title}
            />
            <EventBody
              onChange={(e) => handleChangeEvent(e.target.value, "description")}
              value={event.description}
            />
            <ButtonsWrapper>
              <button onClick={handleCancelButton}>Cancel</button>
              <button>{method}</button>
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
