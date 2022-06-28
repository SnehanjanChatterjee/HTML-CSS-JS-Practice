function calarea() {
    var x = document.getElementById("side1").value;
    var y = document.getElementById("side2").value;
    var z = document.getElementById("side3").value;
    var s = (parseInt(x) + parseInt(y) + parseInt(z)) / 2;
    var area = Math.sqrt(s * ((s - parseInt(x)) * (s - parseInt(y)) * (s - parseInt(z))));
    document.getElementById("area").innerHTML = "Area of triangle is " + area;
    console.log(area);
}