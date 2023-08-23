import React from "react";
import { DISPLAY_MODE_MONTH, DISPLAY_MODE_DAY } from "../../helpers/constants";

import {
  ButtonWrapperMonitor,
  ButtonWrapperMonth,
  ButtonsCenterWrapper,
  ButtonsWrapperMonitor,
  DivWrapper,
  TextWrapper,
  TitleWrapper,
  TodayButton,
} from "../containers/StyledComponents";

const Monitor = ({
  today,
  handlePrev,
  handleToday,
  handleNext,
  setDisplayMode,
  displayMode,
}) => {
  return (
    <DivWrapper>
      <div>
        {displayMode === DISPLAY_MODE_DAY ? (
          <TextWrapper>{today.format("DD")}</TextWrapper>
        ) : null}
        <TitleWrapper>{today.format("MMMM")}</TitleWrapper>
        <TextWrapper>{today.format("YYYY")}</TextWrapper>
      </div>
      <ButtonsCenterWrapper>
        <ButtonWrapperMonth
          unPressed={displayMode === DISPLAY_MODE_MONTH}
          onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}
        >
          Month
        </ButtonWrapperMonth>
        <ButtonWrapperMonth
          unPressed={displayMode === DISPLAY_MODE_DAY}
          onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}
        >
          Day
        </ButtonWrapperMonth>
      </ButtonsCenterWrapper>
      <ButtonsWrapperMonitor>
        <ButtonWrapperMonitor onClick={handlePrev}>&lt;</ButtonWrapperMonitor>
        <TodayButton onClick={handleToday}>Today</TodayButton>
        <ButtonWrapperMonitor onClick={handleNext}>&gt;</ButtonWrapperMonitor>
      </ButtonsWrapperMonitor>
    </DivWrapper>
  );
};

export { Monitor };
