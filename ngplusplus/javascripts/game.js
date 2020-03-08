// ok, this code is absolutely very messy and we'll need to separate it into parts, and also simplify some parts of the code.
var gameLoopIntervalId;
var Marathon = 0;
var Marathon2 = 0;
var auto = false;
var autoS = true;
var shiftDown = false;
var controlDown = false;
var justImported = false;
var saved = 0;
var painTimer = 0;
var keySequence = 0;
var failureCount = 0;
var implosionCheck = 0;
var TIER_NAMES = [
  null,
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eight"
];
var DISPLAY_NAMES = [
  null,
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth"
];
var forceHardReset = false;
var player = {
  ngPlus: 0,
  money: new Decimal(10),
  tickSpeedCost: new Decimal(1000),
  tickspeed: new Decimal(1000),
  firstCost: new Decimal(10),
  secondCost: new Decimal(100),
  thirdCost: new Decimal(10000),
  fourthCost: new Decimal(1000000),
  fifthCost: new Decimal(1e9),
  sixthCost: new Decimal(1e13),
  seventhCost: new Decimal(1e18),
  eightCost: new Decimal(1e24),
  firstAmount: new Decimal(0),
  secondAmount: new Decimal(0),
  thirdAmount: new Decimal(0),
  fourthAmount: new Decimal(0),
  firstBought: 0,
  secondBought: 0,
  thirdBought: 0,
  fourthBought: 0,
  fifthAmount: new Decimal(0),
  sixthAmount: new Decimal(0),
  seventhAmount: new Decimal(0),
  eightAmount: new Decimal(0),
  fifthBought: 0,
  sixthBought: 0,
  seventhBought: 0,
  eightBought: 0,
  firstPow: new Decimal(1),
  secondPow: new Decimal(1),
  thirdPow: new Decimal(1),
  fourthPow: new Decimal(1),
  fifthPow: new Decimal(1),
  sixthPow: new Decimal(1),
  seventhPow: new Decimal(1),
  eightPow: new Decimal(1),
  sacrificed: new Decimal(0),
  achievements: [],
  infinityUpgrades: [],
  challenges: [],
  currentChallenge: "",
  infinityPoints: new Decimal(0),
  infinitied: 0,
  infinitiedBank: 0,
  totalTimePlayed: 0,
  bestInfinityTime: 9999999999,
  thisInfinityTime: 0,
  resets: 0,
  galaxies: 0,
  tickDecrease: 0.9,
  totalmoney: new Decimal(0),
  achPow: 1,
  newsArray: [],
  interval: null,
  lastUpdate: new Date().getTime(),
  autobuyers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  costMultipliers: [
    new Decimal(1e3),
    new Decimal(1e4),
    new Decimal(1e5),
    new Decimal(1e6),
    new Decimal(1e8),
    new Decimal(1e10),
    new Decimal(1e12),
    new Decimal(1e15)
  ],
  tickspeedMultiplier: new Decimal(10),
  chall2Pow: 1,
  chall3Pow: new Decimal(0.01),
  matter: new Decimal(0),
  chall11Pow: new Decimal(1),
  partInfinityPoint: 0,
  partInfinitied: 0,
  break: false,
  challengeTimes: [
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31
  ],
  infchallengeTimes: [
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31,
    600 * 60 * 24 * 31
  ],
  lastTenRuns: [
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1]
  ],
  lastTenEternities: [
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1],
    [600 * 60 * 24 * 31, 1]
  ],
  infMult: new Decimal(1),
  infMultCost: new Decimal(10),
  tickSpeedMultDecrease: 10,
  tickSpeedMultDecreaseCost: 3e6,
  dimensionMultDecrease: 10,
  dimensionMultDecreaseCost: 1e8,
  overXGalaxies: 10,
  version: 15.7,
  infDimensionsUnlocked: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ],
  infinityPower: new Decimal(1),
  spreadingCancer: 0,
  postChallUnlocked: 0,
  postC4Tier: 0,
  postC3Reward: new Decimal(1),
  eternityPoints: new Decimal(0),
  eternities: 0,
  thisEternity: 0,
  bestEternity: 9999999999,
  eternityUpgrades: [],
  epmult: new Decimal(1),
  epmultCost: new Decimal(500),
  infinityDimension1: {
    cost: new Decimal(1e8),
    amount: new Decimal(0),
    bought: 0,
    power: new Decimal(1),
    baseAmount: 0
  },
  infinityDimension2: {
    cost: new Decimal(1e9),
    amount: new Decimal(0),
    bought: 0,
    power: new Decimal(1),
    baseAmount: 0
  },
  infinityDimension3: {
    cost: new Decimal(1e10),
    amount: new Decimal(0),
    bought: 0,
    power: new Decimal(1),
    baseAmount: 0
  },
  infinityDimension4: {
    cost: new Decimal(1e20),
    amount: new Decimal(0),
    bought: 0,
    power: new Decimal(1),
    baseAmount: 0
  },
  infinityDimension5: {
    cost: new Decimal(1e140),
    amount: new Decimal(0),
    bought: 0,
    power: new Decimal(1),
    baseAmount: 0
  },
  infinityDimension6: {
    cost: new Decimal(1e200),
    amount: new Decimal(0),
    bought: 0,
    power: new Decimal(1),
    baseAmount: 0
  },
  infinityDimension7: {
    cost: new Decimal(1e250),
    amount: new Decimal(0),
    bought: 0,
    power: new Decimal(1),
    baseAmount: 0
  },
  infinityDimension8: {
    cost: new Decimal(1e280),
    amount: new Decimal(0),
    bought: 0,
    power: new Decimal(1),
    baseAmount: 0
  },
  infDimBuyers: [false, false, false, false, false, false, false, false],
  timeShards: new Decimal(0),
  tickThreshold: new Decimal(1),
  totalTickGained: 0,
  timeDimension1: {
    cost: new Decimal(1),
    amount: new Decimal(0),
    power: new Decimal(1),
    bought: 0
  },
  timeDimension2: {
    cost: new Decimal(5),
    amount: new Decimal(0),
    power: new Decimal(1),
    bought: 0
  },
  timeDimension3: {
    cost: new Decimal(100),
    amount: new Decimal(0),
    power: new Decimal(1),
    bought: 0
  },
  timeDimension4: {
    cost: new Decimal(1000),
    amount: new Decimal(0),
    power: new Decimal(1),
    bought: 0
  },
  timeDimension5: {
    cost: new Decimal("1e2350"),
    amount: new Decimal(0),
    power: new Decimal(1),
    bought: 0
  },
  timeDimension6: {
    cost: new Decimal("1e2650"),
    amount: new Decimal(0),
    power: new Decimal(1),
    bought: 0
  },
  timeDimension7: {
    cost: new Decimal("1e3000"),
    amount: new Decimal(0),
    power: new Decimal(1),
    bought: 0
  },
  timeDimension8: {
    cost: new Decimal("1e3350"),
    amount: new Decimal(0),
    power: new Decimal(1),
    bought: 0
  },
  offlineProd: 0,
  offlineProdCost: 1e7,
  challengeTarget: 0,
  autoSacrifice: 1,
  replicanti: {
    amount: new Decimal(0),
    unl: false,
    chance: 0.01,
    chanceCost: new Decimal(1e150),
    interval: 1000,
    intervalCost: new Decimal(1e140),
    gal: 0,
    galaxies: 0,
    galCost: new Decimal(1e170),
    auto: [false, false, false]
  },
  timestudy: {
    theorem: 0,
    amcost: new Decimal("1e20000"),
    ipcost: new Decimal(1),
    epcost: new Decimal(1),
    studies: []
  },
  eternityChalls: {},
  eternityChallGoal: new Decimal(Number.MAX_VALUE),
  currentEternityChall: "",
  eternityChallUnlocked: 0,
  etercreq: 0,
  autoIP: new Decimal(0),
  autoTime: 1e300,
  infMultBuyer: false,
  autoCrunchMode: "amount",
  autoEterMode: "amount",
  respec: false,
  eternityBuyer: {
    limit: new Decimal(0),
    isOn: false
  },
  eterc8ids: 50,
  eterc8repl: 40,
  dimlife: true,
  dead: true,
  dilation: {
    studies: [],
    active: false,
    tachyonParticles: new Decimal(0),
    dilatedTime: new Decimal(0),
    totalTachyonParticles: new Decimal(0),
    nextThreshold: new Decimal(1000),
    freeGalaxies: 0,
    upgrades: [],
    unstableShards: new Decimal(0),
    rebuyables: {
      1: 0,
      2: 0,
      3: 0,
      4: 0
    },
    unstable: {
      times: 0,
      shards: new Decimal(0),
      severity: 1,
      upgrades: [],
      sacrificedTP: new Decimal(0)
    },
    timeRift: {
      temporalPower: new Decimal(0),
      seconds: 0,
      upgrades: []
    },
    autobuy: false
  },
  meta: {
    antimatter: new Decimal(10),
    bestAntimatter: new Decimal(10),
    resets: 0,
    galaxy: 0,
    "1": {
      amount: new Decimal(0),
      bought: 0,
      tensBought: 0,
      cost: new Decimal(10)
    },
    "2": {
      amount: new Decimal(0),
      bought: 0,
      tensBought: 0,
      cost: new Decimal(100)
    },
    "3": {
      amount: new Decimal(0),
      bought: 0,
      tensBought: 0,
      cost: new Decimal(1e4)
    },
    "4": {
      amount: new Decimal(0),
      bought: 0,
      tensBought: 0,
      cost: new Decimal(1e6)
    },
    "5": {
      amount: new Decimal(0),
      bought: 0,
      tensBought: 0,
      cost: new Decimal(1e9)
    },
    "6": {
      amount: new Decimal(0),
      bought: 0,
      tensBought: 0,
      cost: new Decimal(1e13)
    },
    "7": {
      amount: new Decimal(0),
      bought: 0,
      tensBought: 0,
      cost: new Decimal(1e18)
    },
    "8": {
      amount: new Decimal(0),
      bought: 0,
      tensBought: 0,
      cost: new Decimal(1e24)
    },
    autoMaxAll: false
  },
  quantum: {
    times: 0,
    quarks: new Decimal(0),
    thisQuantum: 0,
    bestQuantum: 9999999999,
    producedGluons: 0,
    realGluons: 0,
    bosons: {
      "w+": 0,
      "w-": 0,
      z0: 0
    },
    neutronstar: {
      quarks: new Decimal(0),
      metaAntimatter: new Decimal(0),
      dilatedTime: new Decimal(0)
    },
    rebuyables: {
      1: 0,
      2: 0
    },
    investmentAmount: [
      null,
      new Decimal(0),
      new Decimal(0),
      new Decimal(0),
      new Decimal(0),
      new Decimal(0)
    ],
    upgrades: [],
    lastTenQuantums: [
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1],
      [600 * 60 * 24 * 31, 1]
    ]
  },
  why: 0,
  options: {
    newsHidden: false,
    notation: "Mixed scientific",
    //Standard = normal prefixed numbers, Scientific = standard form, Engineering = powers of 3.
    scientific: false,
    challConf: false,
    sacrificeConfirmation: true,
    retryChallenge: false,
    bulkOn: true,
    cloud: true,
    hotkeys: true,
    theme: undefined,
    secretThemeKey: 0,
    eternityconfirm: true,
    dilationconfirm: true,
    quantumconfirm: true,
    commas: true,
    updateRate: 50,
    chart: {
      updateRate: 1000,
      duration: 10,
      warning: 0
    },
    animations: {
      floatingText: true,
      bigCrunch: true,
      eternity: true,
      tachyonParticles: true
    }
  }
};

var defaultStart = $.extend(true, {}, player);
var mult18 = new Decimal(1);

function setTheme(name) {
  document.querySelectorAll("link").forEach(function(e) {
    if (e.href.includes("theme")) e.remove();
  });

  if (name !== undefined && name.length < 3)
    giveAchievement("Shhh... It's a secret");
  if (name === undefined) {
    document.getElementById("theme").textContent = "Current theme: Normal";
  } else if (name === "S1") {
    document.getElementById("theme").textContent =
      "Current theme: " + player.options.secretThemeKey;
    Chart.defaults.global.defaultFontColor = "black";
    normalDimChart.data.datasets[0].borderColor = "#000";
  } else if (name === "S2") {
    document.getElementById("theme").textContent =
      "Current theme: " + player.options.secretThemeKey;
    Chart.defaults.global.defaultFontColor = "black";
    normalDimChart.data.datasets[0].borderColor = "#000";
  } else if (name === "S3") {
    document.getElementById("theme").textContent =
      "Current theme: " + player.options.secretThemeKey;
    Chart.defaults.global.defaultFontColor = "black";
    normalDimChart.data.datasets[0].borderColor = "#000";
  } else if (name === "S4") {
    document.getElementById("theme").textContent =
      "Current theme: " + player.options.secretThemeKey;
    Chart.defaults.global.defaultFontColor = "black";
    normalDimChart.data.datasets[0].borderColor = "#000";
  } else if (name === "S5") {
    document.getElementById("theme").textContent =
      "Current theme: " + player.options.secretThemeKey;
    Chart.defaults.global.defaultFontColor = "black";
    normalDimChart.data.datasets[0].borderColor = "#000";
  } else {
    document.getElementById("theme").textContent = "Current theme: " + name;
  }

  if (name === undefined) return;

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "stylesheets/theme-" + name + ".css";

  head.appendChild(link);
}

document.getElementById("theme").onclick = function() {
  if (player.options.theme === undefined) {
    player.options.theme = "Metro";
  } else if (player.options.theme === "Metro") {
    player.options.theme = "Dark";
    Chart.defaults.global.defaultFontColor = "#888";
    normalDimChart.data.datasets[0].borderColor = "#888";
  } else if (player.options.theme === "Dark") {
    player.options.theme = "Dark Metro";
  } else if (player.options.theme === "Dark Metro") {
    player.options.theme = "Inverted";
    Chart.defaults.global.defaultFontColor = "black";
    normalDimChart.data.datasets[0].borderColor = "#000";
  } else if (player.options.theme === "Inverted") {
    player.options.theme = "Inverted Metro";
  } else {
    player.options.theme = undefined;
    Chart.defaults.global.defaultFontColor = "black";
    normalDimChart.data.datasets[0].borderColor = "#000";
  }

  setTheme(player.options.theme);
};

function showTab(tabName) {
  //iterate over all elements in div_tab class. Hide everything that's not tabName and show tabName
  var tabs = document.getElementsByClassName("tab");
  var tab;
  for (var i = 0; i < tabs.length; i++) {
    tab = tabs.item(i);
    if (tab.id === tabName) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  }
  if (
    document.getElementById("timestudies").style.display != "none" &&
    document.getElementById("eternitystore").style.display != "none"
  )
    document.getElementById("TTbuttons").style.display = "block";
  else document.getElementById("TTbuttons").style.display = "none";
  resizeCanvas();
  closeToolTip();
}

function updateMoney() {
  var element = document.getElementById("coinAmount");
  element.textContent = formatValue(
    player.options.notation,
    player.money,
    2,
    1
  );
  var element2 = document.getElementById("matter");
  if (
    player.currentChallenge == "challenge12" ||
    player.currentChallenge == "postc1"
  )
    element2.textContent =
      "There is " +
      formatValue(player.options.notation, player.matter, 2, 1) +
      " matter.";
  if (player.currentChallenge == "postc6")
    element2.textContent =
      "There is " +
      formatValue(
        player.options.notation,
        Decimal.pow(player.matter, 20),
        2,
        1
      ) +
      " matter."; //TODO
}

function updateCoinPerSec() {
  var element = document.getElementById("coinsPerSec");
  if (
    player.currentChallenge == "challenge3" ||
    player.currentChallenge == "postc1"
  ) {
    element.textContent =
      "You are getting " +
      shortenDimensions(
        getDimensionProductionPerSecond(1).times(player.chall3Pow)
      ) +
      " antimatter per second.";
  } else if (player.currentChallenge == "challenge7") {
    element.textContent =
      "You are getting " +
      shortenDimensions(
        getDimensionProductionPerSecond(1).plus(
          getDimensionProductionPerSecond(2)
        )
      ) +
      " antimatter per second.";
  } else {
    element.textContent =
      "You are getting " +
      shortenDimensions(getDimensionProductionPerSecond(1)) +
      " antimatter per second.";
  }
}

function getInfinitied() {
  return Math.max(player.infinitied + player.infinitiedBank, 0);
}

function getGalaxyCostScalingStart() {
  var n = 100 + ECTimesCompleted("eterc5") * 5;
  if (player.timestudy.studies.includes(223)) n += 7;
  if (player.timestudy.studies.includes(224))
    n += Math.floor(player.resets / 2000);
  return n;
}

function getGa