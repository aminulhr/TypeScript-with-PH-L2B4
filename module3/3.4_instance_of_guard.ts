{
  // instance of guard
  // Parent class
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  //child class
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("Dog is Barging");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMaw() {
      console.log("cat is Mawing");
    }
  }
  //smart way
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    // animal is parameter and Animal use as a type
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMaw();
    } else {
      animal.makeSound();
    }
  };
  const dog = new Dog("like a kutta", "dog");
  const cat = new Cat("like a bilai", "cat");

  getAnimal(dog);
}
