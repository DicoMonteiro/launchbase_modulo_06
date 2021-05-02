// Async/await para atender o desafio de exibir no console a ordem certa dos dados e não aleatório
function numberDoubleAsyncAwait(number) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(console.log(number * 2))
        }, Math.floor(Math.random() * 100) + 1)
    })
}

async function printDoubleAsyncAwait() {
    await numberDoubleAsyncAwait(5);
    await numberDoubleAsyncAwait(10);
    await numberDoubleAsyncAwait(22);
    await numberDoubleAsyncAwait(2);
    await numberDoubleAsyncAwait(89);
}

// Validado na ordem correta passada:
// printDoubleAsyncAwait()


// Async/await para atender o desafio de dobrar o valor e somar mais outro

function somaNumerosAsyncAwait(first_number, second_number) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            const soma = (first_number * 2) + second_number;
            console.log(soma);
            resolve(soma);
        }, Math.floor(Math.random() * 100) + 1)
    })
}

async function printDoubleSumAsyncAwait() {
    let results;

    results = await somaNumerosAsyncAwait(5,0);
    results = await somaNumerosAsyncAwait(12, results);
    results = await somaNumerosAsyncAwait(2, results);
}

// Validado na ordem correta e exibindo o valor esperado:
printDoubleSumAsyncAwait()