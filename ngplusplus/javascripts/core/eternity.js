function calculateEternitiedGain() {
let base = 1

return base
}

function updateEternityButton() {
if (currentEPmin.gt(EPminpeak) && player.infinityPoints.gte(Number.MAX_VALUE))
    EPminpeak = currentEPmin;
  document.getElementById("eternitybtn").innerHTML =
    player.eternities == 0
      ? "Other times await.. I need to become Eternal"
      : "<b>I need to become Eternal.</b><br>" +
        "Gain <b>" +
        shortenDimensions(gainedEternityPoints()) +
        "</b> Eternity points.<br>" +
        shortenDimensions(currentEPmin) +
        " EP/min<br>Peaked at " +
        shortenDimensions(EPminpeak) +
        " EP/min";
  if (gainedEternityPoints().gte(1e6)) {
    document.getElementById("eternitybtn").innerHTML =
      "Gain <b>" +
      shortenDimensions(gainedEternityPoints()) +
      "</b> Eternity points.<br>" +
      shortenDimensions(currentEPmin) +
      " EP/min<br>Peaked at " +
      shortenDimensions(EPminpeak) +
      " EP/min";
  } else if (gainedEternityPOints().gte(new Decimal("1e100000"))) {
    document.getElementById("eternitybtn").innerHTML =
      "Gain <b>" +
      shortenDimensions(gainedEternityPoints()) +
      "</b> Eternity points.<br>" +
      calculateEternitiedGain()
  }
  if (player.dilation.active)
    document.getElementById("eternitybtn").innerHTML =
      "Gain <b>" +
      shortenDimensions(gainedEternityPoints()) +
      "</b> Eternity points.<br>" +
      "+" +
      shortenDimensions(
        Math.max(0, getDilGain() - player.dilation.totalTachyonParticles)
      ) +
      " Tachyon particles.";
  if (player.currentEternityChall !== "")
    document.getElementById("eternitybtn").textContent =
      "Other challenges await.. I need to become Eternal";
}