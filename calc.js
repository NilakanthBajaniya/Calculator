
var $ = function (id) { return document.getElementById(id); }

function executeMathFunctions(value) {

    if (true) {

        if (this.value == 'tan') {
            $('display').value = Math.tan(eval($('display').value));
        } else if (this.value == 'cos') {
            $('display').value = Math.cos(eval($('display').value));
        } else if (this.value == 'sin') {
            $('display').value = Math.sin(eval($('display').value));
        } else if (this.value == 'x&#50;') {
            //$('display').value = Math.(eval($('display').value));
        }
    }
}


function parseInputString(input) {

    input = toString(input);
    var countOpenParenthesis = 0;
    var countCloseParenthesis = 0;

    for (var i = 0; i < input.length; i++) {

        if (input[i] == '(') {
            countOpenParenthesis++;
        }
        else if (input[i] == ')') {
            countCloseParenthesis++;
        }
    }

    if (countOpenParenthesis == countCloseParenthesis && input != '')
        return true;
    else
        return false;

}

function executeTopButtons() {

    if (this.value == 'C') {
        $('display').value = '0';
    }
    else if (this.value == '<--') {

        if ($('display').value != '0' && $('display').value != '') {
            var display = $('display').value;
            $('display').value = display.substring(0, display.length - 1);
        }

    }
    else if (this.value == '=') {

        try {

            var check = parseInputString($('display').value);

            if (check) {
                $('display').value = eval($('display').value);
            }
            else {
                alert('Enter Valid Input');
            }

        } catch (err) {
            alert('Enter Valid Input');
        }
    }
}

function appendInput() {
    $('display').value == '0' ? $('display').value = this.value : $('display').value += this.value;
    enableButtonsByName('btnMath');
};

function appendArithmeticSymbol() {

    if (this.value == '(') {

    }

    if (this.hasAttribute('disabled')) {
        alert('You can not enter Two arithmetic signs together\n');

    } else {
        $('display').value == '0' ? $('display').value = this.value : $('display').value += this.value;
        disableButtonsByName('btnMath');
    }
};

function disableButtonsByName(name) {

    var arithmeticButtons = document.getElementsByName(name);

    for (var i = 0; i < arithmeticButtons.length; i++) {

        arithmeticButtons[i].setAttribute('disabled', 'disabled');
    }
};

function enableButtonsByName(name) {

    var arithmeticButtons = document.getElementsByName(name);

    for (var i = 0; i < arithmeticButtons.length; i++) {

        arithmeticButtons[i].hasAttribute('disabled') ? arithmeticButtons[i].removeAttribute('disabled') : true;
    }
};

window.onload = function () {

    var numberButtons = document.getElementsByName('btnNum');
    var arithmeticButtons = document.getElementsByName('btnMath');
    var topButtons = document.getElementsByName('btnTop');

    for (var i = 0; i < numberButtons.length; i++)
        numberButtons[i].onclick = appendInput;

    for (var i = 0; i < arithmeticButtons.length; i++)
        arithmeticButtons[i].onclick = appendArithmeticSymbol;

    for (var i = 0; i < topButtons.length; i++)
        topButtons[i].onclick = executeTopButtons;
};