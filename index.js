const opers = require("./operations")
const log = require("./operations").log

const question = "\nElije una opción a realizar (1, 2, 3, 4, 5, 6, 7): \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir \n5. Factorial \n6. Primos relativos \n7. Salir"

log(question)

let action = 1, opcion, numbers;

process.openStdin().on("data", (d) => { //Captura la entrada (ciclo, se detiene con "process.exit()")
    if(action == 1){
        opcion = d.toString().trim()
        if(opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4" && opcion != "5" && opcion != "6" && opcion != "7"){
            log("\n¡¡Opción inválida!!")
            log(question)
        }else if(opcion == "0"){
            log(question)
        }else if(opcion == "5"){
            action++
            log("\nIngresa un numero para calcular el factorial (Si se ingresan mas, se tomara el primer numero digitado):")
        }else if(opcion != "7"){
            action++
            log("\nIngresa dos numeros separados por un ESPACIO para realizar la operacion (Si se ingresan mas, se tomaran los dos primeros numeros digitados):")
        }else{
            log("\nGracias por usar la calculadora :)\n")
            process.exit()
        }
    }else{
        numbers = d.toString().trim().split(" ")
        let a = parseInt(numbers[0])
        let b = parseInt(numbers[1])

        switch(opcion) {
            case "1": opers.sumar(a, b); break;
            case "2": opers.restar(a, b); break;
            case "3": opers.multiplicar(a, b); break;
            case "4": opers.dividir(a, b); break;
            case "5": opers.factorial(a); break;
            case "6": opers.primos(a, b); break;
        }
        
        let setTime = setInterval(() => {
            log("\nEjecucion reiniciada...")
            clearInterval(setTime)
            action--
            log(question)
        },2000)
    }
})