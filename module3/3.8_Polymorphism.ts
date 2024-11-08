{
  //Polymorphism, 2nd pilar of OOP
  // স্থান-কাল-পাত্র বিবেচনায় ভিন্ন ভিন্ন আউটপুট দেয়।
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours par day`);
    }
  }

  class student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours par day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours par day`);
    }
  }

  const getSleepinghours = (param: Person) => {
    //This Person use as a type not  class
    param.getSleep();
  };
  // get a instance as a parameter, and get parent class 'Person' as a type, we know that we use 'class' as a type.
  const person1 = new Person();
  const person2 = new student();
  const person3 = new Developer();
  getSleepinghours(person1);
  getSleepinghours(person2);
  getSleepinghours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //circle = pi*r*r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  //rectangle = height * width
  class rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }
  const gershapeArea = (param: Shape) => {
    console.log(param.getArea());
  };
  const Shape1 = new Shape();
  const Shape2 = new Circle(10);
  const Shape3 = new rectangle(10,20);
  gershapeArea(Shape1,Shape2,Shape3)

  // for run this code > past on your terminal>
  //ts-node-dev --respawn --transpile-only module3\3.8_Polymorphism.ts
}
