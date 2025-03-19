function switchOFF() {

    document.getElementById("bulb-on-off").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat-seen-hide").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch-status").textContent = "Switched OFF";
    document.getElementById("off-btn-color").style.backgroundColor = "#cbd2d9";
    document.getElementById("on-btn-color").style.backgroundColor = "#22c55e";

}

function switchON() {

    document.getElementById("bulb-on-off").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat-seen-hide").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch-status").textContent = "Switched ON";
    document.getElementById("off-btn-color").style.backgroundColor = "#e12d39";
    document.getElementById("on-btn-color").style.backgroundColor = "#cbd2d9";
}