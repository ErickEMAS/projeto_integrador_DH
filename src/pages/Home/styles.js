import styled from "styled-components";

import fonts from "../../fonts";
import { colors } from "../../variables";

import alertIcon from "../../assets/images/alert-icon.png";

export const SeeYourStatisticsContainer = styled.div`
  position: relative;
  top: 30vw;
  padding: 0 20px;
`;

export const SeeYourStatisticsTitle = styled.p`
  margin: 0;
  color: ${colors.light};
  font-family: ${fonts.Roboto};
  font-size: 48px;
  font-weight: 900;
  text-align: left;
`;

export const SeeYourStatisticsDescription = styled.p`
  margin: 0;
  color: ${colors.light};
  font-family: ${fonts.Roboto};
  font-size: 16px;
`;

export const WarningContainer = styled.div`
  margin: 55px 0 20px;
`;

export const WarningTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 22px;
`;

export const WarningIcon = styled.img.attrs({
  src: alertIcon,
})``;

export const WarningText = styled.p`
  color: ${colors.yellow};
  font-family: ${fonts.Roboto};
  font-weight: 500;
  font-size: 11px;
  margin-left: 5px;
`;

export const WarningTextFeatured = styled(WarningText)`
  font-weight: bold;
  font-size: 12px;
`;
