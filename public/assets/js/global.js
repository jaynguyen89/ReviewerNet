$(document).ready(function() {
    //$("#navToggle").bind("click", function () {
        //$("myTopnav").className += ($("myTopnav").className === "topnav" ? " responsive" : "");
    //});

    $("#scrollTop").click(function (e) {
        e.preventDefault();
        $.smoothScroll({ scrollTarget: "#myTopnav" });
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav")
        x.className += " responsive";
    else
        x.className = "topnav";
}