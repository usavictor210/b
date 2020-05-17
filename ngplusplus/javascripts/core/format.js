var FormatList = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QaDc', 'QtDc', 'SxDc', 'SpDc', 'ODc', 'NDc', 'Vg', 'UVg', 'DVg', 'TVg', 'QaVg', 'QtVg', 'SxVg', 'SpVg', 'OVg', 'NVg', 'Tg', 'UTg', 'DTg', 'TTg', 'QaTg', 'QtTg', 'SxTg', 'SpTg', 'OTg', 'NTg', 'Qd', 'UQd', 'DQd', 'TQd', 'QaQd', 'QtQd', 'SxQd', 'SpQd', 'OQd', 'NQd', 'Qi', 'UQi', 'DQi', 'TQi', 'QaQi', 'QtQi', 'SxQi', 'SpQi', 'OQi', 'NQi', 'Se', 'USe', 'DSe', 'TSe', 'QaSe', 'QtSe', 'SxSe', 'SpSe', 'OSe', 'NSe', 'St', 'USt', 'DSt', 'TSt', 'QaSt', 'QtSt', 'SxSt', 'SpSt', 'OSt', 'NSt', 'Og', 'UOg', 'DOg', 'TOg', 'QaOg', 'QtOg', 'SxOg', 'SpOg', 'OOg', 'NOg', 'Nn', 'UNn', 'DNn', 'TNn', 'QaNn', 'QtNn', 'SxNn', 'SpNn', 'ONn', 'NNn', 'Ce',];

function letter(power,str) {
    const len = str.length;
    function lN(n) {
        let result = 1;
        for (var j = 0; j < n; ++j) result = len*result+1;
        return result;
    }
    if (power <= 5) return str[0];
    power = Math.floor(power / 3);
    let i=0;
    while (power >= lN(++i));
    if (i==1) return str[power-1];
    power -= lN(i-1);
    let ret = '';
    while (i>0) ret += str[Math.floor(power/Math.pow(len,--i))%len]
    return ret;
}

function getAbbreviation(e) {
    const prefixes = [
    ['', 'U', 'D', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'O', 'N'],
    ['', 'Dc', 'Vg', 'Tg', 'Qd', 'Qi', 'Se', 'St', 'Og', 'Nn'],
    ['', 'Ce', 'Dn', 'Tc', 'Qe', 'Qu', 'Sc', 'Si', 'Oe', 'Ne']]
    const prefixes2 = ['', 'MI-', 'MC-', 'NA-', 'PC-', 'FM-']
    e = Math.floor(e/3)-1;
    let index2 = 0;
    let prefix = [prefixes[0][e%10]];
    while (e >= 10) {
        e = Math.floor(e/10);
        prefix.push(prefixes[(++index2)%3][e%10])
    }
    index2 = Math.floor(index2/3)
    while (prefix.length%3 != 0) prefix.push("");
    let ret = "";
    while (index2 >= 0) ret += prefix[index2*3] + prefix[index2*3+1] + prefix[index2*3+2] + prefixes2[index2--];
    if (ret.endsWith("-")) ret = ret.slice(0,ret.length-1)
    return ret.replace("UM","M").replace("UNA","NA").replace("UPC","PC").replace("UFM","FM")
}


const inflog = Math.log10(Number.MAX_VALUE)
function formatValue(notation, value, places, placesUnder1000) {

    if ((value <= Number.MAX_VALUE || (player.break && (player.currentChallenge == "" || !new Decimal(Number.MAX_VALUE).equals(player.challengeTarget)) )) && (value >= 1000)) {
        if (value instanceof Decimal) {
           var power = value.e
           var matissa = value.mantissa
        } else {
            var matissa = value / Math.pow(10, Math.floor(Math.log10(value)));
            var power = Math.floor(Math.log10(value));
        }
        if ((notation === "Mixed scientific" && power >= 33) || notation === "Scientific") {
            matissa = matissa.toFixed(places)
            if (matissa >= 10) {
                matissa /= 10;
                power++;
            }
            if (power > 100000  && !player.options.commas) return (matissa + "e" + formatValue(notation, power, 3, 3))
            if (power > 100000  && player.options.commas) return (matissa + "e" + power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            return (matissa + "e" + power);
        }
        if (notation === "Infinity") {
            const pow = Decimal.log10(value)
            if (pow / inflog < 1000) var infPlaces = 4
            else var infPlaces = 3
            if (player.options.commas) return (pow / inflog).toFixed(Math.max(infPlaces, places)).toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"."+(pow / inflog).toFixed(Math.max(infPlaces, places)).toString().split(".")[1]+"∞"
            else return (pow / inflog).toFixed(Math.max(infPlaces, places))+"∞"
        }
        if (notation.includes("engineering") || notation.includes("Engineering")) pow = power - (power % 3)
        else pow = power
        if (power > 100000  && !player.options.commas) pow = formatValue(notation, pow, 3, 3)
        if (power > 100000  && player.options.commas) pow = pow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        if (notation === "Logarithm") {
            if (power > 100000  && !player.options.commas) return "ee"+Math.log10(Decimal.log10(value)).toFixed(3)
            if (power > 100000  && player.options.commas) return "e"+Decimal.log10(value).toFixed(places).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            else return "e"+Decimal.log10(value).toFixed(Math.max(places, 1))
        }

        if (notation === "Brackets") {
          var table = [")", "[", "{", "]", "(", "}"];
          var log6 = Math.LN10 / Math.log(6) * Decimal.log10(value);
          var wholePartOfLog = Math.floor(log6);
          var decimalPartOfLog = log6 - wholePartOfLog;
          //Easier to convert a number between 0-35 to base 6 than messing with fractions and shit
          var decimalPartTimes36 = Math.floor(decimalPartOfLog * 36);
          var string = "";
          while (wholePartOfLog >= 6) {
            var remainder = wholePartOfLog % 6;
            wholePartOfLog -= remainder;
            wholePartOfLog /= 6;
            string = table[remainder] + string;
          }
          string = "e" + table[wholePartOfLog] + string + ".";
          string += table[Math.floor(decimalPartTimes36 / 6)];
          string += table[decimalPartTimes36 % 6];
          return string;
        }

        matissa = (matissa * Decimal.pow(10, power % 3)).toFixed(places)
        if (matissa >= 1000) {
            matissa /= 1000;
            power++;
        }

        if (notation === "Standard" || notation === "Mixed scientific") {
            if (power <= 303) return matissa + " " + FormatList[(power - (power % 3)) / 3];
            else return matissa + " " + getAbbreviation(power);
        } else if (notation === "Mixed engineering") {
            if (power <= 33) return matissa + " " + FormatList[(power - (power % 3)) / 3];
            else return (matissa + "e" + pow);
        } else if (notation === "Engineering") {
            return (matissa + "e" + pow);
        } else if (notation === "Letters") {
            return matissa + letter(power,'abcdefghijklmnopqrstuvwxyz');
        } else if (notation === "Emojis") {
            return matissa + letter(power,['😠', '🎂', '🎄', '💀', '🍆', '👪', '🌈', '💯', '🍦', '🎃', '💋', '😂', '🌙', '⛔', '🐙', '💩', '❓', '☢', '🙈', '👍', '☂', '✌', '⚠', '❌', '😋', '⚡'])
        }

        else {
            if (power > 100000  && player.options.commas) power = power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return "1337 H4CK3R"
        }
    } else if (value < 1000) {
        return (value).toFixed(placesUnder1000);
    } else {
        return "Infinite";
    }
}

shorten = function (money) {
  return formatValue(player.options.notation, money, 2, 2);
};

shortenCosts = function (money) {
  return formatValue(player.options.notation, money, 0, 0);
};

shortenDimensions = function (money) {
  return formatValue(player.options.notation, money, 2, 0);
};

shortenMoney = function (money) {
  return formatValue(player.options.notation, money, 2, 1);
};

function timeDisplay(time) {
  if (time <= 100) return (time/10).toFixed(3) + " seconds"
  time = Decimal.floor(time / 10)
  if (time >= 31536000) {
      return Decimal.floor(time / 31536000) + " years, " + Decimal.floor((time % 31536000) / 86400) + " days, " + Decimal.floor((time % 86400) / 3600) + " hours, " + Decimal.floor((time % 3600) / 60) + " minutes, and " + Decimal.floor(time % 60) + " seconds"
  } else if (time >= 86400) {
      return Decimal.floor(time / 86400) + " days, " + Decimal.floor((time % 86400) / 3600) + " hours, " + Decimal.floor((time % 3600) / 60) + " minutes, and " + Decimal.floor(time % 60) + " seconds"
  } else if (time >= 3600) {
      return Decimal.floor(time / 3600) + " hours, " + Decimal.floor((time % 3600) / 60) + " minutes, and " + Decimal.floor(time % 60) + " seconds"
  } else if (time >= 60) {
      return Decimal.floor(time / 60) + " minutes, and " + Decimal.floor(time % 60) + " seconds"
  } else return Decimal.floor(time % 60) + " seconds"
}

function preformat(int) {
  if (int.toString().length == 1) return "0"+int
  else return int
}


function timeDisplayShort(time) {
  if (time <= 100) return (time/10).toFixed(3) + " seconds"
  if (time <= 600) return (time/10).toFixed(2) + " seconds"
  time = Decimal.floor(time / 10)
  return preformat(Decimal.floor((time) / 3600)) + ":" + preformat(Decimal.floor((time % 3600) / 60)) + ":" + preformat(Decimal.floor(time % 60))
}

function calculateProgressBar() {
    //even more aarex code...
    document.getElementById("progressbar").className = "";
    if (document.getElementById("metadimensions").style.display == "block")
      doQuantumProgress();
    else if (player.currentChallenge !== "") {
      var percentage =
        Math.min(
          (Decimal.log10(player.money.plus(1)) /
            Decimal.log10(player.challengeTarget)) *
            100,
          100
        ).toFixed(2) + "%";
      document.getElementById("progressbar").style.width = percentage;
      document.getElementById("progresspercent").textContent = percentage;
      document
        .getElementById("progresspercent")
        .setAttribute("ach-tooltip", "Percentage to challenge goal");
    } else if (!player.break) {
      var percentage =
        Math.min(
          (Decimal.log10(player.money.plus(1)) /
            Decimal.log10(Number.MAX_VALUE)) *
            100,
          100
        ).toFixed(2) + "%";
      document.getElementById("progressbar").style.width = percentage;
      document.getElementById("progresspercent").textContent = percentage;
      document
        .getElementById("progresspercent")
        .setAttribute("ach-tooltip", "Percentage to Infinity");
    } else if (player.infDimensionsUnlocked.includes(false)) {
      var percentage =
        Math.min(
          (player.money.e / Decimal.log10(getNewInfReq())) * 100,
          100
        ).toFixed(2) + "%";
      document.getElementById("progressbar").style.width = percentage;
      document.getElementById("progresspercent").textContent = percentage;
      document
        .getElementById("progresspercent")
        .setAttribute("ach-tooltip", "Percentage to the next dimension unlock");
    } else if (
      player.currentEternityChall !== "" &&
      player.infinityPoints.lt(player.eternityChallGoal.pow(2))
    ) {
      var percentage =
        Math.min(
          (Decimal.log10(player.infinityPoints.plus(1)) /
            player.eternityChallGoal.log10()) *
            100,
          100
        ).toFixed(2) + "%";
      document.getElementById("progressbar").style.width = percentage;
      document.getElementById("progresspercent").textContent = percentage;
      document
        .getElementById("progresspercent")
        .setAttribute("ach-tooltip", "Percentage to Eternity Challenge goal");
    } else if (
      player.infinityPoints.lt(Number.MAX_VALUE) ||
      player.eternities.eq(0)
    ) {
      var percentage =
        Math.min(
          (Decimal.log10(player.infinityPoints.plus(1)) /
            Decimal.log10(Number.MAX_VALUE)) *
            100,
          100
        ).toFixed(2) + "%";
      document.getElementById("progressbar").style.width = percentage;
      document.getElementById("progresspercent").textContent = percentage;
      document
        .getElementById("progresspercent")
        .setAttribute("ach-tooltip", "Percentage to Eternity");
    } else if (
      player.achievements.includes("r127") &&
      !player.achievements.includes("r128") &&
      player.timestudy.studies.length == 0
    ) {
      var percentage =
        (Decimal.log10(player.infinityPoints.plus(1)) / 220).toFixed(2) + "%";
      document.getElementById("progressbar").style.width = percentage;
      document.getElementById("progresspercent").textContent = percentage;
      document
        .getElementById("progresspercent")
        .setAttribute(
          "ach-tooltip",
          'Percentage to "What do I have to do to get rid of you"'
        );
    } else if (
      player.dilation.studies.includes(5) &&
      player.dilation.active &&
      !player.achievements.includes("r138") &&
      player.timestudy.studies.length == 0
    ) {
      var percentage =
        Math.min(
          Decimal.log10(player.infinityPoints.plus(1)) / 200,
          100
        ).toFixed(2) + "%";
      document.getElementById("progressbar").style.width = percentage;
      document.getElementById("progresspercent").textContent = percentage;
      document
        .getElementById("progresspercent")
        .setAttribute(
          "ach-tooltip",
          'Percentage to "This is what I have to do to get rid of you."'
        );
    } else if (
      player.dilation.active &&
      player.dilation.totalTachyonParticles.gte(getDilGain())
    ) {
      var percentage =
        (
          getDilGain().log10() / player.dilation.totalTachyonParticles.log10()
        ).toFixed(2) + "%";
      document.getElementById("progressbar").style.width = percentage;
      document.getElementById("progresspercent").textContent = percentage;
      document
        .getElementById("progresspercent")
        .setAttribute(
          "ach-tooltip",
          "Percentage to the requirement for tachyon particle gain"
        );
    } else if (
      gainedEternityPoints().gte(Decimal.pow(2, 1048576)) &&
      document.getElementById("metadimensions").style.display == "block"
    )
      doQuantumProgress();
    else {
      var gepLog = gainedEternityPoints().log2();
      var goal = Math.pow(2, Math.ceil(Math.log10(gepLog) / Math.log10(2)));
      if (
        goal > 131072 &&
        player.meta &&
        !player.achievements.includes("r143")
      ) {
        goal = Decimal.sub("1e40000", player.eternityPoints).log2();
        var percentage = Math.min((gepLog / goal) * 100, 100).toFixed(2) + "%";
        document.getElementById("progressbar").style.width = percentage;
        document.getElementById("progresspercent").textContent = percentage;
        document
          .getElementById("progresspercent")
          .setAttribute(
            "ach-tooltip",
            'Percentage to "In the grim darkness of the far endgame"'
          );
      } else if (goal > 512 && !player.achievements.includes("r127")) {
        goal = Decimal.sub(Number.MAX_VALUE, player.eternityPoints).log2();
        var percentage = Math.min((gepLog / goal) * 100, 100).toFixed(2) + "%";
        document.getElementById("progressbar").style.width = percentage;
        document.getElementById("progresspercent").textContent = percentage;
        document
          .getElementById("progresspercent")
          .setAttribute(
            "ach-tooltip",
            'Percentage to "But I wanted another prestige layer..."'
          );
      } else {
        var percentage = Math.min((gepLog / goal) * 100, 100).toFixed(2) + "%";
        document.getElementById("progressbar").style.width = percentage;
        document.getElementById("progresspercent").textContent = percentage;
        document
          .getElementById("progresspercent")
          .setAttribute(
            "ach-tooltip",
            "Percentage to gaining" +
              shortenDimensions(Decimal.pow(2, goal)) +
              " EP"
          );
      }
    }
  }