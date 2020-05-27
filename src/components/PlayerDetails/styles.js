import styled from "styled-components";

export const PlayerDetailsContainer = styled.div``;

export const PlayerImageRounded = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 100%;
`;

export const PlayerImageRoundedSmaller = styled(PlayerImageRounded)`
  width: 90px;
  height: 90px;
  filter: grayscale(100%);
`;

export const PlayerName = styled.p`
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
`;
