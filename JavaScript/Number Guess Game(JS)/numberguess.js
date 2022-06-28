function CheckNum() {
    var x = Math.floor(Math.random() * 10) + 1;
    var y = document.getElementById("num").value;
    if (x == y) {
        var ans = "Random number generated was " + x + "<br>" + "Good Work";
        document.getElementById("guess").innerHTML = ans;
    }
    else {
        var ans = "Random number generated was " + x + "<br>" + "Not matched";
        document.getElementById("guess").innerHTML = ans;
    }
}