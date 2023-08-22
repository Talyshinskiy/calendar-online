import React from "react";
import {
  ButtonWrapperMonitor,
  ButtonsWrapperMonitor,
  DivWrapper,
  TextWrapper,
  TitleWrapper,
  TodayButton,
} from "../containers/StyledComponents";

const Monitor = ({ today, handlePrev, handleToday, handleNext }) => {
  return (
    <DivWrapper>
      <div>
        <TitleWrapper>{today.format("MMMM")}</TitleWrapper>
        <TextWrapper>{today.format("YYYY")}</TextWrapper>
      </div>
      <ButtonsWrapperMonitor>
        <ButtonWrapperMonitor onClick={handlePrev}>&lt;</ButtonWrapperMonitor>
        <TodayButton onClick={handleToday}>Today</TodayButton>
        <ButtonWrapperMonitor onClick={handleNext}>&gt;</ButtonWrapperMonitor>
      </ButtonsWrapperMonitor>
    </DivWrapper>
  );
};

export { Monitor };
