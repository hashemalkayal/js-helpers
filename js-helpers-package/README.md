<p align="center"><br><img src="https://www.thinslices.com/hubfs/Blog-images/Typescript-06.jpg" width="300" height="300" /></p>
<p align="center"><strong><code>js-helpers</code></strong></p>
<p align="center">
js-helpers package
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2023?style=flat-square" />
  <a href="https://www.npmjs.com/package/js-helpeers"><img src="https://img.shields.io/npm/l/js-helpeers?style=flat-square" /></a>
</p>

# js-helpers

is a lightweight JavaScript and Typescript (built with generics type) utility package that provides helpful functions for array handling and file handling. It aims to simplify common tasks and improve developer productivity.

## Installation

```bash
$ (npm) npm i js-helpers

$ (yarn) yarn add js-helpers

$ (pnpm) pnpm i js-helpers
```

## Note

This is package offers full support for TypeScript and is built with generic types.

## Array Handling

`js-helpers` provides a set of array handling functions to manipulate and work with JavaScript arrays.

### Example Usage

```typescript
import { orderBy, removeDuplicates } from "js-helpers";

interface IGroupBy {
  name: string;
  age: number;
  grade: string;
}

const students: Array<IGroupBy> = [
  { name: "Alice", age: 21, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 21, grade: "A" },
  { name: "Charlie", age: 44, grade: "C" }, // not includes with orderBy and groupBy example
  { name: "David", age: 22, grade: "C" },
];

// Groups an array of objects based on a specified key.
console.log(groupBy(students, "grade")); // {"A": [{"name": "Alice","age": 21,"grade": "A"},{"name": "Charlie","age": 21,"grade": "A"}],"B": [{"name": "Bob","age": 22,"grade": "B"}], "C": [{"name": "David","age": 22,"grade": "C"}]}

// OrderBy an array of objects based on a specified property in ascending or descending order.
console.log(orderBy(students, "grade", "ASEC")); // [{name:"Alice",age:21,grade:"A"},{name:"Charlie",age:21,grade:"A"},{name:"Bob",age:22,grade:"B"},{name:"David",age:22,grade:"C"}]

console.log(orderBy(students, "grade", "DESC")); // [{"name":"Bob","age":22,"grade":"B"},{"name":"David","age":22,"grade":"C"},{"name":"Alice","age":21,"grade":"A"},{"name":"Charlie","age":21,"grade":"A"}]

// Removes duplicate values from an array of objects based on a specified property.
console.log(removeDuplicates(students, "age")); // [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }]

// Calculates the sum of a specified property from an array of objects.
console.log(calculateSum(students, "age")); // 130

// Checks if an array of objects has duplicate values for a specific key.
console.log(hasDuplicateKey(students, "age")); // true

// Searches for object(s) in an array based on a specific key and search parameters.
console.log(search(students, "name", "Charlie", "FIRST ONE")); // {name: 'Charlie', age: 21, grade: 'A'}
console.log(search(students, "name", "Charlie", "LAST ONE")); // { name: "Charlie", age: 44, grade: "A" }
console.log(search(students, "name", "Charlie", "ALL")); // [{"name": "Charlie","age": 21,"grade": "A"},{"name": "Charlie","age": 44,"grade": "A"}]

// Checks if a specific value is included in an array of objects based on a dynamic key search.
console.log(isIncludes(students, "name", "Charlie")); // true

console.log(isIncludes(students, "name", "hashem")); // false
```

## Array Handling API

### `groupBy(array , key)`

Groups an array of objects based on a specified key.

### `orderBy(array , key , orderType)`

orderBy an array of objects based on a specified property in ascending or descending order.

### `removeDuplicates(array , key)`

Removes duplicate values from an array of objects based on a specified property.

### `calculateSum(array , key)`

Calculates the sum of a specified property from an array of objects.

### `hasDuplicateKey(array , key)`

Checks if an array of objects has duplicate values for a specific key.

### `search(array , key , searchParams , searchType)`

Searches for object(s) in an array based on a specific key and search parameters.

### `isIncludes(array , key , searchParams)`

Checks if a specific value is included in an array of objects based on a dynamic key search.
