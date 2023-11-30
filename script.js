document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const display = document.querySelector('.screenDisp');
    const btns = document.querySelectorAll('.btn');

    const clear = document.getElementById('clear');
    const bracket = document.getElementById('bracket');
    const equal = document.getElementById('equal');
    const period = document.getElementById('period');
    const plusMinus = document.getElementById('plus-minus');
    const backspace = document.getElementById('backSpace');

    clear.addEventListener('click', () => {
        display.innerHTML = '';
    });

    backspace.addEventListener('click', () => {
        display.innerHTML = display.innerHTML.slice(0, -1);
    });

    let numEnd = false;

    period.addEventListener('click', () => {
        if (display.innerHTML === '') {
            display.innerHTML += '0.';
        } else if (display.innerHTML.endsWith('0.')) {
            display.innerHTML += '';
        } else {
            do {
                display.innerHTML += '.';
                // numEnd = true;
            } while (numEnd === true)
        }
        // else if (display.innerHTML.endsWith('.')) {
        //     display.innerHTML += '';
        // } else {
        //     display.innerHTML += '.';
        // }
    });

    plusMinus.addEventListener('click', () => {
        if (display.innerHTML === '') {
            display.innerHTML = '-';
        } else if (display.innerHTML === '-') {
            display.innerHTML = '';
        }
    });

    let paranthesisOpen = false;

    bracket.addEventListener('click', () => {
        if (display.innerHTML === '' || paranthesisOpen === false) {
            display.innerHTML += '(';
            paranthesisOpen = true;
        } else if (paranthesisOpen === true) {
            display.innerHTML += ')';
            paranthesisOpen = false;
        }
    });

    const arithOpp = document.querySelectorAll('.arith');
    var oppList = [
        document.getElementById('percentage').innerHTML,
        document.getElementById('divide').innerHTML,
        document.getElementById('multiply').innerHTML,
        document.getElementById('subtract').innerHTML,
        document.getElementById('add').innerHTML,
        // document.getElementById('period').innerHTML
    ];

    arithOpp.forEach(opp => {
        opp.addEventListener('click', () => {
            const lastChar = display.innerHTML.slice(-1);
            // numEnd = true;

            if (display.innerHTML === '') {
                display.innerHTML += '';
            } else {
                if (oppList.includes(lastChar)) {
                    display.innerHTML = display.innerHTML.slice(0, -1) + opp.innerHTML;
                } else {
                    display.innerHTML += opp.innerHTML;
                }
            }
        });
    });

    const nums = document.querySelectorAll('.nums');

    nums.forEach(num => {
        num.addEventListener('click', () => {
            display.innerHTML += num.innerHTML;
            // numEnd = false;
        });
    });

    function buttonPress(btn) {
        btn.style.animation = 'buttonPress 0.3s ease-in-out forwards';
        // setTimeout(() => {
        //     btn.style.animation = '';
        // }, 300);
        btn.addEventListener('animationend', () => {
            btn.style.animation = '';
        });
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            buttonPress(btn);
        });
    });

    document.addEventListener('keyup', (event) => {
        display.focus();
        if (event.key === 'Escape') {
            display.innerHTML = '';
            buttonPress(document.getElementById('clear'));
        } else if (event.key === 'Enter') {
            display.innerHTML = eval(display.innerHTML);
            buttonPress(document.getElementById('equal-to'));
        } else if (event.key === 'Backspace') {
            display.innerHTML = display.innerHTML.slice(0, -1);
            // buttonPress(document.getElementById('delete'));
        }
    });
});