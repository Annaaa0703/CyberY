var button =
{
    small: document.getElementById("small-button"),
    normal: document.getElementById("normal-button"),
    big: document.getElementById("big-button")
}

var link = document.getElementById("buttonn");

button.small.addEventListener("click", function () { ChangeScale("small"); });
button.normal.addEventListener("click", function () { ChangeScale("normal"); });
button.big.addEventListener("click", function () { ChangeScale("big"); });

function ChangeScale(size)
{
    link.setAttribute("href", "styles/" + size + ".css");

    SaveScale(size);
}