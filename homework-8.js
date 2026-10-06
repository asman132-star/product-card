// Задание №3

const user = {
  name: "Асман",
  surname: "Шахрудинов",
  age: 22,
  country: "Российская Федерация",
  city: "Куса",
  email: "asman132@yandex.ru",
  post: "Junior Frontend-Разработчик"
}

console.log(user);

// Задание №4

const car = {
  brand: "Ауди",
  model: "А4",
  year: 2009,
  color: "white",
  owner: user
}

console.log(car)

// Задание №5

function getMaxSpeed(car) {
  if ("maxSpeed" in car) {
    return;
}

car.maxSpeed = 220;
}

getMaxSpeed(car);
console.log(car);


// Задание №6

function showProperty(object, property) {
  console.log(object[property]);
}
showProperty(car, "brand");


// Задание №7

const products = ["Яблоко", "Апельсины", "Картошка", "Помидор"];
console.log(products);


// Задание №8

const movies = [
  {
    title: "Крик",
    director: "Уэс Крейвен",
    year: 1996,
    genre: "Ужасы"
  },

  {
    title: "Титаник",
    director: "Джеймс Кемерон",
    year: 1997,
    genre: "Драма"
  },

  {
    title: "Парк юрского периода",
    director: "Стивен Спилберг",
    year: 1993,
    genre: "Фантастика"
  },
]

movies.push({
  title: "13-привидений",
  director: "Стив Бэк",
  year: 2001,
  genre: "Ужасы"
}
)

console.log(movies);


// Задание №9 

const horrorMovies = [
  movies[0],
  movies[3]
];

console.log(horrorMovies);

const allMovies = [...movies, ...horrorMovies];

console.log(allMovies);


//Задание №10

function addRareProperty(array) {

  const newArray = array.map(function (movie) {

    return {
      ...movie,
      isRare: movie.year < 2003
    };

  });

  return newArray;
}

const moviesWithRare = addRareProperty(allMovies);

console.log(moviesWithRare);