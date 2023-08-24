import React from "react";
import { DISPLAY_MODE_MONTH, DISPLAY_MODE_DAY } from "../../helpers/constants";

import { ButtonWrapper, ButtonsCenterWrapper, ButtonsWrapper, DivWrapper, TextWrapper, TitleWrapper, TodayButton } from "../../containers/StyledMonitor";

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
        <ButtonWrapper
          unPressed={displayMode === DISPLAY_MODE_MONTH}
          onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}
        >
          Month
        </ButtonWrapper>
        <ButtonWrapper
          unPressed={displayMode === DISPLAY_MODE_DAY}
          onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}
        >
          Day
        </ButtonWrapper>
      </ButtonsCenterWrapper>
      <ButtonsWrapper>
        <ButtonWrapper onClick={handlePrev}>&lt;</ButtonWrapper>
        <TodayButton onClick={handleToday}>Today</TodayButton>
        <ButtonWrapper onClick={handleNext}>&gt;</ButtonWrapper>
      </ButtonsWrapper>
    </DivWrapper>
  );
};

export { Monitor };
