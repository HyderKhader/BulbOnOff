function change() {
    var imag = document.getElementById("bulb");
    if (imag.src.match("off")) {
        imag.src = "on.jpg";
    }
    else {
        imag.src = "off.jpg";
    }
}