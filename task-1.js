/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

function getObjectParamets(data) {
    if (typeof data === "object") {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                console.log(`${key} = ${data[key]}`);
            }
        }
    } else {
        console.log("Введены не верные данные");
    }  
}

let exampleObject = {
    name:"Kirill",
    age:40,
    sex: "male"
}

getObjectParamets(exampleObject);