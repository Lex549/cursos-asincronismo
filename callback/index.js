function suma(num1, num2) {
    return num1 + num2;
}

function calcular(num1, num2, sumarNumeros) {
    return sumarNumeros(num1,num2);
};

console.log(calcular(2, 2, suma));

setTimeout(function () {
    console.log('Hello javaScript');
}, 5000);

function saludar(nombre){
    console.log(`Hello ${nombre}`)
}

setTimeout(saludar, 2000, 'Lex');