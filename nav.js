function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function myFunctionA() {
    let x = document.getElementById("myTopnav");
    x.className = "topnav";

}