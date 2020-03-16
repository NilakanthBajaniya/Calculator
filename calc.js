
var $ = function (id) { return document.getElementById(id); }

let executefunctions={"addition":"makeAddtion","multiplication":"multiplication"};

let functions={
    "addition":addition
}

function addition(input1,input2){
    return input1+input2;
}

function executeFunction(string,inputvalue1,inputvalue2){
    return functions["addition"](inputvalue1,inputvalue2);
}


function getPercent(x, percent) {

    return x * percent / 100;
}

function checkForSignBeforeParenthesis(value) {

    var charAtLength = value[value.length - 1];
    if (charAtLength == '+' || charAtLength == '-' || charAtLength == '*' || charAtLength == '/') {
        return true;
    } else {
        return false;
    }

}

function parenthesis() {

    var value = $('display').value;
    if (this.value == '(') {

        if (value == '0') {

            $('display').value = '(';
        }
        else if (value.length == 1) {

            debugger;
            alert('Enter a valid input');

        } else if (value.length > 1) {

            if (checkForSignBeforeParenthesis(value) && value[value.length - 1] != ')') {

                $('display').value += '(';
                disableButtonsByName('btnMath');

            } else {
                debugger
                alert('Enter a valid input');
            }

        }
    } else if (this.value == ')') {

        if (value.length > 1 && value != '0' && !checkForSignBeforeParenthesis(value) && value[value.length - 1] != '(') {
            $('display').value += ')';
        } else {
            alert('Enter a valid input');
        }

    }
}

function printPercent() {
    if ($('display').value != '0' && parseInputString($('display').value)) {

        var value = $('display').value;
        var i = value.length - 1;
        for (i; i != 0; i--) {

            if (isNaN(value[i]))
                break;
        }

        var evalString = value.substring(0, i);
        var percent = parseFloat(value.substring(i + 1, value.length));

        if (value[i] == '+') {

            $('display').value = eval(evalString) + getPercent(eval(evalString), percent);
        }

        else if (value[i] == '-') {

            $('display').value = eval(evalString) - getPercent(eval(evalString), percent);

        } else if (value[i] == '*') {

            $('display').value = getPercent(eval(evalString), percent);

        } else if (value[i] == '/') {

            $('display').value = eval(evalString) / (percent / 100);

        } else {
            alert("Enter a valid input");
        }


    }
}

function printOperation(operation) {

    event.preventDefault();

    if (operation == 'PI') {

        if ($('display').value != '0' && parseInputString($('display').value)) {

            $('display').value = eval('Math.PI *' + $('display').value);

        } else if ($('display').value == '0') {
            $('display').value = eval('Math.PI');
        } else {
            debugger
            alert('Enter a valid input');
        }
    } else if (operation == 'power') {

        if ($('display').value != '0' && parseInputString($('display').value)) {

            disableButtonsByName('btnOpps');
            disableButtonsByName('btnMath');
            disableButtonsByName('btnTrigonometry');

            $('display').value = eval($('display').value) + '^';

            alert('Enter the power and hit "=" for result');

        } else {
            debugger
            alert('Enter a valid input');
        }
    } else if (operation == 'log') {

        if ($('display').value != '0' && parseInputString($('display').value)) {

            $('display').value = Math.log(eval($('display').value));

        } else {
            debugger
            alert('Enter a valid input');
        }
    } else if (operation == 'root') {

        if ($('display').value != '0' && parseInputString($('display').value)) {

            $('display').value = Math.sqrt(eval($('display').value));

        } else {
            debugger
            alert('Enter a valid input');
        }
    } else if (operation == 'square') {

        if ($('display').value != '0' && parseInputString($('display').value)) {

            $('display').value = eval($('display').value) * eval($('display').value);

        } else {
            debugger
            alert('Enter a valid input');
        }
    }

};

function executeMathFunctions() {

    if (parseInputString($('display').value)) {

        if (this.value == 'tan') {

            $('display').value = Math.tan(eval($('display').value));

        } else if (this.value == 'cos') {

            $('display').value = Math.cos(eval($('display').value));

        } else if (this.value == 'sin') {

            $('display').value = Math.sin(eval($('display').value));

        } else if (this.value == 'x&#50;') {

            $('display').value = eval($('display').value) * eval($('display').value);
        }
    }
    else {
        debugger
        alert('Enter valid input!!');
    }
};

function parseInputString(input) {

    var countOpenParenthesis = 0;
    var countCloseParenthesis = 0;

    for (var i = 0; i < input.length && input.length > 0; i++) {

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

};

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
            var value = $('display').value;

            if (check && value.includes('^')) {

                var arr = value.split('^');

                var base = parseFloat(arr[0]);
                var power = parseFloat(arr[1]);

                if (base != null && power != null) {
                    while (power != 1) {
                        base *= base;
                        power--;
                    }
                    $('display').value = base;
                } else {
                    debugger
                    alert("Enter valid input");
                }
                enableButtonsByName('btnOpps');
                enableButtonsByName('btnMath');
                enableButtonsByName('btnTrigonometry');

            }
            else if (check) {
                $('display').value = eval($('display').value);
            }
            else {
                debugger
                alert('Enter Valid Input');
            }

        } catch (err) {
            debugger
            alert('Enter Valid Input');
        }
    }
};

function appendInput() {
    $('display').value == '0' ? $('display').value = this.value : $('display').value += this.value;
    !$('display').value.includes('^') ? enableButtonsByName('btnMath') : true;
};

function appendArithmeticSymbol() {

    if (this.hasAttribute('disabled')) {
        debugger;
        alert('You can not enter Two arithmetic signs together\n');

    } else {
        $('display').value == '0' ? alert('Enter valid input') : $('display').value += this.value;
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
    var trigonoButtons = document.getElementsByName('btnTrigonometry');
    var parenthesisbuttons = document.getElementsByName('btnParenthesis');

    for (var i = 0; i < numberButtons.length; i++)
        numberButtons[i].onclick = appendInput;

    for (var i = 0; i < arithmeticButtons.length; i++)
        arithmeticButtons[i].onclick = appendArithmeticSymbol;

    for (var i = 0; i < topButtons.length; i++)
        topButtons[i].onclick = executeTopButtons;

    for (var i = 0; i < trigonoButtons.length; i++)
        trigonoButtons[i].onclick = executeMathFunctions;

    for (var i = 0; i < parenthesisbuttons.length; i++)
        parenthesisbuttons[i].onclick = parenthesis;
};
