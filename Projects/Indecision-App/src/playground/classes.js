class Person {
    constructor(name = 'Default', age = 0) {
        this.name = name;
        this.age = age;
    }
 
    getGreeting () {
        return `Hello! I am ${this.name}.`;
    }
    
    getDescription () {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        super(name, age);
        this.major = major;
    }
    
    hasMajor () {
        return !!this.major
    }
    
    getDescription () {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` There major is ${this.major}` 
        }
        
        return description;
    }
}

class Traveler extends Person {
    
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting () {
        let greeting = super.getGreeting ();
        
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        
        return greeting;
    }
}

const me = new Traveler('Thomas Cowern', 50, 'Charlotte');

console.log(me.getGreeting ());

const you = new Traveler();

console.log(you.getGreeting ());