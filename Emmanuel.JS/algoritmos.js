function saludar(){
    console.log("Hola mundo");
    alert("Hello world");
}


// realizar un algoritmo  que realice una suma entre dos valores ingresados por el usuario


function sumar(){
    // declarar las variables necesarias para la ejecución del algoritmo 
    let n1 = 0;
    let n2 = 0;
    let suma = n1 + n2;
    // solicitar y capturar los valores ingresados por el usuario.
    n1 = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    n2 = parseInt(prompt("Por favor ingrese el segundo valor"));
    // realizar el procedimiento
    suma = n1 + n2;
    // imprimir el resultado
    console.log("El resultado de la suma es: "  + suma);
    alert("El resultado de la suma es: "  + suma);
}

// Algortimo que realice una suma, resta, ultiplicación y división entre dos valores ingresados por el usuario

function operaciones(){
    let val1 = 0;
    let val2 = 1;
    let resSuma = val1 + val2;
    let resResta = val1 - val2;
    let resMultiplicacion = val1 * val2;
    let resDivision = val1 / val2;

    val1 = parseInt(prompt("Ingrese el primer valor a operar."))
    val2 = parseInt(prompt("Ingrese el segundo valor a operar."))

    resSuma = val1 + val2;
    resResta = val1 - val2;
    resMultiplicacion = val1 * val2;
    resDivision = val1 / val2;

    console.log("El resultado de la suma es: " + resSuma);
    alert("El resultado de la suma es: " + resSuma);

    console.log("El resultado de la resta es: " + resResta);
    alert("El resultado de la resta es: " + resResta);

    console.log("El resultado de la multiplicación es: " + resMultiplicacion);
    alert("El resultado de la multiplicación es: " + resMultiplicacion);

    console.log("El resultado de la división es: " + resDivision);
    alert("El resultado de la división es: " + resDivision);
}

// Realizar un algoritmo que determine el cuadrado de un número ingresado por un usuario

function cuadrado(){
    let c1 = 0
    let resCuadrado = 0;

    c1 = parseInt(prompt("Ingrese el valor a operar."));

    resCuadrado = c1 * c1;

    console.log("El resultado del cuadrado es: " + resCuadrado);
    alert("El resultado del cuadrado es: " + resCuadrado);
}

// Realizar un algoritmo que determine el área de un triángulo a parti de la area y la base del triángulo

function area(){

    let base = 0;
    let altura = 0;
    let resArea = 0;

    base = parseInt(prompt("Ingrese el valor de la base"));
    altura = parseInt(prompt("Ingrese el valor de la altura"));

    resArea = (base * altura) / 2;
    
    console.log("El resultado del área es: " + resArea);
    alert("El resultado del área es: " + resArea);
}

// Realizar un algoritmo que determine la medida en kilómetros, metor y centímetros de un valor dado en pulgadas

function medidas(){

    let medPulgadas = 0;
    let medKilometros = 0;
    let medMetros = 0;
    let medCentímetros = 0;

    medPulgadas = parseInt(prompt("Ingrese el valor en pulgadas:"));

    medKilometros = medPulgadas * 0.0000254 ;
    medMetros = medPulgadas * 0.0254;
    medCentímetros = medPulgadas * 2.54;

    console.log("El valor en KILÓMETROS es de: " + medKilometros + " Km.");
    alert("El valor en KILÓMETROS es de: " + medKilometros + " Km.");

    console.log("El valor en METROS es de: " + medMetros + " m.");
    alert("El valor en METROS es de: " + medMetros + " m.");

    console.log("El valor en CENTÍMETROS es de: " + medCentímetros + " Cm.");
    alert("El valor en CENTÍMETROS es de: " + medCentímetros + " Cm.");

}

// Realice un algoritmo que pregunte al usuario a qué moneda quiere convertir el peso colombiano entre dolar, euro y yenes

function conversorMoneda () {

    let pesoColombiano = 0;
    let dolar = 0;
    let euro = 0;
    let yen = 0;
    let tipoMoneda;

    pesoColombiano = parseInt(prompt("Ingrese la cantidad en pesos colombianos a convertir:"));
    tipoMoneda = prompt("Indique si quiere convertirlo a: DOLAR, EURO O YEN (Específiquelo en MAYÚSCULAS)");


    switch (tipoMoneda) {
        case 'DOLAR':
                dolar = (pesoColombiano * 1) / 4000;
                console.log("El valor en dólares es: " + dolar);
                alert("El valor en dólares es: " + dolar);                
            break;
        case 'EURO':
            euro = (pesoColombiano * 1) / 4500;
            console.log("El valor en euros es: " + euro);
            alert("El valor en euros es: " + euro); 
            break
        case 'YEN':
            yen = (pesoColombiano * 1) / 28;
            console.log("El valor en yenes es: " + yen);
            alert("El valor en yenes es: " + yen);            
            break
        default:
                console.log('Específiquelo en MAYÚSCULAS: DOLAR, EURO Y YEN');
                alert('Específiquelo en MAYÚSCULAS: DOLAR, EURO Y YEN')
            break;
    }
}

// Algoritmo que determine si un número es par o impar

function parImpar (){

    let numIngresado = 0;

    numIngresado  =  parseInt(prompt("Ingrese el número a descifrar si es par o impar"));

    if (numIngresado % 2 == 0) {
        console.log('El número es par');
        alert('El número es par')       
    } else {
        console.log('El número es impar');
        alert('El número es impar')  
    }

}

// Algoritmo que determine el mayor entre dos números ingresados por el usuario

function mayorMenor(){

    let num1 = 0;
    let num2 = 0;

    num1 = parseInt(prompt("Ingrese el primer número"));
    num2 = parseInt(prompt("Ingrese el segundo número"));    

    if (num1 > num2) {
        console.log('El mayor es: ' + num1);
        alert('El mayor es: ' + num1);          
    } else if (num2 > num1){
        console.log('El mayor es: ' + num2);
        alert('El mayor es: ' + num2);           
    } else {
        console.log('Ingrese un número válido');
        alert('Ingrese un número válido');          
    }
}

// Algoritmo que determine el menor entre tres números ingresados por el usuario

function numMenor(){

    let val1 = 0;
    let val2 = 0;
    let val3 = 0;

    val1 = parseInt(prompt("Ingrese el primer número"));
    val2 = parseInt(prompt("Ingrese el segundo número"));
    val3 = parseInt(prompt("Ingrese el tercer número"));    

    if (val1 < val2 && val1 < val3) {
        console.log('El menor ' + val1);
        alert('El menor es: ' + val1);          
    } else if (val2 < val1 && val2 < val3){
        console.log('El menor es: ' + val2);
        alert('El menor es: ' + val2);           
    } else if (val3 < val1 && val3 < val2){
        console.log('El menor es: ' + val3);
        alert('El menor es: ' + val3);          
    }
}    

// El colegio ABC requiere un sistema que le permita validar a x estudiante si aprobó o reprobó x materia, teniendo en cuenta que son 9 notas del 1 al 10 y se aprueba con una nota de 6.1 en adelante

function promNota (){

    let nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9 = 0;
    let promedio;

    nota1 = parseInt(prompt("Ingrese la primer nota"));
    nota2 = parseInt(prompt("Segunda nota"));
    nota3 = parseInt(prompt("Tercer nota")); 
    nota4 = parseInt(prompt("Cuarta nota")); 
    nota5 = parseInt(prompt("Quinta nota"));
    nota6 = parseInt(prompt("Sexta nota"));  
    nota7 = parseInt(prompt("Séptima nota")); 
    nota8 = parseInt(prompt("Octava nota"));
    nota9 = parseInt(prompt("Novena nota")); 

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9) / 9;

    if (promedio > 6) {
        console.log('Pasó con: ' + promedio);
        alert('Pasó con: ' + promedio);
    } else {
        console.log('Perdió con: ' + promedio);
        alert('Perdió con: ' + promedio);        
    }

}

// Un individuo desea intvertir su capital en un banco y requieresaber cuánto dinero ganará después de n número de años ,teniendo en cuenta que el banco paga un interés mensual de 0,7%

function ganancias (){

    let capitalInvertido = 0;
    let anos = 0;
    let ganancias = 0;

    capitalInvertido = parseInt(prompt("Ingrese el capital invertido"));
    anos = parseInt(prompt("Ingrese la cantidad de años que lleva invertido"));

    ganancias = (anos * 12) * (capitalInvertido * 0.7);

    console.log("Las ganancias son de: " + ganancias );
    alert("Las ganancias son de: " + ganancias );

}