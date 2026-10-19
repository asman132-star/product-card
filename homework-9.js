//Задание №2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fifthNumbers = numbers.filter(num => num >= 5);
console.log(fifthNumbers);

//Задание №3 

const mobilePhones = ['Iphone', 'Samsung', 'Xiaomi', 'Honor'];

const hasIphone = mobilePhones.includes(`Iphone`);
console.log(hasIphone);

//Задание №4 

function reverseArray(arr) {
  return [...arr].reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedPhones = reverseArray(mobilePhones);

console.log(reversedNumbers);
console.log(reversedPhones);

//Задание №6

const { comments } = await import('./comments.js');

// Задание №7

const emailComments = comments.filter(comment => comment.email.includes(`.com`));

console.log(emailComments);

// Задание №8

const postIdComments = comments.map(comment => {
  return {...comment, postId: comment.Id <= 5 ? 2 : 1}
});

console.log(postIdComments);

// Задание №9 

const idNameComments = comments.map(comment => {
  return {Id: comment.Id, name: comment.name}
});

console.log(idNameComments);

// Задание №10

const validComments = comments.map(comment => {
  return {...comment, isInvalid: comment.body.lenght > 180 ? true : false}
});

console.log(validComments);

// Задание № 11

const onlyEmailComments = comments.reduce((acc,comment)  => {
  return [...acc, comment.email];
}, []);

console.log(onlyEmailComments);

// Задание № 12

const onlyEmailString = onlyEmailComments.join(`,`);

console.log(onlyEmailString);