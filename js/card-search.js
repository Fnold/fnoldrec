function search() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const spanText = card.querySelector('span').textContent.toLowerCase();
        const search_words = document.querySelector('input').value.trim().toLowerCase().split(/\s+/);
        if (search_words.every(word => spanText.includes(word))) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
});
if (document.querySelector('input').value) {
    document.getElementById('search_clear').style.display = "block";
} else {
    document.getElementById('search_clear').style.display = "none";
}
if (document.querySelector('input').value != null) {
    const ResultNumber = (document.querySelectorAll('.card[style*="display: block"]').length)/2;
    if (ResultNumber == 1) {
        document.getElementById("resultsnumber").innerHTML = ResultNumber+" card";
    } else {
        document.getElementById("resultsnumber").innerHTML = ResultNumber+" cards";
    }
}
}
window.addEventListener("DOMContentLoaded", function () {
    if (new URLSearchParams(window.location.search).get("q")) {
        document.querySelector('input').value = new URLSearchParams(window.location.search).get("q");
}});