import type { IGroupBy, orderType, searchType } from "./arr.types";

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

const groupBy = <T>(list: T[], key: keyof T): IGroupBy<T> => {
  if (!key) throw new Error("Key to group is required.");

  return list.reduce((result, obj: T) => {
    const groupKey = String(obj[key]);

    if (!result[groupKey]) result[groupKey] = [];

    result[groupKey].push(obj);

    return result;
  }, {} as IGroupBy<T>);
};

/**
 * Sorts an array of primitive values (number, string, boolean) in the specified order.
 *
 * @template T - The type of elements in the array (must extend number, string, or boolean).
 * @param {Array<T>} arr - The array of primitive values to be sorted.
 * @param {orderType} orderType - The order in which to sort the array. Can be "ASC" or "DESC".
 * @param {never} [key] - This parameter should never be provided for primitive arrays.
 * @returns {Array<T>} - A new sorted array.
 *
 * @example
 *
 * const arr: number[] = [6, 4, 5, 1, 3, 2];
 * orderBy(arr, "ASC") // [1, 2, 3, 4, 5, 6]
 *
 */

function orderBy<T extends number | string | boolean>(
  arr: Array<T>,
  orderType: orderType,
  key?: never
): Array<T>;

/**
 * Sorts an array of objects based on the specified key and order.
 *
 * @template T - The type of elements in the array (must be objects).
 * @param {Array<T>} arr - The array of objects to be sorted.
 * @param {orderType} orderType - The order in which to sort the array. Can be "ASC" or "DESC".
 * @param {keyof T} key - The key by which the objects should be sorted.
 * @returns {Array<T>} - A new sorted array.
 *
 * @example
 *
 *  interface IStudents { name: string; age: number; grade: string}
 *
 * const students: Array<IStudents> = [
 *   { name: "Alice", age: 21, grade: "A" },
 *   { name: "Bob", age: 22, grade: "B" },
 *   { name: "Charlie", age: 21, grade: "A" },
 *   { name: "Charlie", age: 44, grade: "A" },
 *   { name: "David", age: 22, grade: "C" },
 * ];
 *
 *
 * orderBy(students, "ASC", "age") [{"name": "Alice", "age": 21, "grade": "A"}, {"name": "Charlie", "age": 21, "grade": "A"}, {"name": "Bob", "age": 22, "grade": "B"}, {"name": "David", "age": 22, "grade": "C"}, {"name": "Charlie", "age": 44, "grade": "A"}]
 */

function orderBy<T extends object>(
  arr: Array<T>,
  orderType: orderType,
  key: keyof T
): Array<T>;

/**
 * @function orderBy
 * Implementation of the orderBy function that sorts an array based on the provided conditions.
 *
 * @template T - The type of elements in the array.
 * @param {Array<T>} arr - The array to be sorted.
 * @param {orderType} orderType - The order in which to sort the array. Can be "ASC" or "DESC".
 * @param {keyof T} [key] - Optional key by which objects should be sorted. Required for non-primitive arrays.
 * @returns {Array<T>} - A new sorted array.
 */

function orderBy<T>(
  arr: Array<T>,
  orderType: orderType,
  key?: keyof T
): Array<T> {
  if (arr.length === 0) return [];

  if (typeof arr[0] !== "object" || arr[0] === null) {
    if (key !== undefined)
      throw new Error("Key should not be provided for primitive arrays.");

    return [...arr].sort((a, b) =>
      orderType === "ASC"
        ? String(a).localeCompare(String(b))
        : String(b).localeCompare(String(a))
    );
  }

  if (!key) throw new Error("Key is required for non-primitive array sorting.");

  return [...arr].sort((a, b) =>
    orderType === "ASC"
      ? Number(a[key]) - Number(b[key])
      : Number(b[key]) - Number(a[key])
  );
}

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

const removeDuplicates = <T>(
  arr: Array<T>,
  duplicatedKey: keyof T
): Array<T> => {
  const uniqueMap = new Map<T[keyof T], boolean>();
  const result = [];

  for (const obj of arr) {
    const value = obj[duplicatedKey];
    if (!uniqueMap.has(value)) {
      uniqueMap.set(value, true);
      result.push(obj);
    }
  }

  return result;
};

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

const calculateSum = <T>(arr: Array<T>, sumKey: keyof T): number =>
  arr.reduce((accumulator, obj) => accumulator + Number(obj[sumKey]), 0);

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

const hasDuplicateKey = <T>(arr: Array<T>, duplicatedKey: keyof T): boolean => {
  const uniqueSet = new Set();

  for (const obj of arr) {
    const value = obj[duplicatedKey];
    if (uniqueSet.has(value)) return true;

    uniqueSet.add(value);
  }

  return false;
};

const findLastValue = <T>(
  array: Array<T>,
  condition: (data: T) => boolean
): T | undefined => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (condition(array[i])) {
      return array[i];
    }
  }

  return undefined; // If no match is found
};

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
const search = <T, U>(
  arr: Array<T>,
  findKey: keyof T,
  searchParams: U,
  searchType: searchType = "FIRST ONE"
): T | T[] | undefined => {
  const temp =
    searchType === "FIRST ONE"
      ? [...arr].find((item) => item[findKey] === searchParams)
      : searchType === "LAST ONE"
      ? findLastValue([...arr], (item) => item[findKey] === searchParams)
      : [...arr].filter((item) => item[findKey] === searchParams);

  if (temp) return temp;

  return undefined;
};

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

const isIncludes = <T, U>(
  arr: Array<T>,
  checkKey: keyof T,
  isEqual: U
): boolean => [...arr].some((item) => item[checkKey] === isEqual);

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

const remove = <T, U>(arr: Array<T>, key: keyof T, searchParams: U): Array<T> =>
  [...arr].filter((item) => item[key] !== searchParams);

export {
  groupBy,
  orderBy,
  removeDuplicates,
  calculateSum,
  hasDuplicateKey,
  search,
  isIncludes,
  remove,
};
