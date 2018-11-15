/* shops don't take real-world currancy or things convertible to it,
they take things like infinity points.

how to specify a shop:
a shop has a location and an array of items
example item:
You get a boost to production based on your playtime in hours
1 -> hours^(1 / 8)
1 infinity points

<button id="testing" class="unavailablebtn">
  You get a boost to production
  <br/>
  based on your playtime in hours
  <br/>
  1x -> hours^(1 / 8)x
  <br/>
  Cost: 1 infinity point
</button>

so this works.

So, what's an item need?

A max buyable, a cost given current bought, a value given current bought,
name, text, and a value display

A shop needs a player stat the shop is in, so that that stat can
be subtracted from.
*/

import {Decimal} from './big_number.js';
import {at, processPhrase, utilGetBought} from './utils.js';

let infinityShop = {
  'name': 'infinity shop',
  'location': 'infShop',
  'stat': 'infinityPoints',
  'readableStat': 'infinity point',
  'items': [
    [
      {
        'name': 'playTimeProdBoost',
        'text': 'You get a boost to production<br/>based on your playtime / 30 minutes',
        'maxBuyable': 2,
        getCost: function (bought) {
          return Decimal.pow(10, bought);
        },
        getValue: function (bought) {
          return bought / 8;
        },
        displayValue: function (value) {
          if (value === 0) {
            return '1x';
          } else {
            return '(playtime / 30m)^' + value.toFixed(3) + 'x';
          }
        },
        getEffect: function (player, value) {
          return Decimal.pow(
            Math.max(1, (Date.now() - player.times.playStart) / (1800 * 1000)),
            value);
        }
      },
      {
        'name': 'infTimeProdBoost',
        'text': 'You get a boost to production<br/>based on your time in this infinity / 5 minutes',
        'maxBuyable': 2,
        getCost: function (bought) {
          return Decimal.pow(10, bought);
        },
        getValue: function (bought) {
          return bought / 8;
        },
        displayValue: function (value) {
          if (value === 0) {
            return '1x';
          } else {
            return '(infinity time / 5m)^' + value.toFixed(3) + 'x';
          }
        },
        getEffect: function (player, value) {
          return Decimal.pow(
            Math.max(1, (Date.now() - player.times.infStart) / (300 * 1000)),
            value)
        }
      },
      {
        'name': 'resetTimeProdBoost',
        'text': 'You get a boost to production<br/>based on your time in this reset / 1 minute',
        'maxBuyable': 2,
        getCost: function (bought) {
          return Decimal.pow(10, bought);
        },
        getValue: function (bought) {
          return bought / 8;
        },
        displayValue: function (value) {
          if (value === 0) {
            return '1x';
          } else {
            return '(time in reset / 1m)^' + value.toFixed(3) + 'x';
          }
        },
        getEffect: function (player, value) {
          return Decimal.pow(
            Math.max(1, (Date.now() - player.times.resetStart) / (60 * 1000)),
            value);
        }
      }
    ],
    [
      {
        'name': 'infinityProdBoost',
        'text': 'You get a boost to production<br/>based on your infinities',
        'maxBuyable': 4,
        getCost: function (bought) {
          return Decimal.pow(5, bought + 1);
        },
        getValue: function (bought) {
          return bought / 4;
        },
        displayValue: function (value) {
          if (value === 0) {
            return '1x';
          } else {
            return 'infinities^' + value.toFixed(2) + 'x';
          }
        },
        getEffect: function (player, value) {
          return Decimal.pow(Math.max(1, player.infinities), value)
        }
      },
      {
        'name': 'ipProdBoost',
        'text': 'You get a boost to production<br/>based on your infinity points',
        'maxBuyable': 4,
        getCost: function (bought) {
          return Decimal.pow(5, bought + 1);
        },
        getValue: function (bought) {
          return bought / 4;
        },
        displayValue: function (value) {
          if (value === 0) {
            return '1x';
          } else {
            return '(infinity points)^' + value.toFixed(2) + 'x';
          }
        },
        getEffect: function (player, value) {
          return Decimal.pow(player.infinityPoints.max(1), value)
        }
      },
      {
        'name': 'boughtProdBoost',
        'text': 'You get a boost to production of each number<br/>based on how many of that number you have bought',
        'maxBuyable': 4,
        getCost: function (bought) {
          return Decimal.pow(5, bought + 1);
        },
        getValue: function (bought) {
          return bought / 8;
        },
        displayValue: function (value) {
          if (value === 0) {
            return '1x';
          } else {
            return 'bought^' + value.toFixed(3) + 'x';
          }
        },
        getEffect: function (player, value, rank) {
          return Decimal.pow(Math.max(1, utilGetBought(player, rank)), value)
        },
        'weirdGetEffect': true
      }
    ],
    [
      {
        'name': 'shiftPower',
        'text': 'Make shifts more powerful',
        'maxBuyable': 4,
        getCost: function (bought) {
          return Decimal.pow(10, bought + 1);
        },
        getValue: function (bought) {
          return 2 + bought / 4;
        },
        displayValue: function (value) {
          return value.toFixed(2) + 'x';
        }
      },
      {
        'name': 'boostPower',
        'text': 'Make boosts more powerful',
        'maxBuyable': 4,
        getCost: function (bought) {
          return Decimal.pow(10, bought + 1);
        },
        getValue: function (bought) {
          return 2 + bought / 4;
        },
        displayValue: function (value) {
          return value.toFixed(2) + 'x';
        }
      },
      {
        'name': 'doublingPower',
        'text': 'Make doublings more powerful',
        'maxBuyable': 4,
        getCost: function (bought) {
          return Decimal.pow(10, bought + 1);
        },
        getValue: function (bought) {
          return 2 + bought / 40;
        },
        displayValue: function (value) {
          return value.toFixed(3) + 'x';
        }
      }
    ],
    [
      {
        'name': 'shiftEasier',
        'text': 'Start infinity with shifts',
        'maxBuyable': 6,
        getCost: function (bought) {
          return Decimal.pow(2, bought + 1).times(10);
        },
        getValue: function (bought) {
          return bought;
        },
        displayValue: function (value) {
          return value + ' shifts';
        }
      },
      {
        'name': 'boostEasier',
        'text': 'Decrease boost bought requirement',
        'maxBuyable': 6,
        getCost: function (bought) {
          return Decimal.pow(5, bought + 1).times(10);
        },
        getValue: function (bought) {
          return 49 * (7 - bought);
        },
        displayValue: function (value) {
          return value + ' per boost';
        }
      },
      {
        'name': 'ipEasier',
        'text': 'Get a fraction of the best of your last 10 ip/min',
        'maxBuyable': 5,
        getCost: function (bought) {
          return Decimal.pow(10, bought + 1).times(10);
        },
        getValue: function (bought) {
          return 10 * bought;
        },
        displayValue: function (value) {
          return value + '%';
        }
      }
    ],
    [
      {
        'name': 'ipMult',
        'text': 'x2 to infinity points',
        'maxBuyable': Infinity,
        getCost: function (bought) {
          return Decimal.pow(10, bought + 3);
        },
        getValue: function (bought) {
          return Decimal.pow(2, bought);
        },
        displayValue: function (value) {
          return value.toStr(2) + 'x';
        }
      },
      {
        'name': 'clickMult',
        'text': 'x2 to clicks',
        'maxBuyable': Infinity,
        getCost: function (bought) {
          return Decimal.pow(10, bought + 3);
        },
        getValue: function (bought) {
          return Decimal.pow(2, bought);
        },
        displayValue: function (value) {
          return value.toStr(2) + 'x';
        }
      },
      {
        'name': 'prodMult',
        'text': 'x2 to production',
        'maxBuyable': Infinity,
        getCost: function (bought) {
          return Decimal.pow(10, bought + 3);
        },
        getValue: function (bought) {
          return Decimal.pow(2, bought);
        },
        displayValue: function (value) {
          return value.toStr(2) + 'x';
        }
      }
    ]
  ]
};

let shops = {};

let populateShop = function (player, shop) {
  shops[shop.name] = shop;
  let table = document.getElementById(shop.location);
  for (let i = 0; i < shop.items.length; i++) {
    let row = document.createElement('tr');
    row.id = shop.location + 'Tr' + i;
    table.appendChild(row);
    for (let j = 0; j < shop.items[i].length; j++) {
      if (!(shop.items[i][j].name in player) ||
        typeof player[shop.items[i][j].name] !== 'object') {
        player[shop.items[i][j].name] = {
          'bought': 0,
          'value': shop.items[i][j].getValue(0)
        };
      }
      if (!('coords' in player[shop.items[i][j].name])) {
        player[shop.items[i][j].name].coords = [i, j];
      }
      if (!('shopName' in player[shop.items[i][j].name])) {
        player[shop.items[i][j].name].shopName = shop.name;
      }
      let td = document.createElement('td');
      td.id = shop.location + i + '-' + j;
      let item = document.createElement('button');
      item.id = shop.items[i][j].name;
      item.style.width = '360px';
      item.style.height = '120px';
      item.onclick = function () {
        tryToBuy(player, shop, i, j);
      }
      td.appendChild(item);
      row.appendChild(td);
      displayShopItem(player, shop, i, j);
    }
  }
  setInterval(function () {
    checkPurchaseAll(player, shop);
    displayAllShopItems(player, shop);
  }, 2000);
}

let getUseText = function (player, item, maxedOut) {
  if (maxedOut) {
    return item.displayValue(player[item.name].value);
  } else {
    return item.displayValue(player[item.name].value) + ' -> ' +
    item.displayValue(item.getValue(player[item.name].bought + 1));
  }
}

let getEffectText = function (player, item, maxedOut) {
  if (maxedOut) {
    return '(currently ' + displayEffect(item.getEffect(
      player, player[item.name].value)) + 'x)';
  } else {
    return '(currently ' + displayEffect(
      item.getEffect(player, player[item.name].value)) +
    'x -> ' + displayEffect(
      item.getEffect(player, item.getValue(player[item.name].bought + 1))) + 'x)';
  }
}

let displayShopItem = function (player, shop, i, j) {
  checkPurchase(player, shop, i, j);
  let item = shop.items[i][j];
  let itemEl = document.getElementById(item.name);
  let maxedOut = item.maxBuyable <= player[item.name].bought;
  itemEl.innerHTML = item.text + '<br/>' + getUseText(player, item, maxedOut) +
  (maxedOut ? '' : '<br/>Cost: ' + processPhrase(
    item.getCost(player[item.name].bought), 2, shop.readableStat)) +
  ('getEffect' in item && !item.weirdGetEffect ? '<br/>' +
  getEffectText(player, item, maxedOut) : '');
}

let displayAllShopItems = function (player, shop) {
  for (let i = 0; i < shop.items.length; i++) {
    for (let j = 0; j < shop.items[i].length; j++) {
      displayShopItem(player, shop, i, j);
    }
  }
}

let getEffect = function (player, name, info) {
  if (!('shopName' in player[name] && 'coords' in player[name] &&
  player[name].shopName in shops)) {
    return 1;
  }
  let item = at(shops[player[name].shopName].items, player[name].coords);
  if (item.name !== name) {
    throw new Error('Incorrectly named item!');
  }
  return item.getEffect(player, player[name].value, info);
}

let displayEffect = function (effect) {
  if (typeof effect === 'number') {
    return effect.toFixed(2);
  } else {
    return effect.toStr(2);
  }
}

let tryToBuy = function (player, shop, i, j) {
  let item = shop.items[i][j];
  let itemEl = document.getElementById(item.name);
  let canBuy = player[shop.stat].gte(
    item.getCost(player[item.name].bought).minus(1e-6));
  let maxedOut = item.maxBuyable <= player[item.name].bought;
  if (canBuy && !maxedOut) {
    player[shop.stat] = player[shop.stat].minus(
      item.getCost(player[item.name].bought)).max(0);
    player[item.name].bought++;
    player[item.name].value = item.getValue(player[item.name].bought);
  }
  displayShopItem(player, shop, i, j);
}

let checkPurchaseAll = function (player, shop) {
  for (let i = 0; i < shop.items.length; i++) {
    for (let j = 0; j < shop.items[i].length; j++) {
      checkPurchase(player, shop, i, j);
    }
  }
}

let checkPurchase = function (player, shop, i, j) {
  let item = shop.items[i][j];
  let itemEl = document.getElementById(item.name);
  let canBuy = player[shop.stat].gte(
    item.getCost(player[item.name].bought).minus(1e-6));
  let maxedOut = item.maxBuyable <= player[item.name].bought;
  if (maxedOut) {
    itemEl.className = 'completedbtn';
  } else if (canBuy) {
    itemEl.className = 'availablebtn';
  } else {
    itemEl.className = 'unavailablebtn';
  }
}

export {getEffect, infinityShop, populateShop};
