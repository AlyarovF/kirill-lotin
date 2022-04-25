import Translate from "./Translate";

// changer() func
function Changer() {
    let x = document.getElementsByTagName("textarea")[0].id;
    if(x == "lotin") {
        document.getElementsByTagName("textarea")[0].setAttribute('id', 'kirill');
        document.getElementById("control-lotin").innerHTML = "Kirill";
        document.getElementById("control-kirill").innerHTML = "Lotin";
    }else if(x == "kirill"){
        document.getElementsByTagName("textarea")[0].setAttribute('id', 'lotin');
        document.getElementById("control-lotin").innerHTML = "Lotin";
        document.getElementById("control-kirill").innerHTML = "Kirill";
    }   
    let y = document.getElementById("textinput").value;
    document.getElementsByTagName("textarea")[0].value = y;
    Translate();
}

export default Changer;