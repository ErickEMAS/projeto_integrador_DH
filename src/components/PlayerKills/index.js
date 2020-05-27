import React from "react";

import {
  KillsContainer,
  KillsTitle,
  KillsCount,
  KillsTextGeneral,
  KillsStatsContainer,
} from "./styles";

import skull from "../../assets/images/skull.png";
// import knife from "../../assets/images/knife.png";
// import bullet from "../../assets/images/bullet.png";

export default function PlayerKills({ killsData }) {
  return (
    <KillsContainer>
      <img src={skull} alt="Skull icon" />
      <KillsTitle>Kills</KillsTitle>
      {killsData.length ? (
        killsData.map((item, index) => {
          return (
            <div key={index}>
              <KillsCount>{item.totalKills}</KillsCount>
              {item.weaponsKills.length
                ? item.weaponsKills.map((weapon, idx) => {
                    if (weapon.kills) {
                      return (
                        <KillsStatsContainer key={idx}>
                          <img
                            src={`${weapon.name}.png`}
                            alt={`${weapon.name}icon`}
                          />
                          <KillsTextGeneral>
                            {weapon.kills + " " + weapon.name}
                          </KillsTextGeneral>
                        </KillsStatsContainer>
                      );
                    }
                  })
                : ""}
            </div>
          );
        })
      ) : (
        <>
          <KillsCount>{killsData.totalKills}</KillsCount>
          {killsData.weaponsKills.length
            ? killsData.weaponsKills.map((weapon, index) => {
                if (weapon.kills) {
                  return (
                    <KillsStatsContainer key={index}>
                      <img
                        src={`${weapon.name}.png`}
                        alt={`${weapon.name}icon`}
                      />
                      <KillsTextGeneral>
                        {weapon.kills + " " + weapon.name}
                      </KillsTextGeneral>
                    </KillsStatsContainer>
                  );
                }
              })
            : ""}
        </>
      )}
    </KillsContainer>
  );
}
