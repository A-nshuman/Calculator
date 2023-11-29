document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const display = document.querySelector('.screen');
    const btns = document.querySelectorAll('.btn');

    const clear = document.getElementById('clear');
    const bracket = document.getElementById('bracket');
    const equal = document.getElementById('equal');
    const period = document.getElementById('period');
    const plusMinus = document.getElementById('plus-minus');

    clear.addEventListener('click', () => {
        display.innerHTML = '';
    });

    plusMinus.addEventListener('click', () => {
        if (display.innerHTML === '') {
            display.innerHTML = '-';
        } else if (display.innerHTML === '-') {
            display.innerHTML = '';
        } else {
            if (display.innerHTML === '' + display.innerHTML) {
                display.innerHTML = '-' + display.innerHTML;
            } else if (display.innerHTML === '-' + display.innerHTML) {
                display.innerHTML = display.innerHTML;
            }
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
    
            if (oppList.includes(lastChar)) {
                display.innerHTML = display.innerHTML.slice(0, -1) + opp.innerHTML;
            } else {
                display.innerHTML += opp.innerHTML;
            }
        });
    });

    const nums = document.querySelectorAll('.nums');

    nums.forEach(num => {
        num.addEventListener('click', () => {
            display.innerHTML += num.innerHTML;
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.animation = 'buttonHover 0.3s ease-in-out forwards';
            setTimeout(() => {
                btn.style.animation = '';
            }, 300);
        });
    });
});