// Promisse para atender o desafio de exibir no console a ordem certa dos dados e não aleatório
function numberDoublePromise(number){
    return new Promise(function(resolve) {
        setTimeout(function() {
              const total = number * 2
              console.log(total)
              resolve(total)
            }, 
            Math.floor(Math.random() * 100) + 1
          )
    })
}

function printDoublePromise() {
    numberDoublePromise(5).then(function () {
        numberDoublePromise(10).then(function () {
            numberDoublePromise(22).then(function () {
                numberDoublePromise(1).then(function () {
                    numberDoublePromise(89)
                })
            })
        })
    })
}

// Validado na ordem correta passada:
// printDoublePromise()

// Promisse para atender o desafio de dobrar o valor e somar mais outro

function somaNumerosPromise(first_number, second_number) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            const soma = (first_number * 2) + second_number;
            console.log(soma);
            resolve(soma)
        }, Math.floor(Math.random() * 100) + 1)
    })
}

function printDoubleSumPromise() {
    let results;

    results = somaNumerosPromise(5, 0).then(function(results) {
        results = somaNumerosPromise(12, results).then(function(results) {
            results = somaNumerosPromise(2, results).then(function() {
            })
        })
    })
}

// Validado na ordem correta e exibindo o valor esperado:
printDoubleSumPromise()