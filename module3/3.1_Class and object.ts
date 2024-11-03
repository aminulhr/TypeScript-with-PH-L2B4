// class এর ভিতরে কোনো function তৈরি করলে , তাকে বলা হয় method
class Amimal {
  //parameter properties
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  // arrow function এ this কাজ করে না, তাই নরমাল function ব্যবহার করতে হবে।
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
const dog = new Amimal("Garman Shepard", "dog", "Ghew Ghew");
const cat = new Amimal("Maklu", "cat", "maw maw ");
cat.makeSound();
dog.makeSound();
