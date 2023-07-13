import { IFileValidator } from "./file.types";
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
export { base64ToFile, fileToBase64, fileValidator };
//# sourceMappingURL=index.d.ts.map