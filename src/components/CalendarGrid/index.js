import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: #ffffff;
`;

const CellWrapper = styled.div`
  min-width: 140px;
  min-height: 80px;
  background-color: ${(props) => (props.isWeekend ? "#272829" : "#1e1f21")};
  color: #dddcdd;
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: {props => props.justifyContent ? props.justifyContent: "flex-start"};
  justifyContent: flex-end;
  `;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = ({ startDay }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  // console.log("daysArray", daysArray);
  return (
    <GridWrapper>
      {daysArray.map((dayItem) => (
        <CellWrapper
          key={dayItem.format("DDMMYYYY")}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
        >
          <RowInCell>
            <DayWrapper>{dayItem.format("D")}</DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export { CalendarGrid };
