"use strict";
// class এর ভিতরে কোনো function তৈরি করলে , তাকে বলা হয় method
class Amimal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Amimal("Garman Shepard", "dog", "Ghew Ghew");
const cat = new Amimal("Maklu", "cat", "maw maw ");
cat.makeSound();
