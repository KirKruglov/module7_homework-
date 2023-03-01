/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.
Определите иерархию электроприборов. 
Включите некоторые в розетку. 
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает. 
*/

function Device (typeDevice) {
    this.typeDevice = typeDevice;
    this.type = "electric";
    this.amperage = "220Вт";
}

Device.prototype.turnOn = function (turnOn) {
    if (turnOn === "Yes") {
        this.turnOn = true;
    } else {
        this.turnOn = false;
    }
}

function Drill (brand, power, numberOfTurns, numberOfSpeeds, timeUncharged) {
    this.brand = brand;
    this.power = power;
    this.timeUncharged = timeUncharged;
    this.numberOfTurns = numberOfTurns;
    this.numberOfSpeeds = numberOfSpeeds;
}

Drill.prototype = new Device ("drill");

function Laptop (brand, power, screenSize, amoutOfRAM, timeUncharged) {
    this.brand = brand;
    this.power = power;
    this.screenSize = screenSize;
    this.amoutOfRAM = amoutOfRAM;
    this.timeUncharged = timeUncharged;
}

Laptop.prototype = new Device ("laptop");

function Lamp (brand, power) {
    this.brand = brand;
    this.power = power;
}

Lamp.prototype = new Device ("lamp");

function getPowerDevice (deviceOne, deviceTwo, deviceThree) {
    let powerDeviceOne = (deviceOne.turnOn === true) ? deviceOne.power : 0;
    let powerDeviceTwo = (deviceTwo.turnOn === true) ? deviceTwo.power : 0;
    let powerDeviceThree = (deviceThree.turnOn === true) ? deviceThree.power : 0;

    console.log(powerDeviceOne + powerDeviceTwo + powerDeviceThree);
}

const drill = new Drill ("Bosch", 600, 6000, 4, 18);
const laptop = new Laptop ("Lenovo", 500, "27d", "64Gb", 56);
const lamp = new Lamp ("LiHaq", 60);

drill.turnOn("Yes");
laptop.turnOn("Yes");
lamp.turnOn("No");

getPowerDevice (drill, laptop, lamp);
