let getGalaxies = function (x) {
  return Math.floor((getEighths(x) - 10) / 60);
}

let getBoosts = function (x) {
  return 5 + Math.floor((getEighths(x) - 10) / 15);
}

let eighthMemo = {};

let getEighths = function (x) {
  if (x in eighthMemo) {
    return eighthMemo[x];
  }
  let am = getAM(x);
  let gotten = 0;
  let cost = 24;
  let inc = 15;
  let inf = Math.log10(2) * 1024;
  while (am >= cost && cost <= 1e9) {
    gotten += 10;
    cost += inc;
    if (cost > inf) {
      inc += Math.log10(3);
    }
  }
  eighthMemo[x] = gotten;
  return gotten;
}

let getAM = function (x) {
  // seems about right
  return x * 205;
}

let getBaseSac = function (x) {
  // yes, I know, not exactly 7 / 8 but this is an approximation.
  return getAM(x) * .012 * (7 / 8);
}

function get_c (st) {
  return Math.pow(4 / 3, 1 / (1 + st / 10))
}

function specGetTotalTickGained (timeshards, st) {
  if (timeshards < 1) {
    return 0;
  }
  let timeshardLn = timeshards * Math.log(10);
  let c = get_c(st);
  // we know that ln(1.001) * (x - 1) * x / 2 + ln(c) * x <= timeshardLn
  // so ln(1.001) / 2 * x^2 + (ln(c) - ln(1.001) / 2) * x - timeshardLn <= 0
  let a = Math.log(1.001) / 2;
  let b = Math.log(c) - a;
  let solution = (-b + Math.sqrt(Math.pow(b, 2) + 4 * a * timeshardLn)) / (2 * a);
  let realSolution = Math.floor(solution) + 1
  return realSolution;
}

let RGMemo = {};

let getRG = function (x) {
  if (x in RGMemo) {
    return RGMemo[x];
  }
  let c = 170;
  let n = 0;
  while (c <= x && n < 1000) {
    c += 5 * (n + 5);
    n += 1;
  }
  RGMemo[x] = n;
  return n;
}

let getTickPower = function (x) {
  return Math.log10(1 / 0.965) * (getGalaxies(x) + getRG(x)) * 3.3
}

let getTSPower = [null, null, null, null, null, null];

getTSPower[0] = function (x, sh, s, galPower, st) {
  return getBaseSac(x) * Math.log(1 + Math.log(1 + st / 5)) / 8;
}

getTSPower[1] = function (x, sh, s, galPower, st) {
  return getTickPower(x) * (specGetTotalTickGained(sh, st) - specGetTotalTickGained(sh, 0));
}

getTSPower[2] = function (x, sh, s, galPower, st) {
  return Math.log10(2 ** (galPower * 5)) * 56 * st;
}

getTSPower[3] = function (x, sh, s, galPower, st) {
  return getBoosts(x) * Math.log10(1 + st / 4);
}

// I think infinity power and infinity points are fairly close, usually.
getTSPower[4] = function (x, sh, s, galPower, st) {
  return (5 - Math.log(s) / Math.log(10)) * 1.1 * 56 * st;
}

getTSPower[5] = function (x, sh, s, galPower, st) {
  return Math.log(s) / Math.log(10) * 1.1 * 56 * st;
}

function calculateTTSpec(ip, timeshards, tt, ttOpen, galPower, secondsInInfinity) {
let table = {0: {}};

for (let i = 1; i <= ttOpen; i++) {
  table[i] = {};
  cache = {};
  for (let j = 0; j <= tt; j++) {
    for (let purchases = 0; true; purchases++) {
      let spent = purchases * (purchases + 1) / 2;
      if (spent > j) {
        break;
      }
      let k = j - spent;
      let prev = (table[i - 1][k] || ['', 0]);
      if (cache[purchases] === undefined) {
        cache[purchases] = getTSPower[i - 1](ip, timeshards, secondsInInfinity, galPower, purchases)
      }
      let newBonus = prev[1] + cache[purchases];
      if (!table[i][j] || newBonus > table[i][j][1]) {
        table[i][j] = [prev[0] + '/' + purchases, newBonus];
      }
    }
  }
}

let best = [-1, -1];

for (let i in table[ttOpen]) {
  if (table[ttOpen][i][1] > best[1]) best = table[ttOpen][i];
}

return "Result: " + best[0].slice(1) + ': ' + best[1].toFixed(2);
}

document.getElementById('ttSpecButton').onclick = function () {
  document.getElementById('ttSpecResult').innerHTML = calculateTTSpec(
    +document.getElementById('ttIP').value,
    +document.getElementById('ttTimeShards').value,
    +document.getElementById('ttTimeTheorems').value,
    +document.getElementById('ttTimeStudies').value,
    +document.getElementById('ttRGPower').value,
    +document.getElementById('ttInfTime').value)
}