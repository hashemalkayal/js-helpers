import type { IGroupBy, orderType, searchType } from "./array.types";

/**
 * Groups an array of elements by a specified key.
 * @template T - The type of the array elements.
 * @param {T[]} list - The array of elements to group.
 * @returns {IGroupBy<T>} An object containing the grouped key and list.
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
  //@ts-ignore
  return list.reduce((result, obj: T) => {
    const groupKey = obj[key];

    //@ts-ignore
    if (!result[groupKey as any]) result[groupKey as any] = [];
    //@ts-ignore
    result[groupKey as any].push(obj);

    return result;
  }, {});
};

/**
 * orderBy an array of objects based on a specified property in ascending or descending order.
 * @template  T - The type of objects in the array.
 * @param  {T[]} arr - The array of objects to be sorted.
 * @param  {keyof T} sortBy - The property of the objects to sort by.
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

const orderBy = <T>(
  arr: Array<T>,
  sortBy: keyof T,
  orderType: orderType
): Array<T> =>
  [...arr].sort((a, b) =>
    orderType === "ASEC"
      ? Number(a[sortBy]) - Number(b[sortBy])
      : Number(b[sortBy]) - Number(a[sortBy])
  );

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
  const uniqueMap = new Map();
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

 * search(students, "name", "Charlie", "ONE")
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
      ? [...arr].findLast((item) => item[findKey] === searchParams)
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

export {
  groupBy,
  orderBy,
  removeDuplicates,
  calculateSum,
  hasDuplicateKey,
  search,
  isIncludes,
};
