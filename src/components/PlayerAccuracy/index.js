import React from "react";

import {
  GraphicContainer,
  GraphicIcon,
  GraphicTitle,
  GraphicCount,
} from "../../styles";

import target from "../../assets/images/target.png";

export default function PlayerAccuracy({
  accuracyPercentage,
  positiveColor,
  negativeColor,
}) {
  return (
    <GraphicContainer>
      <GraphicIcon src={target} alt="Target icon" />
      <GraphicTitle>Precisão do tiro</GraphicTitle>
      {accuracyPercentage.length ? (
        accuracyPercentage.map((item, index) => {
          return (
            <GraphicCount key={index}>
              <p>{item.toFixed(0)}%</p>
            </GraphicCount>
          );
        })
      ) : (
        <GraphicCount
          accuracyPercentage={accuracyPercentage}
          positiveColor={positiveColor}
          negativeColor={negativeColor}
        >
          <p>{accuracyPercentage.toFixed(0)}%</p>
        </GraphicCount>
      )}
    </GraphicContainer>
  );
}
