// Here are solutions to each of the practice problems based on Modules 1 and 2.

// ---

// ### Module 1 Solutions

// 1. **Basic Data Types**:
//    ```typescript
//    function add(a: number, b: number): number {
//        return a + b;
//    }
//    console.log(add(5, 10)); // Output: 15
//    ```

// 2. **Object Power with Optional and Literal Types**:
//    ```typescript
//    type Person = {
//        name: string;
//        age?: number;
//        role: "admin" | "editor" | "viewer";
//    };

//    const person: Person = {
//        name: "Alice",
//        role: "admin"
//    };
//    ```

// 3. **Function Parameter and Return Type Annotations**:
//    ```typescript
//    function greet(name: string): string {
//        return `Hello, ${name}!`;
//    }
//    console.log(greet("Alice")); // Output: Hello, Alice!
//    ```

// 4. **Destructuring in TypeScript**:
//    ```typescript
//    const product = {
//        id: 1,
//        name: "Laptop",
//        price: 999
//    };

//    function displayProduct({ id, name, price }: { id: number; name: string; price: number }): void {
//        console.log(`ID: ${id}, Name: ${name}, Price: $${price}`);
//    }

//    displayProduct(product);
//    ```

// 5. **Type Aliases**:
//    ```typescript
//    type Coordinates = {
//        x: number;
//        y: number;
//    };

//    function getDistance(coord: Coordinates): number {
//        return Math.sqrt(coord.x ** 2 + coord.y ** 2);
//    }

//    console.log(getDistance({ x: 3, y: 4 })); // Output: 5
//    ```

// 6. **Union and Intersection Types**:
//    ```typescript
//    type Car = {
//        make: string;
//        year: number;
//        type: "car";
//    };

//    type Bike = {
//        make: string;
//        year: number;
//        type: "bike";
//        isElectric: boolean;
//    };

//    type Vehicle = Car | Bike;
//    type DetailedVehicle = Car & Bike;

//    const vehicle: Vehicle = { make: "Honda", year: 2021, type: "car" };
//    ```

// 7. **Never, Unknown & Nullable Types**:
//    ```typescript
//    function processInput(input: unknown): void {
//        if (typeof input === "string") {
//            console.log(`String input: ${input}`);
//        } else {
//            console.log("Not a string");
//        }
//    }

//    function throwError(): never {
//        throw new Error("This is an error");
//    }
//    ```

// ---

// ### Module 2 Solutions

// 1. **Type Assertion and Type Narrowing**:
//    ```typescript
//    function double(input: string | number): string | number {
//        if (typeof input === "number") {
//            return input * 2;
//        } else {
//            return input + input;
//        }
//    }

//    console.log(double(10)); // Output: 20
//    console.log(double("Hi")); // Output: HiHi
//    ```

// 2. **Interfaces vs. Types**:
//    ```typescript
//    interface UserInterface {
//        id: number;
//        name: string;
//        email: string;
//    }

//    type UserType = {
//        id: number;
//        name: string;
//        email: string;
//    };

//    const user1: UserInterface = { id: 1, name: "Alice", email: "alice@example.com" };
//    const user2: UserType = { id: 2, name: "Bob", email: "bob@example.com" };
//    ```

// 3. **Generics with Functions**:
//    ```typescript
//    function identity<T>(value: T): T {
//        return value;
//    }

//    function merge<T, U>(obj1: T, obj2: U): T & U {
//        return { ...obj1, ...obj2 };
//    }

//    console.log(identity(42)); // Output: 42
//    console.log(merge({ name: "Alice" }, { age: 30 })); // Output: { name: 'Alice', age: 30 }
//    ```

// 4. **Generics with Interfaces**:
//    ```typescript
//    interface ApiResponse<T> {
//        data: T;
//        status: number;
//    }

//    const stringResponse: ApiResponse<string> = { data: "Hello", status: 200 };
//    const objectResponse: ApiResponse<{ id: number; name: string }> = {
//        data: { id: 1, name: "Alice" },
//        status: 200
//    };
//    ```

// 5. **Constraints with Generics**:
//    ```typescript
//    function getLength<T extends { length: number }>(input: T): number {
//        return input.length;
//    }

//    console.log(getLength("Hello")); // Output: 5
//    console.log(getLength([1, 2, 3])); // Output: 3
//    ```

// 6. **Constraint Using Keyof**:
//    ```typescript
//    function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
//        return obj[key];
//    }

//    const person = { name: "Alice", age: 25 };
//    console.log(pluck(person, "name")); // Output: Alice
//    ```

// 7. **Asynchronous TypeScript**:
//    ```typescript
//    async function fetchData(): Promise<string> {
//        return new Promise((resolve) => {
//            setTimeout(() => {
//                resolve("Data loaded");
//            }, 2000);
//        });
//    }

//    async function main() {
//        const data = await fetchData();
//        console.log(data); // Output: Data loaded (after 2 seconds)
//    }

//    main();
//    ```

// 8. **Conditional Types**:
//    ```typescript
//    type IsString<T> = T extends string ? true : false;

//    type Test1 = IsString<string>; // true
//    type Test2 = IsString<number>; // false
//    ```

// 9. **Mapped Types**:
//    ```typescript
//    type UserData = {
//        id: number;
//        name: string;
//        email: string;
//    };

//    type PartialUserData = {
//        [K in keyof UserData]?: UserData[K];
//    };

//    const partialUser: PartialUserData = { name: "Alice" };
//    ```

// 10. **Utility Types**:
//     ```typescript
//     type Product = {
//         id: number;
//         name: string;
//         price: number;
//     };

//     type OptionalProduct = Partial<Product>;
//     type ReadonlyProduct = Readonly<Product>;

//     const product: ReadonlyProduct = { id: 1, name: "Laptop", price: 999 };
//     ```

// ---

// These solutions cover the essential concepts you've learned in each module. Let me know if you need further explanations for any part!
