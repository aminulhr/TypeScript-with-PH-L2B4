// Here are some TypeScript practice problems based on the topics you've covered in Modules 1 and 2. These should give you hands-on experience and help reinforce your understanding.

// ---

// ### Module 1

// 1. **Basic Data Types**:
//    Write a TypeScript function `add` that takes two numbers as parameters and returns their sum. Add type annotations for the parameters and the return type.

// 2. **Object Power with Optional and Literal Types**:
//    Define an object type `Person` with properties: `name` (string), `age` (optional number), and `role` (literal type that can only be `"admin"`, `"editor"`, or `"viewer"`). Then, create an object of type `Person`.

// 3. **Function Parameter and Return Type Annotations**:
//    Write a function `greet` that takes a string parameter `name` and returns a greeting message as a string. Add the appropriate type annotations.

// 4. **Destructuring in TypeScript**:
//    Create an object `product` with properties `id`, `name`, and `price`. Write a function that takes this object and uses destructuring to extract and log each property.

// 5. **Type Aliases**:
//    Define a type alias `Coordinates` for an object with `x` and `y` number properties. Write a function that takes a `Coordinates` object and returns the distance from the origin (0, 0).

// 6. **Union and Intersection Types**:
//    Define two types, `Car` and `Bike`, with some common properties like `make` and `year`, but also unique properties. Create a union type that allows a variable to hold either a `Car` or `Bike` object, and an intersection type that combines properties of both.

// 7. **Never, Unknown & Nullable Types**:
//    Write a function that takes an `unknown` type parameter and checks if it's a `string` before logging it. Also, add a function that has a `never` return type (e.g., a function that throws an error).

// ---

// ### Module 2

// 1. **Type Assertion and Type Narrowing**:
//    Write a function `double` that takes a parameter `input` of type `string | number`. Use type narrowing to check if the input is a `number`, then double it. If it’s a `string`, return the string repeated twice.

// 2. **Interfaces vs. Types**:
//    Define a `User` interface with `id`, `name`, and `email` properties, and create a type alias for the same structure. Create a few instances to explore the differences in behavior between interfaces and types.

// 3. **Generics with Functions**:
//    Write a generic function `identity` that takes a value of any type and returns it. Then, create another function `merge` that takes two parameters of different types and returns a single object containing both properties.

// 4. **Generics with Interfaces**:
//    Define an interface `ApiResponse<T>` that represents a response with a `data` property of type `T`. Use this interface with two different types of `data`, such as `string` and an object.

// 5. **Constraints with Generics**:
//    Write a generic function `getLength` that only accepts arrays or strings and returns their length. Use constraints to enforce this.

// 6. **Constraint Using Keyof**:
//    Define a function `pluck` that takes an object and a key (using `keyof`) and returns the value corresponding to the key. Ensure the function only accepts valid keys of the object.

// 7. **Asynchronous TypeScript**:
//    Create a function `fetchData` that simulates an async API call returning data after a delay. Use `Promise` and `async/await` syntax, and ensure TypeScript knows the correct type of the resolved data.

// 8. **Conditional Types**:
//    Define a conditional type `IsString<T>` that evaluates to `true` if `T` is a `string` and `false` otherwise. Use it in a function to check if a given type is a `string`.

// 9. **Mapped Types**:
//    Given a type `UserData` with properties `id`, `name`, and `email`, use a mapped type to create a `PartialUserData` type where all properties are optional.

// 10. **Utility Types**:
//    Use TypeScript's built-in utility types to:
//    - Make all properties of an object `User` optional.
//    - Create a `Readonly` version of a `Product` type with properties `id`, `name`, and `price`.

// ---

// These problems cover the core concepts from your modules and will help you develop a deeper understanding of TypeScript. Let me know if you need solutions or hints for any specific question!
