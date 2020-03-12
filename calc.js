
var $ = function (id) { return document.getElementById(id); }


function appendInput() {
    $('display').value == '0' ? $('display').value = this.value : $('display').value += this.value;
};

window.onload = function () {

    var numberButton = document.getElementsByName('btnNum');
    //var arithmeticButton = document.getElementsByName();

    for (var i = 0; i < numberButton.length; i++)
        numberButton[i].onclick = appendInput;
};