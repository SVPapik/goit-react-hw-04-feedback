import styled from 'styled-components';

export const StatItem = styled.li`
  text-align: center;
  font-size: 18px;
  filter: drop-shadow(2px 2px 2px black);
  &:nth-child(4) {
    margin-top: 8px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: overline;
    color: #f8f8b1;
  }
  &:nth-child(5) {
    margin-top: 8px;
    font-weight: bold;
    font-style: italic;
    text-decoration: underline;
    color: #f8f8b1;
  }
`;
