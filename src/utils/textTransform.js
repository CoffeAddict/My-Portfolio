/**
 * Converts a string to PascalCase
 *
 * @export
 * @param {*} str
 * @return {*} string
 */
export function toPascalCase(str) {
    return str
      .toLowerCase() // Convert the string to lowercase
      .replace(/(?:^|\s|_|-)(\w)/g, (match, letter) => letter.toUpperCase()); // Capitalize each word
}