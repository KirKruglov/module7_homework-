/* Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

function objectValueChek(str, data) {
    if (typeof str === "string" && typeof data === "object") {
        return str in data;
        
    } else {
        console.log("Введены не верные данные");
    }
} 

let exampleItem = "sex";

let exampleObject = {
    name:"Kirill",
    age:40,
    sex: "male"
}

console.log(objectValueChek(exampleItem, exampleObject));