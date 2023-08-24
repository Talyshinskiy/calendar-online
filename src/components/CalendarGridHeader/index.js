import React from "react";
import { CellWrapper, RowInCell } from "../../containers/StyledCalendarGridHeader";
import moment from "moment";

function CalendarGridHeader() {
  return (
    <>
      {[...Array(7)].map((_, i) => (
        <CellWrapper isHeader isSelectedMonth key={i}>
          <RowInCell pr={1}>
            {moment()
              .day(i + 1)
              .format("ddd")}
          </RowInCell>
        </CellWrapper>
      ))}
    </>
  );
}

export { CalendarGridHeader };
