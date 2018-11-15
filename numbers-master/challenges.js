import {title} from './utils.js';

let challengeList = ['click', '1', '2', '3', '4', '5', '6', '7',
'doubling', 'shift', 'boost', 'infinity'];

let getTotalChallengeTime = function (player) {
  let times = Object.values(player.challengeData.bestTimes);
  return times.reduce(function (a, b) {
    return a + b;
  });
}

let getChallName = function (x) {
  // intensionally handles numerical strings
  if (!isNaN(x)) {
    return 'Challenge ' + x;
  } else {
    return title(x) + ' Challenge';
  }
}

export {challengeList, getTotalChallengeTime, getChallName};
