import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GREY_1, WHITE, GREY_4, DARK_PURPLE, BACKGROUND_PURPLE } from 'styles/colors';

interface DayProps {
  selected?: boolean;
  isToday?: boolean;
}

export const Wrapper = styled.div`
  width: 82.7vw;
  max-width: 590px;
  margin: auto;
`;
export const Month = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  color: ${GREY_1};

  span {
    padding: 0 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
`;

export const Week = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vw;
`;
export const Day = styled.button(
  ({ selected, isToday }: DayProps) => css`
    box-sizing: border-box;
    color: ${selected ? WHITE : GREY_1};
    font-weight: ${selected ? 700 : 400};
    background: ${isToday && BACKGROUND_PURPLE};
    background: ${selected && DARK_PURPLE};
    font-size: 14px;
    line-height: 19px;
    width: 8.54vw;
    max-width: 80px;
    max-height: 80px;
    height: 8.54vw;
    border-radius: 50%;

    &:disabled {
      color: ${GREY_4};
    }
  `,
);
