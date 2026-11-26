window.onresize = window.onload = function() {
    if (innerWidth > 1065) {
        document.querySelector('.random').style.display = "block";
    } else {
        document.querySelector('.random').style.display = "none";
    }
}

function random_card() {
    // 262 = number of cards of type ACTION
    // 224 = number of cards of type UNIT
    const random = Math.floor(Math.random() * (262 + 224));
    if (random < 262) {
        window.location.href = "/fnoldrec/cards/actions/" + (random + 1);
    } else {
        window.location.href = "/fnoldrec/cards/units/" + (random - 262 + 1);
    }
}