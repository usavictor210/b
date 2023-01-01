var player = {};

function changestate(n) {
    var classes = document.getElementById('div'+n).classList
    if (classes.contains('hidden')){
		classes.remove('hidden');
	    classes.add('shown');
	}
    else{
		classes.remove('shown');
		classes.add('hidden');
	}
}

if (localStorage.getItem("howToSpoilers") !== null) var spoilers = parseInt(localStorage.getItem("howToSpoilers"))
else var spoilers = 0

if (spoilers === 0) document.getElementById("showspoilersbtn").innerHTML = "View: <br> Avoid spoilers"
else document.getElementById("showspoilersbtn").innerHTML= "View: <br> Show spoilers"

function save() {
	localStorage.setItem("howToSpoilersNG2R", spoilers)
}

function get_save(name) {
    if (localStorage.getItem("dimensionSave") !== null) {
        return JSON.parse(atob(localStorage.getItem(name), function(k, v) { return (v === Infinity) ? "Infinity" : v; }))
	}
}

function load_game() {
    const save_data = get_save('dimensionSave');
    if (!save_data) return;
    const save_to_use = save_data.saves[save_data.current]
    player = save_to_use;
}

function showspoilers() {
	spoilers = !spoilers
  let text = spoilers ? "View: <br> Show spoilers" : "View: <br> Avoid spoilers"
	document.getElementById("showspoilersbtn").innerHTML = text
	save()
	updateSpoilers();
}

// to do: fix!!!
function updateSpoilers() {
	var displayed = 0;
	if (spoilers === 0) {
		for (i=1; i<18; i++) {
			displayed = 0;
			if (i === 5 && (player.resets >= 4 || player.infinitied.gte(1) || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 6 && (player.galaxies >= 1 || player.infinitied.gte(1) || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 8 && (player.infinitied.gte(1) || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 9 && (player.infinitied.gte(1) || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 10 && (playplayer.infinitieder.infinitied.gte(1) || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 11 && (player.autobuyers[11].interval>100 || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 12 && (player.infDimensionsUnlocked[0] || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 13 && (player.postChallUnlocked >= 5 || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 14 && (player.replicanti.unl || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 15 && (player.replicanti.unl || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 16 && (player.replicanti.unl || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 17 && (player.replicanti.unl || player.eternities.gte(1))) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}
			if (i === 18 && player.eternities.gte(1)) { 
				(displayed === 0) ? displayed = 1 : displayed = 0; 
			} 
			if (i < 5 || i === 7) {
				(displayed === 0) ? displayed = 1 : displayed = 0;
			}

			if (displayed === 1) {
				document.getElementById("div"+i+"btn").style.display = "block";
				document.getElementById("div"+i+"hr").style.display = "block";
			} else {
				document.getElementById("div"+i+"btn").style.display = "none";
				document.getElementById("div"+i+"hr").style.display = "none";
			}
		}
	} else {
		for (i=1; i<18; i++) {
			document.getElementById("div"+i+"btn").style.display = "block";
			document.getElementById("div"+i+"hr").style.display = "block";
		}
	}
}

document.getElementById("importbtn").onclick = function () {
    var save_data = prompt("Input your save.");
	save_data = JSON.parse(atob(save_data), function(k, v) { return (v === Infinity) ? "Infinity" : v; });
	if (!save_data) {
		alert('Couldn\'\t load the save.');
		return;
	}
	player = save_data;
	updateSpoilers();
};

load_game();
save();
updateSpoilers();