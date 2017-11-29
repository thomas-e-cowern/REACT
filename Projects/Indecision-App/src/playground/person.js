console.log('person.js is running');

export const isAdult = (x) => x >= 21 ? true : false;
export const canDrink = (x) => x >= 21 ? true : false;

const isSenior = (age) => age >= 65;

export default isSenior;