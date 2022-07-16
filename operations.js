const log = (...args) => { console.log(...args); }

const sumar = (a, b) => { log(`La suma es: ${a + b}`); }
const restar = (a, b) => { log(`La resta es: ${a - b}`); }
const multiplicar = (a, b) => { log(`La multiplicación es: ${a * b}`); }
const dividir = (a, b) => {  (b == 0) ? log("No se puede dividir por 0") : log(`La división es: ${a / b}`);}

const factorial = (a) => {
    let factorial = 2;
    for(let i=3; i<=a; i++){ factorial *= i; }
    log(`El factorial es: ${factorial}`);
}

const primos = (a, b) => {
    let numMenor;
    (a < b) ? numMenor = a : numMenor = b;

    for(let i=2; i<numMenor; i++){
        if(a % i == 0 && b % i == 0){
            log(`No son primos relativos`);
            return;
        }
    }
    log(`Si son primos relativos`);
}

exports.log = log;
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
exports.factorial = factorial;
exports.primos = primos;