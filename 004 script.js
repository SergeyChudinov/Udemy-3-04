const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 1000);
//     timerId = setInterval(logger, 1000);
// });

// function logger () {
//     console.log('text');
//     i++;
//     if (i == 3) {
//         clearInterval(timerId);
//     }
// }

// let index = 0;
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
//     index++;
//     if (index == 5) {
//         clearTimeout(id);
//     }
// }, 1000);

// function myAnimation() {
//     let marginLeft = 0;
//     let marginTop = 0;
//     const box = document.querySelector('.box');
//     const timerBox = setInterval(move, 10);
//     function move() {
//         if (marginTop < 150) {
//             marginLeft += 2;
//             marginTop += 1;  
//         } else {
//             marginLeft -= 2;
//             marginTop += 1;
//         }
//         box.style.left = `${marginLeft}px`;
//         box.style.top = `${marginTop}px`;
//         if (marginTop == 300) {
//             marginLeft = 0;
//             marginTop = 0;
//             // clearInterval(timerBox);
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);


let obj = {
    direction: 'right-down',

}
function myAnimation() {
    let marginLeft = 0;
    let marginTop = 0;
    const box = document.querySelector('.box');
    const timerBox = setInterval(move, 5);
    let a = Math.floor(Math.random()*9 + 1);
    let b = Math.floor(Math.random()*9 + 1);
    function move() {
        if (marginLeft < 0 || marginLeft > 457 || marginTop < 0 || marginTop > 621) {
            // clearInterval(timerBox);
        }
        // console.log('marginLeft', marginLeft);
        // console.log('marginTop', marginTop);
        if (obj.direction == 'right-down') {
            rightDown();
        } 
        if (obj.direction == 'left-down') {
            leftDown();
        } 
        if (obj.direction == 'right-up') {
            rightUp();
        }
        if (obj.direction == 'left-up') {
            leftUp();
        }
    }

    function rightDown() {
        marginLeft += a;
        marginTop += b;
        box.style.left = `${marginLeft}px`;
        box.style.top = `${marginTop}px`; 
        if (marginLeft >= 457 && marginTop >= 621) {
            obj.direction = 'left-up';
        } else if (marginLeft >= 457) {
            obj.direction = 'left-down';
        } else if (marginTop >= 621) {
            obj.direction = 'right-up';
        }
    }
    function leftDown() {
        marginLeft -= a;
        marginTop += b;
        box.style.left = `${marginLeft}px`;
        box.style.top = `${marginTop}px`;
        if (marginLeft <= 0 && marginTop >= 621) {
            obj.direction = 'right-up';
        } else if (marginLeft <= 0) {
            obj.direction = 'right-down';
        } else if (marginTop >= 621) {
            obj.direction = 'left-up';
        }
    }
    function rightUp() {
        marginLeft += a;
        marginTop -= b;
        box.style.left = `${marginLeft}px`;
        box.style.top = `${marginTop}px`;
        if (marginLeft >= 457 && marginTop <= 0) {
            obj.direction = 'left-down';
        } else if (marginLeft >= 457) {
            obj.direction = 'left-up';
        } else if (marginTop <= 0) {
            obj.direction = 'right-down';
        }
    }
    function leftUp() {
        marginLeft -= a;
        marginTop -= b;
        box.style.left = `${marginLeft}px`;
        box.style.top = `${marginTop}px`;
        if (marginLeft <= 0 && marginTop <= 0) {
            obj.direction = 'right-down';
        } else if (marginLeft <= 0) {
            obj.direction = 'right-up';
        } else if (marginTop <= 0) {
            obj.direction = 'left-down';
        }
    }
    // function generateRandomNumber() {
    //     a = Math.floor(Math.random()*10);
    //     b = Math.floor(Math.random()*10);
    // }
}
btn.addEventListener('click', myAnimation);


