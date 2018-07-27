function getDilationMetaDimensionMultiplier () {
  return player.dilation.dilatedTime.div(1e40).pow(.1).plus(1);
}

function getMetaDimensionMultiplier (tier) {
  if (player.currentEternityChall === "eterc11") {
    return new Decimal(1);
  }
  let multiplier = Decimal.pow(2, player.meta[tier].tensBought).times(Decimal.pow(2, Math.max(0, player.meta.resets - tier + 1))).times(getDilationMetaDimensionMultiplier());
  //if (player.currentEternityChall == "eterc3" && tier > 4) return new Decimal(0)

  if (multiplier.lt(1)) multiplier = new Decimal(1)
  if (player.dilation.active) {
    multiplier = Decimal.pow(10, Math.pow(multiplier.log10(), 0.75))
    if (player.dilation.upgrades.includes(11)) {
      multiplier = Decimal.pow(10, Math.pow(multiplier.log10(), 1.05))
    }
  }

  return multiplier;
}

function getMetaDimensionDescription(tier) {

  let description = shortenDimensions(player.meta[tier].amount) + ' (' + player.meta[tier].bought + ')';
  if (tier === 8) description = Math.round(player.meta[tier].amount) + ' (' + player.meta[tier].bought + ')';

  if (tier < 8) {
      description += '  (+' + formatValue(player.options.notation, getMetaDimensionRateOfChange(tier), 2, 2) + '%/s)';
  }

  return description;
}

function getMetaDimensionRateOfChange(tier) {
  if (tier === 8) {
      return 0;
  }

  let toGain = getMetaDimensionProductionPerSecond(tier + 1);

  var current = player.meta[tier].amount.max(1);
  var change  = toGain.times(10).dividedBy(current);

  return change;
}


function canBuyMetaDimension(tier) {
    if (tier > player.meta.resets + 4) return false;
    if (tier > 1 && player.meta[tier - 1].amount.eq(0)) return false;
    return true;
}


function clearMetaDimensions () {
    for (i = 1; i <= 8; i++) {
        player.meta[i].amount = new Decimal(0);
        player.meta[i].bought = 0;
        player.meta[i].tensBought = 0;
        player.meta[i].cost = new Decimal(initCost[i]);
    }
}

function getMetaShiftRequirement () {
  return {
    tier: Math.min(8, player.meta.resets + 4),
    amount: Math.max(20, -40 + 15 * player.meta.resets)
  }
}

function metaBoost () {
    let req = getMetaShiftRequirement();
    if (player.meta[req.tier].amount.lt(req.amount)) {
        return false;
    }
    player.meta.antimatter = new Decimal(10);
    clearMetaDimensions();
    for (let i = 2; i <= 8; i++) {
      document.getElementById(i + "MetaRow").style.display = "none"
    }
    player.meta.resets++;
    return true;
}


function getMetaDimensionCostMultiplier(tier) {
    return costMults[tier];
}

function metaBuyOneDimension(tier) {
    var cost = player.meta[tier].cost;
    if (!canBuyMetaDimension(tier)) {
        return false;
    }
    if (!canAffordMetaDimension(cost)) {
        return false;
    }
    player.meta.antimatter = player.meta.antimatter.minus(cost);
    player.meta[tier].amount = player.meta[tier].amount.plus(1);
    player.meta[tier].bought++;
    if (player.meta[tier].bought === 10) {
      player.meta[tier].cost = player.meta[tier].cost.times(getMetaDimensionCostMultiplier(tier));
      player.meta[tier].bought = 0;
      player.meta[tier].tensBought++;
    }
    return true;
}

function getMetaMaxCost (tier) {
  return player.meta[tier].cost.times(10 - player.meta[tier].bought);
}

function metaBuyManyDimension(tier) {
    var cost = getMetaMaxCost(tier);
    if (!canBuyMetaDimension(tier)) {
        return false;
    }
    if (!canAffordMetaDimension(cost)) {
        return false;
    }
    player.meta.antimatter = player.meta.antimatter.minus(cost);
    player.meta[tier].amount = player.meta[tier].amount.plus(10 - player.meta[tier].bought);
    player.meta[tier].cost = player.meta[tier].cost.times(getMetaDimensionCostMultiplier(tier));
    player.meta[tier].bought = 0;
    player.meta[tier].tensBought++;
    return true;
}

function canAffordMetaDimension(cost) {
    return cost.lte(player.meta.antimatter);
}

for (let i = 1; i <= 8; i++) {
    document.getElementById("meta" + i).onclick = function () {
        metaBuyOneDimension(i);
    }
    document.getElementById("metaMax" + i).onclick = function () {
        metaBuyManyDimension(i);
    }
}

document.getElementById("metaMaxAll").onclick = function () {
    for (let i = 1; i <= 8; i++) {
      while (metaBuyManyDimension(i)) {};
    }
}

document.getElementById("metaSoftReset").onclick = function () {
    metaBoost();
}

function getMetaDimensionProductionPerSecond(tier) {
    return Decimal.floor(player.meta[tier].amount).times(getMetaDimensionMultiplier(tier));
}
