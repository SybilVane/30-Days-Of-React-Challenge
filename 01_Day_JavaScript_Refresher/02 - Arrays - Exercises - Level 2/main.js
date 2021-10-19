// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file

// First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const noPunctuation = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').split(' ').length;

console.log(noPunctuation);
// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added

const addMeat = () => {
  if (shoppingCart.includes('Meat')) {
    return;
  } else shoppingCart.unshift('Meat');
};

addMeat();
addMeat();
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

const addSugar = () => {
  if (shoppingCart.includes('Sugar')) {
    return;
  } else shoppingCart.push('Sugar');
};

addSugar();
addSugar();
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey

const mySelf = { allergicToHoney: true };
const myFriend = { allergicToHoney: false };

const checkIfAllergic = person => {
  if (person.allergicToHoney) {
    return shoppingCart.filter(item => item !== 'Honey');
  } else {
    return shoppingCart;
  }
};

console.log(checkIfAllergic(mySelf));
console.log(checkIfAllergic(myFriend));

// modify Tea to 'Green Tea'

const replaceTea = () => {
  return shoppingCart.map(item => item.replace(/Tea/, 'Green Tea'));
};

console.log(replaceTea());

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const printEthiopia = () => {
  if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } else {
    countries.push('Ethiopia');
  }
};

printEthiopia();

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const checkIfSassExists = () => {
  if (webTechs.includes('Sass')) {
    console.log(webTechs);
  } else {
    webTechs.push('Sass');
  }
};

checkIfSassExists();
checkIfSassExists();

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
