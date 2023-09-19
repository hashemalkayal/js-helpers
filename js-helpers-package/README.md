<p align="center"><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" width="300" height="300" /></p>
<p align="center"><strong><code>js-helpeers</code></strong></p>
<p align="center">
js-helpeers package
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2023?style=flat-square" />
  <a href="https://www.npmjs.com/package/js-helpeers"><img src="https://img.shields.io/npm/l/js-helpeers?style=flat-square" /></a>
</p>

# js-helpeers

is a lightweight JavaScript and Typescript (built with generics type) utility package that provides helpful functions for array handling and file handling. It aims to simplify common tasks and improve developer productivity.

## Installation

```bash
$ (npm) npm i js-helpeers

$ (yarn) yarn add js-helpeers

$ (pnpm) pnpm i js-helpeers
```

## Note

This is package offers full support for TypeScript and is built with generic types.

## Array Handling

`js-helpeers` provides a set of array handling functions to manipulate and work with JavaScript arrays.

### Example Usage

```typescript
import {
  orderBy,
  groupBy,
  calculateSum,
  removeDuplicates,
  hasDuplicateKey,
  search,
  isIncludes,
  remove,
} from "js-helpeers";

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

// Removes objects from an array based on a specific key and search parameters.
console.log(remove(students, "name", "Charlie")); // Output: [{"name": "Alice","age": 21,"grade": "A"},{"name": "Bob","age": 22,"grade": "B"},{"name":"David",    "age":22,"grade": "C"}]
```

## Array Handling API

### `groupBy(array , key)`

Groups an array of objects based on a specified key.

```typescript
/**
 * Groups an array of objects based on a specified key.
 * @template T - The type of objects in the array.
 * @param {T[]} arr - The array of objects to be grouped.
 * @param {keyof T} key - The key to group the objects by.
 * @returns {IGroupBy<T>} - An object containing the grouped
 *
 */

groupBy<T>(arr, key): IGroupBy<T>;
```

### `orderBy(array , key , orderType)`

OrderBy an array of objects based on a specified property in ascending or descending order.

```typescript
/**
 * OrderBy an array of objects based on a specified property in ascending or descending order.
 * @template  T - The type of objects in the array.
 * @param  {T[]} arr - The array of objects to be sorted.
 * @param  {keyof T} key - The property of the objects to sort by.
 * @param  {string} orderType - The order type: "ASEC" for ascending or "DESC" for descending.
 * @returns {T[]} - The sorted array of objects.
 *
 */

orderBy<T>(arr, key , orderType):  Array<T>;
```

### `removeDuplicates(array , key)`

Removes duplicate values from an array of objects based on a specified property.

```typescript
/**
 * Removes duplicate values from an array of objects based on a specified property.
 * @template T - The type of objects in the array.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} key - The property to check for duplicates.
 * @returns {T[]} - The array with duplicate values removed.
 *
 */


removeDuplicates<T>(arr, key):  Array<T>;
```

### `calculateSum(array , key)`

Calculates the sum of a specified property from an array of objects.

```typescript
/**
 * Calculates the sum of a specified property from an array of objects.
 * @template T - The type of objects in the array.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} key - The property to be summed.
 * @returns {number} - The sum of the specified property.
 *
 */


calculateSum<T>(arr, key): number;
```

### `hasDuplicateKey(array , key)`

Checks if an array of objects has duplicate values for a specific key.

```typescript
/**
 * Checks if an array of objects has duplicate values for a specific key.
 * @template T - The type of objects in the array.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} duplicatedKey - The key to check for duplicates.
 * @returns {boolean} - Returns true if duplicates are found, false otherwise.
 *
 */


hasDuplicateKey<T>(arr, key): boolean;
```

### `search(array , key , searchParams , searchType)`

Searches for object(s) in an array based on a specific key and search parameters.

```typescript
/**
 * Searches for object(s) in an array based on a specific key and search parameters.
 * @template T - The type of objects in the array.
 * @template U - The type of search parameters.
 * @param {T[]} arr - The array of objects to search in.
 * @param {keyof T} key - The key to search against in the objects.
 * @param {U} searchParams - The search parameters to match against the findKey.
 * @param {("FIRST ONE" | "LAST ONE" | "ALL")} [searchType="FIRST ONE"] - The type of search to perform ("FIRST ONE", "LAST ONE", or "ALL").
 * @returns {T | T[] | undefined} - The matching object(s) found or undefined if no match is found.
 *
 *
 */

search<T , U>(arr, key , searchParams , searchType): T | Array<T> | undefined;
```

### `isIncludes(array , key , searchParams)`

Checks if a specific value is included in an array of objects based on a dynamic key search.

```typescript
/**
 * Checks if a specific value is included in an array of objects based on a dynamic key search.
 * @template T - The type of objects in the array.
 * @template U - The type of the value to check for.
 * @param {T[]} arr - The array of objects to search in.
 * @param {keyof T} key - The key to check against in the objects.
 * @param {U} isEqual - The value to check for equality.
 * @returns {boolean} - Returns true if the value is found, false otherwise.
 *
 */

isIncludes<T , U>(arr, key , isEqual): boolean;
```

### `remove(array , key , searchParams)`

Removes objects from an array based on a specific key and search parameters.

```typescript
/**
 * Removes objects from an array based on a specific key and search parameters.
 * @template T - The type of objects in the array.
 * @template U - The type of search parameters.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} key - The key to filter the objects by.
 * @param {U} searchParams - The search parameters to match against the key.
 * @returns {T[]} - The filtered array of objects with the specified objects removed.
 *
 */

remove<T , U>(arr, key , searchParams): Array<T>;
```

## File Handling API

### `base64ToFile(base64String , fileName)`

Converts a base64 string to a File object.

```typescript
/**
 *
 * Converts a base64 string to a File object.
 * @param {string} base64String - The base64 string to convert.
 * @param {string} fileName - The fileName for file
 * @returns {File} - The File object converted from the base64 string.
 */

base64ToFile(base64String, fileName): File;
```

### `fileToBase64(file)`

Converts a File object to a base64 string.

```typescript
/**
 *
 * Converts a File object to a base64 string.
 * @param {File} file - The file object to convert.
 * @returns {Promise<string>} - A Promise that resolves with the base64 string representing the file object.
 */

fileToBase64(base64String, fileName): Promise<string>;
```

### `fileValidator(file , config)`

Validates a file based on the specified configuration.

```typescript
/**
 * Validates a file based on the specified configuration.
 *
 * @param {File|string} file - The file to validate. It can be either a File object or a base64-encoded string representing the file.
 * @param {object} config - The configuration object specifying the validation criteria.
 * @param {string[]} config.allowExtensions - An array of allowed file extensions.
 * @param {string} config.fileName - The expected file name. If provided, the file's name must match this value (not required).
 * @param {number} config.maxSize - The maximum allowed file size in bytes.
 * @returns {object} - An object indicating whether the file is valid or not, along with the reason for invalidation if applicable.
 * @property {boolean} isValid - Indicates whether the file is valid or not. `true` if valid, `false` otherwise.
 * @property {string} reason - The reason for invalidation if the file is deemed invalid. If valid, this will be "all conditions are applied".
 *
 */

fileValidator(file, config): Promise<string>;
```
