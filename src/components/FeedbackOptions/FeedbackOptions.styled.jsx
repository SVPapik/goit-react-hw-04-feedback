import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

// export const ButtonListItem = styled.li``;
export const Button = styled.button`
  font-size: 14px;
  padding: 6px;
  text-transform: capitalize;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: rgba(255, 252, 252, 0.911) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    transform: scale(1.2);
  }
`;
