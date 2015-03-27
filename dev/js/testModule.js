window.onload = function(){
    var b = document.getElementsByTagName("body")[0];
    var p = document.createElement("P");
    p.innerHTML = "This text was output by our compiled script!";
    b.appendChild(p);
};