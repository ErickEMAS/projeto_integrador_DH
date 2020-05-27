import React from "react";

import {
  GraphicContainer,
  GraphicIcon,
  GraphicTitle,
  GraphicCount,
} from "../../styles";

import playerTarget from "../../assets/images/player-target.png";

export default function PlayerKD({
  accuracyPercentage,
  positiveColor,
  negativeColor,
}) {
  return (
    <GraphicContainer>
      <GraphicIcon src={playerTarget} alt="Player target icon" />
      <GraphicTitle>K/D</GraphicTitle>
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
        // accuracyPercentage={accuracyPercentage}
        // positiveColor={positiveColor}
        // negativeColor={negativeColor}
        >
          <p>{accuracyPercentage.toFixed(0)}%</p>
        </GraphicCount>
      )}
    </GraphicContainer>
  );
}
