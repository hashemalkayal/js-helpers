'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

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
var groupBy = function (list, key) {
    //@ts-ignore
    return list.reduce(function (result, obj) {
        var groupKey = obj[key];
        //@ts-ignore
        if (!result[groupKey])
            result[groupKey] = [];
        //@ts-ignore
        result[groupKey].push(obj);
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
var orderBy = function (arr, sortBy, orderType) {
    return __spreadArray([], arr, true).sort(function (a, b) {
        return orderType === "ASEC"
            ? Number(a[sortBy]) - Number(b[sortBy])
            : Number(b[sortBy]) - Number(a[sortBy]);
    });
};
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
var removeDuplicates = function (arr, duplicatedKey) {
    var uniqueMap = new Map();
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj = arr_1[_i];
        var value = obj[duplicatedKey];
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
var calculateSum = function (arr, sumKey) {
    return arr.reduce(function (accumulator, obj) { return accumulator + Number(obj[sumKey]); }, 0);
};
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
var hasDuplicateKey = function (arr, duplicatedKey) {
    var uniqueSet = new Set();
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var obj = arr_2[_i];
        var value = obj[duplicatedKey];
        if (uniqueSet.has(value))
            return true;
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
var search = function (arr, findKey, searchParams, searchType) {
    if (searchType === void 0) { searchType = "FIRST ONE"; }
    var temp = searchType === "FIRST ONE"
        ? __spreadArray([], arr, true).find(function (item) { return item[findKey] === searchParams; })
        : searchType === "LAST ONE"
            ? __spreadArray([], arr, true).findLast(function (item) { return item[findKey] === searchParams; })
            : __spreadArray([], arr, true).filter(function (item) { return item[findKey] === searchParams; });
    if (temp)
        return temp;
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
var isIncludes = function (arr, checkKey, isEqual) { return __spreadArray([], arr, true).some(function (item) { return item[checkKey] === isEqual; }); };

exports.calculateSum = calculateSum;
exports.groupBy = groupBy;
exports.hasDuplicateKey = hasDuplicateKey;
exports.isIncludes = isIncludes;
exports.orderBy = orderBy;
exports.removeDuplicates = removeDuplicates;
exports.search = search;
