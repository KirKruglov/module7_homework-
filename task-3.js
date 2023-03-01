/* Написать функцию, которая создает пустой объект, но без прототипа.*/

function createObject() {
    const newObject = {};
    newObject.__proto__ = null;
    return newObject;
}

console.log(createObject);