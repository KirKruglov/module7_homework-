/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.
Определите иерархию электроприборов. 
Включите некоторые в розетку. 
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает. 

Переписать консольное приложение из юнита на классы.
*/

class Device {
    constructor (typeDevice) {
        this.typeDevice = typeDevice;
        this.type = "electric";
        this.amperage = "220Вт";
    }

    turnOn (turnOn) {
        if (turnOn === "Yes") {
            this.turnOn = true;
        } else {
            this.turnOn = false;
        }
    }
}

class Drill extends Device {
    constructor (typeDevice, brand, power, numberOfTurns, numberOfSpeeds, timeUncharged, ) {
        super(typeDevice);
        this.brand = brand;
        this.power = power;
        this.timeUncharged = timeUncharged;
        this.numberOfTurns = numberOfTurns;
        this.numberOfSpeeds = numberOfSpeeds;
    }

    getInfoPower (){
        let drillInfo = (this.turnOn === true) ? console.log(this.power) : console.log(0);
        return drillInfo;
      }
}

class Laptop extends Device {
    constructor (typeDevice, brand, power, screenSize, amoutOfRAM, timeUncharged) {
        super(typeDevice);
        this.brand = brand;
        this.power = power;
        this.screenSize = screenSize;
        this.amoutOfRAM = amoutOfRAM;
        this.timeUncharged = timeUncharged;
    }

    getInfoPower (){
        let laptopInfo = (this.turnOn === true) ? console.log(this.power) : console.log(0);
        return laptopInfo;
      }
}

class Lamp extends Device {
    constructor (typeDevice, brand, power) {
        super(typeDevice);
        this.brand = brand;
        this.power = power;
    }

    getInfoPower (){
        let lampInfo = (this.turnOn === true) ? console.log(this.power) : console.log(0);
        return lampInfo;
      }
}


const drill = new Drill ("drill", "Bosch", 600, 6000, 4, 18);
const laptop = new Laptop ("laptop", "Lenovo", 500, "27d", "64Gb", 56);
const lamp = new Lamp ("lamp", "LiHaq", 60);


drill.turnOn("Yes");
laptop.turnOn("Yes");
lamp.turnOn("No");

function getPowerDevice (deviceOne, deviceTwo, deviceThree) {
    let powerDeviceOne = (deviceOne.turnOn === true) ? deviceOne.power : 0;
    let powerDeviceTwo = (deviceTwo.turnOn === true) ? deviceTwo.power : 0;
    let powerDeviceThree = (deviceThree.turnOn === true) ? deviceThree.power : 0;

    console.log(powerDeviceOne + powerDeviceTwo + powerDeviceThree);
}

getPowerDevice(drill, laptop, lamp);