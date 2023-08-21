import React from "react";
import moment from "moment";
import { Title } from "../Title";
import { CalendarGrid } from "../CalendarGrid";
import { Monitor } from "../Monitor";
import { styled } from "styled-components";

const ShadowWrapper = styled.div`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  border-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px #888;
`;

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });
  // const today = moment();
  const [today, setToday] = React.useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  const handlePrev = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));

  const handleToday = () => setToday(moment());

  const handleNext = () => setToday((prev) => prev.clone().add(1, "month"));

  return (
    <div>
      <ShadowWrapper>
        <Title />
        <Monitor
          today={today}
          handlePrev={handlePrev}
          handleToday={handleToday}
          handleNext={handleNext}
        />
        <CalendarGrid startDay={startDay} today={today} />
      </ShadowWrapper>
    </div>
  );
}

export default App;
