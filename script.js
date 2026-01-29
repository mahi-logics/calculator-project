function numericButton(btn) {
    let num1 = document.querySelector('.js-num1');
    let num2 = document.querySelector('.js-num2');
    let operator = document.querySelector('.js-operator');

    if (num1.innerHTML[0] === '0') {
        num1.innerHTML = '';
    }

    if (num2.innerHTML[0] === '0') {
        num2.innerHTML = '';
    }

    if (btn === '+' || btn === '-' || btn === '*' || btn === '/') {
        num2.innerHTML = '';
        if (num1.innerHTML.length === 0) {
            num1.innerHTML = '0';
        };
    }


    if (operator.innerHTML != '') {

        if (num1.innerHTML.length === 0) {
            num1.innerHTML = '0';
            }

        switch (btn) {
            case 0:
                if (num2.innerHTML.length === 1 && num2.innerHTML[0] === '0') {
                    
                } else {
                    num2.innerHTML =  num2.innerHTML + '0';
                }
                break;
            case 1:
                num2.innerHTML =  num2.innerHTML + '1';
                break;
            case 2:
                num2.innerHTML =  num2.innerHTML + '2';
                break;
            case 3:
                num2.innerHTML =  num2.innerHTML + '3';
                break;
            case 4:
                num2.innerHTML =  num2.innerHTML + '4';
                break;
            case 5:
                num2.innerHTML =  num2.innerHTML + '5';
                break;
            case 6:
                num2.innerHTML =  num2.innerHTML + '6';
                break;
            
            case 7:
                num2.innerHTML =  num2.innerHTML + '7';
                break;
            
            case 8:
                num2.innerHTML =  num2.innerHTML + '8';
                break;
            
            case 9:
                num2.innerHTML =  num2.innerHTML + '9';
                break;
            case '.':
                num2.innerHTML =  num2.innerHTML + '.';
                break;
        } 
    } else {
        
        switch (btn) {

            case 0:
                if (num1.innerHTML.length === 1 && num1.innerHTML[0] === '0') {
                    
                } else {
                    num1.innerHTML =  num1.innerHTML + '0';
                }
                break;
            case 1:
                num1.innerHTML =  num1.innerHTML + '1';
                break;
            case 2:
                num1.innerHTML =  num1.innerHTML + '2';
                break;
            case 3:
                num1.innerHTML =  num1.innerHTML + '3';
                break;
            case 4:
                num1.innerHTML =  num1.innerHTML + '4';
                break;
            case 5:
                num1.innerHTML =  num1.innerHTML + '5';
                break;
            case 6:
                num1.innerHTML =  num1.innerHTML + '6';
                break;
            
            case 7:
                num1.innerHTML =  num1.innerHTML + '7';
                break;
            
            case 8:
                num1.innerHTML =  num1.innerHTML + '8';
                break;
            
            case 9:
                num1.innerHTML =  num1.innerHTML + '9';
                break;
            case '.':
                num1.innerHTML =  num1.innerHTML + '.';
                break;
        }
    }

    switch (btn) {
        case '+':
            operator.innerHTML = '+';
            break;
        case '-':
            operator.innerHTML = '-';
            break;
        case '*':
            operator.innerHTML = '×';
            break;
        case '/':
            operator.innerHTML = '÷';
            break;
    }
}


function result() {
    const num1 = document.querySelector('.js-num1').innerHTML;
    const num2 = document.querySelector('.js-num2').innerHTML;
    const stringOperator = document.querySelector('.js-operator').innerHTML;
    const result = document.querySelector('.js-result');

    
    if (num2.length === 0) {
        document.querySelector('.js-num2').innerHTML = '0';
    }

    switch (stringOperator) {
        case '+':
            result.innerHTML = Number(num1) + Number(num2);
            break;
        case '-':
            result.innerHTML = Number(num1) - Number(num2);
            break;
        case '×':
            result.innerHTML = Number(num1) * Number(num2);
            break;
        case '÷':
            result.innerHTML = Number(num1) /Number(num2);
            break;
    }
}


function del() {
    const num1 = document.querySelector('.js-num1').innerHTML;
    const num2 = document.querySelector('.js-num2').innerHTML;
    const stringOperator = document.querySelector('.js-operator').innerHTML;
    
    if (stringOperator != '' && num2.length === 0) {
        document.querySelector('.js-operator').innerHTML = '';
    } else if (stringOperator != '') {
        document.querySelector('.js-num2').innerHTML = num2.slice(0, -1);
    }else {
        document.querySelector('.js-num1').innerHTML = num1.slice(0, -1);
    }

    if (document.querySelector('.js-num1').innerHTML.length === 0 ) {
        document.querySelector('.js-num1').innerHTML = '0';
    }

}


function reset() {
    document.querySelector('.js-num1').innerHTML = '0';
    document.querySelector('.js-num2').innerHTML = '';
    document.querySelector('.js-operator').innerHTML = '';
    document.querySelector('.js-result').innerHTML = '0';
}