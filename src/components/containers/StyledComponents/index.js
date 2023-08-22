import styled from "styled-components";

export const CellWrapper = styled.div`
  min-width: 140px;
  min-height: ${(props) => (props.isHeader ? 24 : 94)}px;
  background-color: ${(props) => (props.isWeekend ? "#272829" : "#1e1f21")};
  color: ${(props) => (props.isSelectedMonth ? "#dddddd" : "#555759")};
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  justify-content: flex-end;
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;
export const ShadowWrapper = styled("div")`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  border-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px #888;
`;

export const FormPositionWrapper = styled("div")`
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

export const FormWrapper = styled(ShadowWrapper)`
  width: 320px;
  // height: 300px;
  background-color: #1e1f21;
  color: #dddddd;
  box-shadow: unset;
`;
export const EventTitle = styled("input")`
  padding: 8px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
`;
export const EventBody = styled("textarea")`
  padding: 8px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
  risize: none;
  height: 60px;
`;

export const ButtonsWrapper = styled("div")`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonWrapper = styled("button")`
  color: ${(props) => (props.danger ? "#f00" : "#27282A")};
  border: 1px solid ${(props) => (props.danger ? "#f00" : "#27282A")};
  border-radius: 2px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 2px;
  }
`;

export const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
`;

export const CurrentDay = styled("div")`
  height: 100%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowDayWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

export const EventListWrapper = styled("ul")`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const EventListItemWrapper = styled("li")`
  padding-left: 2px;
  padding-right: 2px;
  margin-bottom: 2px;
  display: flex;
`;

export const EventItemWrapper = styled("button")`
  position: relative;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 114px;
  border: unset;
  color: #dddddd;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-align: left;
  background-color: #5d5f63;
  border: 1px solid #5d5f63;
  border-radius: 2px;
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props) => (props.isHeader ? "#1e1f21" : "#4d4c4d")};
  ${(props) => props.isHeader && "border-bottom: 1px solid #4d4c4d"}
`;

export const DivWrapperTitle = styled("div")`
  background-color: #2a2b2d;
  height: 36px;
`;

export const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background-color: #1e1f21;
  color: #dcdddd;
  padding: 16px;
  position: relative;
`;

export const TextWrapper = styled("span")`
  font-size: 32px;
`;

export const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
  margin-left: 8px;
`;

export const ButtonsWrapperMonitor = styled("div")`
  display: flex;
  align-items: center;
`;

export const ButtonsCenterWrapper = styled(ButtonsWrapperMonitor)`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const ButtonWrapperMonitor = styled("button")`
  border: unset;
  background-color: ${(props) => (props.unPressed ? "#27282A" : "#565759")};
  border: 1px solid #565759;
  height: 20px;
  border-radius: 4px;
  color: ${(props) => (props.unPressed ? "#a4a6a9" : "#E6E6E6")};
  outline: unset;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 2px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TodayButton = styled(ButtonWrapperMonitor)`
padding-right: 16px;
padding-left: 16px:
font-weight: bold;

`;
