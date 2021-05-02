// Callback para atender o desafio de exibir no console a ordem certa dos dados e não aleatório
function numberDoubleCallback(number, callback) {
    setTimeout (
        () => {
            let double = number * 2;
            callback(null, double)
        },
        Math.floor(Math.random() * 100) + 1
    )
    
}

function printDoubleCallback() {
    numberDoubleCallback(5, function(err, result) {
        if(err) {
            console.log(err);
        }
        console.log(result);
        numberDoubleCallback(10, function(err, result) {
            if(err) {
                console.log(err);
            }
            console.log(result);
            numberDoubleCallback(22, function(err, result) {
                if(err) console.log(err);
                console.log(result);
                numberDoubleCallback(1, function(err, result) {
                    if(err) console.log(err);
                    console.log(result);
                    numberDoubleCallback(89, function(err, result) {
                        if(err) console.log(err);
                        console.log(result);
                    })
                })
            })
        })
    })
}

// Validado na ordem correta passada:
// printDoubleCallback()


// Callback para atender o desafio de dobrar o valor e somar mais outro

function somaNumerosCallback(first_number, second_number, callback) {
    const soma = (first_number * 2) + second_number;
    setTimeout (
        () => {
            console.log(soma);
            callback(null, soma)
        },
        Math.floor(Math.random() * 100) + 1
    )
}

function printDoubleSumCallback() {
    let result;

    result = somaNumerosCallback(5,0, function(err, result) {
        if(err) {
            console.log(err);
        }
        result = somaNumerosCallback(12, result, function(err, result) {
            if(err) {
                console.log(err);
            }
            result = somaNumerosCallback(2, result, function(err, result) {
                if(err) {
                    console.log(err);
                }
            })

        })
    })
}

// Validado na ordem correta e exibindo o valor esperado:
printDoubleSumCallback()