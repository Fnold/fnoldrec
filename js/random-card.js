window.onresize = window.onload = function() {
    if (innerWidth > 1065) {
        document.querySelector('.random').style.display = "block";
    } else {
        document.querySelector('.random').style.display = "none";
    }
}

function random_card() {
    if ((Math.round(Math.random())) == 1) {
        window.location.href = "/fnoldrec/cards/actions/"+(Math.floor(Math.random() * (262 - 1 + 1)) + 1); // 262 = number of cards of type ACTION;
    } else {
        window.location.href = "/fnoldrec/cards/units/"+(Math.floor(Math.random() * (224 - 1 + 1)) + 1); // 224 = number of cards of type UNIT;
    }
}