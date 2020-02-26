let num1, num2, operator, state;
let display;

function reset () {
    state = "1";
    num1 = "0";
    num2 = "0";
    operator = null;
    display.value = "0";
}

function btnClick (object) {
    let click = object.value;
    if (click == '='){
        let res;
        switch (operator){
            case '+':
                res = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                res = parseFloat(num1) - parseFloat(num2);
                break;
            case 'X':
                res = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                if (num2 == 0){
                    display.value = "🚫 Impossible";
                }
                else{
                res = parseFloat(num1) / parseFloat(num2);
                }
                break;
        }
        display.value= res.toString();
        num1 = "0";
        num2 = "0";
        state = 1;
        return;
        
    }
    if (click == 'C'){
        reset();
        return;
    }
    if ((click == '+') || (click == '-') || (click == 'X') || (click == '/')) {
        operator = click;
        state = "2";
        return;
    }
    if((click =='.') || (click >= '0') && (click <= '9')) { 
        if (state == 1) {
            num1 += click;
            display.value = parseFloat(num1).toString();
        }
        else if (state == 2) {
            num2 += click;
            display.value = parseFloat(num2).toString();
        }
    }
}

function init() {
    display = document.getElementById ('display');
    reset ();
}