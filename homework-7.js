// Задание №3

function weather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

weather("Москва", 20);
weather("Челябинск", 15);


// Задание №4
const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    } else if (speed < LIGHT_SPEED) {
        console.log("Субсветовая скорость");
    } else { 
        console.log("Скорость света");
    }
}

 checkSpeed (150000000);
 checkSpeed (299792458);
 checkSpeed (300000000);


// Задание №5
const chockolate = "Шоколад Альпен Гольд"
const price = 70

function buyChockolate (budget) {
    if (budget >= price) {
        console.log(`${chockolate} приобретён. Спасибо за покупку!`);
    } else {
        const difference = price - budget;
        console.log(`Вам не хватает ${difference}$, пополните баланс`);
    }
}
  
buyChockolate (70);
buyChockolate (100);
buyChockolate (50);


// Задание №6
function winFight (score) {
    const winningScore = 15;
    if(score >= winningScore) {
        console.log(`Поздравляю, ты выиграл своего соперника, набрав ${winningScore} баллов`);
    } else {
        console.log(`К сожалению, ты проиграл, не набрав ${winningScore} баллов, в следующий раз вернёшься сильнее!`);
    }
}

winFight (15)
winFight (13)

// Задание №7
let favouritePhone = "Iphone 16 Pro Max"
let favouriteConsole = "Playstation 5"
let favouriteCar = "Audi A4"

console.log(`Любимый телефон - ${favouritePhone}`);
console.log(`Любимая консоль - ${favouriteConsole}`);
console.log(`Любимая машина - ${favouriteCar}`);