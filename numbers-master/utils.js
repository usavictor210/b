import {Decimal} from './big_number.js';

let notifyPriority = 0;

let times = [['second', 60], ['minute', 60], ['hour', 24], ['day', 30], ['month', 12], ['year', 1e6]];

let processPhrase = function (num, places, what, plural) {
  let m = (typeof num === 'number') ? 'toFixed' : 'toStr';
  return (num === Math.round(num) ? num : num[m](places)) + ' ' + (num === 1 ? what : (plural || what + 's'));
}

let formatTime = function (x) {
  x = x / 1000;
  let r = [];
  for (let [i, num] of times) {
    let v = x % num;
    x -= v;
    x /= num;
    r.push([v, 3, i]);
  }
  while (r.length > 1 && r[r.length - 1][0] === 0) {
    r.pop();
  }
  let s = [processPhrase(...r[0]), ', and '];
  for (let i of r.slice(1)) {
    s.push(processPhrase(...i));
    s.push(', ');
  }
  s.pop();
  if (s.length === 3) {
    s[1] = ' and ';
  }
  return s.reverse().join('');
}

let at = function (x, y) {
  for (let i of y) {
    x = x[i];
  }
  return x;
}

let get = function (d, k, def) {
  return (k in d) ? d[k] : def;
}

let notify = function (text, color, priority) {
  if (notifyPriority > priority) {
    return;
  }
  let n = document.getElementById('notify');
  n.style.color = color;
  n.innerHTML = text;
  setTimeout(function () {
    if (n.innerHTML === text) {
      n.innerHTML = '';
      notifyPriority = 0;
    }
  }, 3000);
}

let title = function (x) {
  return x[0].toUpperCase() + x.slice(1).toLowerCase();
}

let utilGetBought = function (player, i) {
  return get(player.bought, i, 0)
}

let utilGetAmount = function (player, i) {
  return get(player.amounts, i, new Decimal(0))
}

let setPlayer = function (player, newPlayer) {
  for (let i in newPlayer) {
    player[i] = newPlayer[i];
  }
}

let doInterval = function (obj, f) {
  let now = Date.now();
  if (obj.last + obj.interval <= now) {
    obj.last = now;
    f();
  }
}

let getOrCreateElement = function (id, parent) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('div');
    el.id = id;
    parent.appendChild(el);
  }
  return el;
}

export {at, title, get, processPhrase, formatTime, notify,
  utilGetAmount, utilGetBought, setPlayer, doInterval,
  getOrCreateElement};
