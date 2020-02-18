function unstableDilation() {
var usGain = new Decimal(((player.dilation.tachyonParticles.log(10)/10)).floor).max(1)
 if (!player.dilationStudy.includes(5) || player.dilation.dilatedTime.lt(9.99e99)) return
 if (!confirm("Unstabilizing time dilation will result in harsher scaling, allowing you to get more TP, but dilation will reset in exchange for Dilation Shards. Are you prepared for this change?"))
        player.dilation.studies = player.dilation.studies,
        player.dilation.active = false,
        player.dilation.tachyonParticles = new Decimal(0),
        player.dilation.dilatedTime = new Decimal(0),
        player.dilation.nextThreshold = new Decimal(1000),
        player.dilation.freeGalaxies = 0,
        player.dilation.upgrades = [],
        player.dilation.rebuyables = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        }
        player.dilation.unstableShards.add(usGain)
        giveAchievement("Time Leaper")
}

//showing the unstable dilation button
if (player.dilation.dilatedTime.gte(9.99e99)) document.getElementById("enabledilation2").style.display = "inline-block"
else document.getElementById("enabledilation2").style.display = "none"