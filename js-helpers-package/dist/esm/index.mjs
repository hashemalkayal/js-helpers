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


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

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
var orderBy = function (arr, key, orderType) {
    return __spreadArray([], arr, true).sort(function (a, b) {
        return orderType === "ASEC"
            ? Number(a[key]) - Number(b[key])
            : Number(b[key]) - Number(a[key]);
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
var remove = function (arr, key, searchParams) {
    return __spreadArray([], arr, true).filter(function (item) { return item[key] !== searchParams; });
};

var fileTypes = [
    { extension: "txt", mimeType: "text/plain" },
    { extension: "csv", mimeType: "text/csv" },
    { extension: "html", mimeType: "text/html" },
    { extension: "xml", mimeType: "text/xml" },
    { extension: "css", mimeType: "text/css" },
    { extension: "json", mimeType: "application/json" },
    { extension: "js", mimeType: "application/javascript" },
    { extension: "jpg", mimeType: "image/jpeg" },
    { extension: "jpeg", mimeType: "image/jpeg" },
    { extension: "png", mimeType: "image/png" },
    { extension: "gif", mimeType: "image/gif" },
    { extension: "bmp", mimeType: "image/bmp" },
    { extension: "svg", mimeType: "image/svg+xml" },
    { extension: "tiff", mimeType: "image/tiff" },
    { extension: "mp3", mimeType: "audio/mpeg" },
    { extension: "wav", mimeType: "audio/wav" },
    { extension: "ogg", mimeType: "audio/ogg" },
    { extension: "aac", mimeType: "audio/aac" },
    { extension: "flac", mimeType: "audio/flac" },
    { extension: "mp4", mimeType: "video/mp4" },
    { extension: "avi", mimeType: "video/x-msvideo" },
    { extension: "mov", mimeType: "video/quicktime" },
    { extension: "mkv", mimeType: "video/x-matroska" },
    { extension: "webm", mimeType: "video/webm" },
    { extension: "pdf", mimeType: "application/pdf" },
    {
        extension: "docx",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
    {
        extension: "xlsx",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
        extension: "pptx",
        mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    },
];

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
var base64ToFile = function (base64String, fileName) {
    var _a;
    if (fileName === void 0) { fileName = ""; }
    var byteCharacters = atob(base64String.split(",")[1]);
    var mimeType = (_a = base64String === null || base64String === void 0 ? void 0 : base64String.split(";")[0]) === null || _a === void 0 ? void 0 : _a.split(":")[1];
    if (!mimeType)
        throw new Error("Please pass a valid base64 file with a mimetype");
    return new File([new Blob([byteCharacters], { type: mimeType })], fileName, {
        type: mimeType,
    });
};
var fileReader = function (blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var _a;
            var base64String = (_a = reader.result) === null || _a === void 0 ? void 0 : _a.split(",")[1];
            if (!!base64String)
                resolve("".concat(base64String));
            else
                reject("Please pass a vaild Blob file type");
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};
/**
 * Converts a File object to a base64 string.
 * @param {File} file - The file object to convert.
 * @returns {Promise<string>} - A Promise that resolves with the base64 string representing the file object.
 *
 */
var fileToBase64 = function (file) { return __awaiter(void 0, void 0, void 0, function () {
    var fileConfig, base64File;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (isIncludes(fileTypes, "extension", file.type.split("/")[1]))
                    fileConfig = search(fileTypes, "mimeType", file.type, "FIRST ONE");
                return [4 /*yield*/, fileReader(file)];
            case 1:
                base64File = _a.sent();
                return [2 /*return*/, "data:".concat((fileConfig === null || fileConfig === void 0 ? void 0 : fileConfig.mimeType) || undefined, ";base64,").concat(base64File)];
        }
    });
}); };

export { base64ToFile, calculateSum, fileToBase64, groupBy, hasDuplicateKey, isIncludes, orderBy, remove, removeDuplicates, search };
