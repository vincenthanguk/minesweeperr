import styled from '@emotion/styled';

export interface GameNameProps {
  /**
   * Test inside the header
   */
  children: string;
}

export const GameName = styled.h1<GameNameProps>`
  font-size: 2em;
`;
