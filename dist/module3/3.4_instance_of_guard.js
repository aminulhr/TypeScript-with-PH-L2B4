"use strict";
{
    // instance of guard
    // Parent class
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }
    //child class
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("Dog is Barging");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMaw() {
            console.log("cat is Mawing");
        }
    }
    //smart way
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        // animal is parameter and Animal use as a type
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("like a kutta", "dog");
    const cat = new Cat("like a bilai", "cat");
    getAnimal(dog);
}
