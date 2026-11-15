function latest() {
    const card_title = "The Grifter";
    const site_title = card_title;
    const card_cost = "10L 19M";
    const card_cost_info = "10 Life and 19 Mana";
    const card_type = "Unit - OPERATOR | STAR";
    const card_subtype = `
        <p>
        Boss, Human, Undead, Devastator
        </p>`;
    const card_description = `
        <p><b>BUSY</b>: Choose a card in your graveyard.<br>You <b>Discard</b> your hand. The chosen card gets moved to your hand.</p>
        <br>
        <p><b>BUSY</b>: Choose a deck and a card from your graveyard or hand.<br>The chosen card gets shuffled into the chosen deck.</p>
        <br>
        <p>Whenever you draw your third card in a turn, this unit becomes <b>Unbusy</b>.</p>`;
    const card_stats = `
        <p>
        2/5/5/4
        </p>`;
    const card_flavor = `
        <i>
        This guy freaks everyone out. At least "everyone" includes our enemies.
        </i>`;
    const card_author = `
        <i>
        Illustration: Fnold 2025
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/units/188.webp";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Latest</u>`;
}
document.addEventListener("DOMContentLoaded", latest);

    const card_id = (document.currentScript?.getAttribute('src') || '').match(/\/(\d+)(?=\.js(?:$|\?|#))/)?.[1];
    document.querySelector("main").style.setProperty("background-image", `url("../../assets/cards/latest/units/${card_id}.webp")`, "important");
    let current_inclusion = eval(`v1UnitCard${card_id}Inclusion`);
    let current_delta = eval(`v1UnitCard${card_id}Delta`);
    const ctxI = document.getElementById('chart_inclusion');
    const ctxD = document.getElementById('chart_delta');
    if (current_inclusion == null) {
        current_inclusion = 0;
    }
    if (current_delta == null) {
        current_delta = 0;
    }
    document.getElementById("inclusion").innerHTML = "&nbsp;"+current_inclusion+"%&nbsp;";
    document.getElementById("delta").innerHTML = "&nbsp;"+current_delta+"&nbsp;";
    
    function interpolateColor(color1, color2, factor) {
        if (arguments.length < 3) { 
            factor = 0.5; 
        }
        const result = color1.slice();
        for (let i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    }

    function getColorInclusion(value) {
        const red = [255, 0, 0];
        const orange = [255, 127, 0];
        const yellow = [240, 240, 0];
        const green = [0, 192, 0];
        let Pcolor;
        if (value <= 30) {
            Pcolor = interpolateColor(red, orange, value / 30);
        } else if (value <= 60) {
            Pcolor = interpolateColor(orange, yellow, (value - 30) / 30);
        } else if (value <= 90) {
            Pcolor = interpolateColor(yellow, green, (value - 60) / 30);
        } else {
            Pcolor = green;
        }
        return 'rgb(' + Pcolor.join(',') + ')';
    }

    function getColorDelta(value) {
        const red = [255, 0, 0];
        const orange = [255, 127, 0];
        const yellow = [240, 240, 0];
        const green = [0, 192, 0];
        let Dcolor;
        if (value <= -10) {
            Dcolor = interpolateColor(red, orange, (value - (-40)) / (30));
        } else if (value <= 10) {
            Dcolor = interpolateColor(orange, yellow, (value - (-10)) / (20));
        } else if (value <= 40) {
            Dcolor = interpolateColor(yellow, green, (value - 10) / (30));
        } else {
            Dcolor = green;
        }
        return 'rgb(' + Dcolor.join(',') + ')';
    }

    const Pcolor = getColorInclusion(current_inclusion);
    const Dcolor = getColorDelta(current_delta);
    document.getElementById('inclusion').style.backgroundColor = Pcolor;
    document.getElementById('delta').style.backgroundColor = Dcolor;

    new Chart(ctxI, {
        type: 'line',
        data: {
        labels: ['V1','V2'],
        datasets: [{
            label: 'Inclusion',
            data: [(eval(`v1UnitCard${card_id}Inclusion`))],
            borderWidth: 1,
            borderColor: '#FFC000',
            backgroundColor: '#FFC000'
        }]
        },
        options: {
        clip: false,
        pointRadius: 5,
        pointStyle: 'rectRot',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
            max: 100,
            beginAtZero: true,
            grid: {
                color: '#404040'
            },
            ticks: {
                stepSize: 10
            }
            },
            x: {
            grid: {
                color: '#505050'
            }
            }
        }
        }
    });
    new Chart(ctxD, {
        type: 'line',
        data: {
        labels: ['V1','V2'],
        datasets: [{
            label: 'Delta',
            data: [(eval(`v1UnitCard${card_id}Delta`))],
            borderWidth: 1,
            borderColor: '#0094FF',
            backgroundColor: '#0094FF'
        }]
        },
        options: {
        clip: false,
        pointRadius: 5,
        pointStyle: 'rectRot',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
            max: 50,
            min: -50,
            grid: {
                color: '#404040'
            },
            ticks: {
                stepSize: 1
            }
            },
            x: {
            grid: {
                color: '#505050'
            }
            }
        }
        }
    });