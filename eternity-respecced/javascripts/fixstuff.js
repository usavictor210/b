//bugs!
function bugCheck (tier) {
    var name = TIER_NAMES[tier];

    if (Number.isNaN(player[name + 'Pow'].e)) {
      console.log('bug check: dim pow is buggy');
    }
    if (Number.isNaN(player.achPow.e)) {
      console.log('bug check: ach pow is buggy');
    }

    if (Number.isNaN(player.infinityPower.e)) {
      console.log('bug check: inf pow is buggy');
    }

    if (Number.isNaN(totalMult)) {
      console.log('bug check: total mult is buggy');
    }

    if (Number.isNaN(currentMult)) {
      console.log('bug check: current mult is buggy');
    }

    if (Number.isNaN(infinitiedMult)) {
      console.log('bug check: infinitied mult is buggy');
    }

    if (Number.isNaN(achievementMult)) {
      console.log('bug check: achievement mult is buggy');
    }

    if (Number.isNaN(challengeMult.e)) {
      console.log('bug check: challenge mult is buggy');
    }

    if (Number.isNaN(dimMults().e)) {
      console.log('bug check: inf dim mult is buggy');
    }

    if (Number.isNaN(unspentBonus.e)) {
      console.log('bug check: inf unspent bonus is buggy');
    }

    if (Number.isNaN(timeMult().e)) {
      console.log('bug check: time mult is buggy');
    }

    if (Number.isNaN(player.thisInfinityTime)) {
      console.log('bug check: infinity time is buggy')
    }

    if (Number.isNaN(player.infinityDimension8.amount.e)) {
      console.log('bug check: id8 is buggy')
    }

    if (Number.isNaN(player.money.e)) {
      console.log('bug check: money is buggy')
    }

    if (Number.isNaN(player.money.pow(0.00004).plus(1).e)) {
      console.log('bug check: money is weirdly buggy')
    }

    if (Number.isNaN(player.postC3Reward.e)) {
      console.log('bug check: postc3 reward is buggy')
    }

    if (Number.isNaN(mult18.e)) {
      console.log('bug check: mult18 is buggy')
    }

    if (Number.isNaN(postc8Mult.e)) {
      console.log('bug check: post c8 mult is buggy')
    }

    let l = [player[name + 'Pow'], player.achPow, player.infinityPower,
    totalMult, currentMult, infinitiedMult, achievementMult, challengeMult,
    dimMults(), unspentBonus, timeMult(), player.thisInfinityTime,
    player.infinityDimension8.amount, player.money, player.money.pow(0.00004).plus(1),
    player.postC3Reward, mult18, postc8Mult];

    let r = new Decimal(1);

    for (let i of l) {
      r = r.times(new Decimal(1).plus(i));
    }

    if (Number.isNaN(r.e)) {
      console.log('bug check: something is really weirdly buggy')
    }
}

let savefix = function () {
  let oldPlayer = {};
  for (let i in player) {
    oldPlayer[i] = player[i];
  }
  let nan = false;
  if (Number.isNaN(getCurrentMult())) {
    nan = true;
    console.log('getCurrentMult is buggy (Number was NaN)');
  }
  if (Number.isNaN(getMult18())) {
    nan = true;
    console.log('getMult18 is buggy (Number was NaN)');
  }
  for (let i in player) {
    if (player[i] && Number.isNaN(player[i].e)) {
      nan = true;
      console.log(i + ' is buggy (Number was NaN)');
      if (i === 'money') {
        player.money = new Decimal(10);
        updateInitialMoney();
      } else if (i === 'tickspeed') {
        player.tickspeed = new Decimal(1000);
      } else {
        player[i] = new Decimal(0);
      }
    }
    if (player.tickspeed.eq(0)) {
      player.tickspeed = new Decimal(1000);
    }
    for (let j in player[i]) {
      if (player[i][j] && Number.isNaN(player[i][j].e)) {
        nan = true;
        console.log(i + '.' + j + ' is buggy (Number was NaN)');
        player[i][j] = new Decimal(0);
      }
    }
  }
  if (nan) {
    showMults = false
    alert('There is a bug in the game and your save was just fixed. If this message shows up, and especially if it shows up multiple times, notify usavictor#4761 on Discord (actually don\'t notify dan-simon#7202, who knows what he\'s doing now).')
  }
}

//end of bug catching stuff
