//console.log('destruct');
//
//const person = {
//    
//    name: 'Andrew',
//    age: 26,
//    location: {
//        city: 'North Haven',
//        temp: 92
//    }
//};
//
//
//const { name: firstName = 'Anonymous', age } = person;
//console.log(`${firstName} is ${age} years old.`)

//if (person.location.city && person.location.temp) {
//    console.log(`Its ${person.location.temp} in ${person.location.city}.`)
//}

//This works the same as the above

//const { city, temp: temperture} = person.location;
//
//if (city && temperture) {
//    console.log(`Its ${temperture} in ${city}`)
//}

//const book = {
//    title: 'Ego is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//        name: 'penguin'
//    }
//};
//
//const { name: publisherName = 'Self Published'} = book.publisher;
//
//if (publisherName) {
//    console.log(publisherName);
//}

// Array destructuring

const address = ['6 Lincoln Street', 'North Haven', 'CT', '06473'];

const [, city, state = 'Long Island'] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$3.00'];

const [name, small, medium, large] = item;

console.log(`a medium ${name} costs ${medium}`)