let num1, num2, operat, estado;
let disp;

function reset () {
    estado = "1";
    num1 = "0";
    num2 = "0";
    operat = null;
    disp.value = "0";
}

function btnClick (object) {
    var click = object.value;
    if (click == '='){
        let res;
        switch (operat){
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
                    disp.value = "🚫"
                }
                else{
                res = parseFloat(num1) / parseFloat(num2);
                }
                break;
        }
        disp.value= res.toString();
        num1 = "0";
        num2 = "0";
        estado = 1;
        return;
        
    }
    if (click == 'C'){
        reset();
        return;
    }
    if ((click == '+') || (click == '-') || (click == 'X') || (click == '/')) {
        operat = click;
        estado = "2";
        return;
    }
    if((click =='.') || (click >= '0') && (click <= '9')) { 
        if (estado == 1) {
            num1 += click;
            disp.value = parseFloat(num1).toString();
        }
        else if (estado == 2) {
            num2 += click;
            disp.value = parseFloat(num2).toString();
        }
    }
}

function init() {
    disp = document.getElementById ('display');
    reset ();
}
