// метод includes

// const str = "Hello World";
// console.log(str.includes("World"));

// метод indexOf

// const str = "Hello world, welcome to universe";
// console.log(str.indexOf("welcome"));

// метод split

// const str = "how are you doing today";
// console.log(str.split(" ", 3));

// метод substr

// const str = "Hello world";
// console.log(str.substr(1, 4));

// метод substring

// const str = "Hello world";
// console.log(str.substr(1, 4));

// Шаблоны строк

// const aName = "John";
// const age = 20;
// const sex = "male";

// ES5

// const personDescription = " Name: " + aName + " Age: " + age + " Sex: " + sex;
// ES6

// const personDescription = `Name: ${aName} Age: ${age * 2} Sex: ${sex}`;
// console.log(personDescription);

// const massage = "Hello!\nI'm John\
//  and I love";
// console.log(massage);

// RegExp - регулярные выражения

// const regexp1 = /l/g;
// const regexp2 = new RegExp("l", "g");
// const regexp3 = new RegExp(/l/, "g");
// const regexp4 = RegExp(/l/, "g");

// const str = "Hello world";

// const result = str.replace(regexp1, "#");

// console.log(result);

// const str = "please open the book on page №7";
// console.log(str.match(/\d/gi));

// console.log(str.replace(/\w/gi, "#")); '$%@!'

// console.log(str.replace(/\s/gi, "-"));

// console.log(str.replace(/\D/gi, "#"));

// console.log(str.replace(/\W/gi, "#"));

// console.log(str.replace(/\S/gi, "#"));

// const str = "please open the book on page №7";

// console.log(str.replace(/[A-Za-z]/g, "*"));

// console.log(str.replace(/[a-j]/g, "*"));

// console.log(str.replace(/[^a-j]/g, "*"));

// console.log(str.replace(/[^/w|\s]/g, ""));
// console.log(str.replace(/[^/a|b]/gi, "*"));

// const str = "Unix time 01.05.2013";

// const result = str.match(/\d{2}\.\d{2}\.\d{4}/gi);

// console.log(result);
let n = prompt("");
const s = /^\+\d{3}\d{3}\d{6}/;
