

// Save text as word file

function saveWord() {
    let text = document.getElementById("textinput").value + "\nwww.Lotin.uz - Ўзбек кирилл ёзувидан лотинга ва аксинча ўгириш хизмати.";
    var data = new Blob([text], {type: 'application/msword'});
    var textFile = window.URL.createObjectURL(data);
    var a = document.getElementById("download");
    a.setAttribute("href", textFile);
    a.setAttribute("download", "");
}


export default saveWord;


document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 77) {
        saveWord();
    } else if (e.ctrlKey && e.which == 66 && e.which == 66) {
      alert("Ctrl + B shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.which == 89) {
      alert("Ctrl + Alt + Y shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
      alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
    }
  };