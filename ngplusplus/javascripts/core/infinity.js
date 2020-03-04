function getInfinitiedGain() {
  let infGain = 1;
  if (player.thisInfinityTime > 50 && player.achievements.includes("r87")) {
      infGain = 250;
  }
  player.timestudy.studies.includes(32) ? infGain *= Math.max(player.resets, 1) : infGain = infGain
  player.achievements.includes("r133") ? infGain *= Math.max(1, Math.floor(player.dilation.dilatedTime.pow(0.25).toNumber())) : infGain = infGain
  player.achievements.includes("r156") ? infGain *= Math.max(1, Math.floor(Math.log10(player.eternities/250)**0.8)) : infGain = infGain
  return infGain
}

function getAntimatterOnCrunch() {
function getInfinitiedGain() {
  let infGain = 1;
  if (player.thisInfinityTime > 50 && player.achievements.includes("r87")) {
      infGain = 250;
  }
  player.timestudy.studies.includes(32) ? infGain *= Math.max(player.resets, 1) : infGain = infGain
  player.achievements.includes("r133") ? infGain *= Math.max(1, Math.floor(player.dilation.dilatedTime.pow(0.25).toNumber())); : infGain = infGain
  player.achievements.includes("r156") ? infGain *= Math.max(1, Math.floor(Math.log10(player.eternities/250)**0.8)); : infGain = infGain
  return infGain
}
}