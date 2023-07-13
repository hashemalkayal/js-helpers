type IGroupBy<T> = {
    [key in keyof T]: Array<T>;
};
type orderType = "ASEC" | "DESC";
type searchType = "ALL" | "FIRST ONE" | "LAST ONE";

/**
 * Groups an array of objects based on a specified key.
 * @template T - The type of objects in the array.
 * @param {T[]} list - The array of objects to be grouped.
 * @param {keyof T} key - The key to group the objects by.
 * @returns {IGroupBy<T>} - An object containing the grouped objects.
 *
 *
 *  @example
 *
 *
 *   const students: Array<interface> =
 *  [
 *  { name: 'Alice', age: 21, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'A' },
    { name: 'David', age: 22, grade: 'C' }
    ]
 *
 *   groupBy(students , "grade")
 *
 *    Output:  {"A": [{"name": "Alice","age": 21,"grade": "A"},{"name": "Charlie","age": 21,"grade": "A"}
     ],"B": [{"name": "Bob","age": 22,"grade": "B"}], "C": [{"name": "David","age": 22,"grade": "C"}]}
}
 */
declare const groupBy: <T>(list: T[], key: keyof T) => IGroupBy<T>;
/**
 * orderBy an array of objects based on a specified property in ascending or descending order.
 * @template  T - The type of objects in the array.
 * @param  {T[]} arr - The array of objects to be sorted.
 * @param  {keyof T} key - The property of the objects to sort by.
 * @param  {string} orderType - The order type: "ASEC" for ascending or "DESC" for descending.
 * @returns {T[]} - The sorted array of objects.
 *
 * @example
 *
 *
 *   const students: Array<interface> =
 *  [
 *  { name: 'Alice', age: 21, grade: 100 },
    { name: 'Bob', age: 22, grade: 99 },
    { name: 'Charlie', age: 21, grade: 20 },
    { name: 'David', age: 22, grade: 50 }
    ]
 *
 * orderBy(students , "grade" , "ASEC")
 *   Output:[{name:"Alice",age:21,grade:"A"},{name:"Charlie",age:21,grade:"A"},{name:"Bob",age:22,grade:"B"},{name:"David",age:22,grade:"C"}];
 * OR
 * orderBy(students , "grade" , "DESC")
 *   Output:[{"name":"Bob","age":22,"grade":"B"},{"name":"David","age":22,"grade":"C"},{"name":"Alice","age":21,"grade":"A"},{"name":"Charlie","age":21,"grade":"A"}];
 */
declare const orderBy: <T>(arr: T[], key: keyof T, orderType: orderType) => T[];
/**
 * Removes duplicate values from an array of objects based on a specified property.
 * @template T - The type of objects in the array.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} duplicatedKey - The property to check for duplicates.
 * @returns {T[]} - The array with duplicate values removed.
 *
 *
 *  @example
 *
 *   const arr: Interface = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" }, // duplicate
  { id: 3, name: "Bob" },
  { id: 2, name: "Jane" } // duplicate
  ];
 *
    removeDuplicates(arr, "id")
    Output: [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' } ]
 *
 */
declare const removeDuplicates: <T>(arr: T[], duplicatedKey: keyof T) => T[];
/**
 * Calculates the sum of a specified property from an array of objects.
 * @template T - The type of objects in the array.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} sumKey - The property to be summed.
 * @returns {number} - The sum of the specified property.
 *
 * @example
 *
 *   const students: Array<interface> =
 *  [
 *  { name: 'Alice', age: 21, grade: 100 },
    { name: 'Bob', age: 22, grade: 99 },
    { name: 'Charlie', age: 21, grade: 20 },
    { name: 'David', age: 22, grade: 50 }
    ]
 *
 *   calculateSum(students, "age")
 *
 *   Output: 86
 *
 */
declare const calculateSum: <T>(arr: T[], sumKey: keyof T) => number;
/**
 * Checks if an array of objects has duplicate values for a specific key.
 * @template T - The type of objects in the array.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} duplicatedKey - The key to check for duplicates.
 * @returns {boolean} - Returns true if duplicates are found, false otherwise.
 *
 *  @example
 *
 *  const students: Array<interface> =
 *  [
 *  { name: 'Alice', age: 21, grade: 100 },
    { name: 'Bob', age: 22, grade: 99 },
    { name: 'Charlie', age: 21, grade: 20 },
    { name: 'David', age: 22, grade: 50 }
    ]
 *
 *   hasDuplicateKey(students, "age")
 *
 *   Output: true
 */
declare const hasDuplicateKey: <T>(arr: T[], duplicatedKey: keyof T) => boolean;
/**
 * Searches for object(s) in an array based on a specific key and search parameters.
 * @template T - The type of objects in the array.
 * @template U - The type of search parameters.
 * @param {T[]} arr - The array of objects to search in.
 * @param {keyof T} findKey - The key to search against in the objects.
 * @param {U} searchParams - The search parameters to match against the findKey.
 * @param {("FIRST ONE" | "LAST ONE" | "ALL")} [searchType="FIRST ONE"] - The type of search to perform ("FIRST ONE", "LAST ONE", or "ALL").
 * @returns {T | T[] | undefined} - The matching object(s) found or undefined if no match is found.
 *
 * @example
 *
 *
   const students: Array<interface> = [
    { name: "Alice", age: 21, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 21, grade: "A" },
    { name: "Charlie", age: 44, grade: "A" },
    { name: "David", age: 22, grade: "C" },
    ];
 * search(students, "name", "Charlie", "FIRST ONE")
 *
 * Output: {name: 'Charlie', age: 21, grade: 'A'}
 *
 * search(students, "name", "Charlie", "LAST ONE")
 *
 * Output: { name: "Charlie", age: 44, grade: "A" }
 *
 * search(students, "name", "Charlie", "ALL")
 *
 * Output:  [{"name": "Charlie","age": 21,"grade": "A"},{"name": "Charlie","age": 44,"grade": "A"}]
 *
 */
declare const search: <T, U>(arr: T[], findKey: keyof T, searchParams: U, searchType?: searchType) => T | T[] | undefined;
/**
 * Checks if a specific value is included in an array of objects based on a dynamic key search.
 * @template T - The type of objects in the array.
 * @template U - The type of the value to check for.
 * @param {T[]} arr - The array of objects to search in.
 * @param {keyof T} checkKey - The key to check against in the objects.
 * @param {U} isEqual - The value to check for equality.
 * @returns {boolean} - Returns true if the value is found, false otherwise.
 *
 * @example
 *    const students: Array<interface> = [
    { name: "Alice", age: 21, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 21, grade: "A" },
    { name: "Charlie", age: 44, grade: "A" },
    { name: "David", age: 22, grade: "C" },
    ];
 *
 * isIncludes(students, "name", "Charlie")
 *
 * Output: true
 *
 * isIncludes(students, "name", "hashem")
 *
 * Output: false
 */
declare const isIncludes: <T, U>(arr: T[], checkKey: keyof T, isEqual: U) => boolean;
/**
 * Removes objects from an array based on a specific key and search parameters.
 * @template T - The type of objects in the array.
 * @template U - The type of search parameters.
 * @param {T[]} arr - The array of objects.
 * @param {keyof T} key - The key to filter the objects by.
 * @param {U} searchParams - The search parameters to match against the key.
 * @returns {T[]} - The filtered array of objects with the specified objects removed.
 *
 * @example
 *    const students: Array<interface> = [
    { name: "Alice", age: 21, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 21, grade: "A" },
    { name: "Charlie", age: 44, grade: "A" },
    { name: "David", age: 22, grade: "C" },
    ];
 *
 *  remove(students, "name", "Charlie")
 *
 *  Output: [
    {
        "name": "Alice",
        "age": 21,
        "grade": "A"
    },
    {
        "name": "Bob",
        "age": 22,
        "grade": "B"
    },
    {
        "name": "David",
        "age": 22,
        "grade": "C"
    }
]
 */
declare const remove: <T, U>(arr: T[], key: keyof T, searchParams: U) => T[];
//# sourceMappingURL=index.d.ts.map

interface IFileValidator {
    isVaild: boolean;
    reason: string;
}

/**
 *
 * Converts a base64 string to a File object.
 * @param {string} base64String - The base64 string to convert.
 * @param {string} fileName - The fileName for file
 * @returns {File} - The File object converted from the base64 string.
 *
 *
 * @example
 *
 *  base64ToFile(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=",
      "fileName"
    )
 *
 *   Output:  File {name: 'fileName', lastModified: 1688735501871, webkitRelativePath: '', size: 1397 , type:"image/png"}
 *
 */
declare const base64ToFile: (base64String: string, fileName?: string) => File;
/**
 * Converts a File object to a base64 string.
 * @param {File} file - The file object to convert.
 * @returns {Promise<string>} - A Promise that resolves with the base64 string representing the file object.
 *
 */
declare const fileToBase64: (file: File) => Promise<string>;
/**
 * Validates a file based on the specified configuration.
 *
 * @param {File|string} file - The file to validate. It can be either a File object or a base64-encoded string representing the file.
 * @param {object} config - The configuration object specifying the validation criteria.
 * @param {string[]} config.allowExtensions - An array of allowed file extensions.
 * @param {string} config.fileName - The expected file name. If provided, the file's name must match this value.
 * @param {number} config.maxSize - The maximum allowed file size in bytes.
 * @returns {object} - An object indicating whether the file is valid or not, along with the reason for invalidation if applicable.
 * @property {boolean} isValid - Indicates whether the file is valid or not. `true` if valid, `false` otherwise.
 * @property {string} reason - The reason for invalidation if the file is deemed invalid. If valid, this will be "all conditions are applied".
 *
 * @example
 *
 * const myConfig = {
    allowExtensions: ["png", "jpg", "jpeg"],
    fileName: "myfile.png",
    maxSize: 5000000, // 5MB
  };

  const validationResult = fileValidator(myFile, myConfig);
   
  Output: {"isVaild": true,"reason": "all conditions are applied"}
 *
 */
declare const fileValidator: (file: File | string, config: {
    allowExtensions: string[];
    maxSize: number;
    fileName?: string;
}) => IFileValidator;
//# sourceMappingURL=index.d.ts.map

export { base64ToFile, calculateSum, fileToBase64, fileValidator, groupBy, hasDuplicateKey, isIncludes, orderBy, remove, removeDuplicates, search };
