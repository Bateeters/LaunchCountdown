let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

do {
    const para = document.createElement('p');
    if(i === 10) {
        para.textContent += `Countdown ${i}`
    } else if (i === 0) {
        para.textContent += 'Blast off!'
    } else {
        para.textContent += `${i}...`
    }
    i--;
    output.appendChild(para);
} while (i >= 0);