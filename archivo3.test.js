const{
    saludo,
    colors,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    esVerdadero,
    tablaDelSeis,
    tieneTresDigitos,
    doWhile,
} = require("./index3.js");

describe("saludo(idioma)",function(){
    it("Deberia devolver el idioma",function(){
        expect(saludo("aleman")).toBe("Guten Tag!");
        expect(saludo("mandarin")).toBe("Ni Hao!");
        expect(saludo("ingles")).toBe("Hello!");
        expect(saludo("español")).toBe("Hola!");
    })
})
describe('colors(color)', function () {
    it("Deberia devovernos los colores", function(){
        expect(colors("blue")).toBe("This is blue");
        expect(colors("negro")).toBe("Color not found");
        expect(colors("red")).toBe("This is red");
        expect(colors("green")).toBe("This is green");
        expect(colors("orange")).toBe("This is orange");
    })
})
describe('fizzBuzz(numero)', function () {
    it("Deberia devolvernos las respuestas indicadas por cada condición", function(){
        expect(fizzBuzz(15)).toBe("fizzbuzz");
        expect(fizzBuzz(9)).toBe("fizz");
        expect(fizzBuzz(20)).toBe("buzz");
        expect(fizzBuzz(11)).toBe(11);
    })
})
describe('operadoresLogicos(num1, num2, num3)', function () {
    it("Deberia devolver la respuesta indicada para cada condición", function(){
        expect(operadoresLogicos(6, 4, 1)).toBe("Numero 1 es mayor y positivo");
        expect(operadoresLogicos(3, 4, -5)).toBe("Hay negativos");
        expect(operadoresLogicos(3, 4, 8)).toBe(9);
        expect(operadoresLogicos(0, 0, 0)).toBe("Error");
        expect(operadoresLogicos(1, 1, 1)).toBe(false);
    })
})
describe('esPrimo(numero)', function () {
    it("Deberia devolvernos si el numero ingresado es primo", function(){
        expect(esPrimo(5)).toBe(true);
        expect(esPrimo(6)).toBe(false);
    })
})
describe('esVerdadero(valor)', function () {
    it("Deberia devolver si el valor recibio es verdadero o falso", function(){
        expect(esVerdadero(true)).toBe("Soy Verdadero");
        expect(esVerdadero(false)).toBe("Soy falso");
    })
})
describe('tablaDelSeis()', function () {
    it("Deberia devolver la tabla del 6", function(){
        expect(tablaDelSeis()).toEqual([0,6,12,18,24,30,36,42,48,54,60]);
    })
})
describe('tieneTresDigitos(numero)', function () {
    it("Deberia devolver si el número tiene 3 digitos", function(){
        expect(tieneTresDigitos(500)).toBe(true);
        expect(tieneTresDigitos(-300)).toBe(true);
        expect(tieneTresDigitos(34)).toBe(false);
        expect(tieneTresDigitos(2700)).toBe(false);
    })
})
describe('doWhile(numero)', function () {
    it("Deberia devolver el valor recibido en 5 hasta un límite de 8 veces", function(){
        expect(doWhile(2)).toBe(42);
    })
})