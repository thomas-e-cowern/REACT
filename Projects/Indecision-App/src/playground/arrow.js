////const square = function (x) {
////    return x * x;
////}
//
////const squareArrow = (x) => {
////    return x * x;
////}
//
//const squareArrow = (x) => x * x;
//
//console.log(squareArrow(1));

//const getFirstName = (fullName) => fullName.split(' ')[0];
//console.log(getFirstName("Bob Smith"));

const add = (a, b) => a + b;

console.log(add(2,3));

const user = {
    name: 'Tom',
    cities: ['North Haven', 'Las Vegas', 'Frankfurt'],
    printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
    
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());