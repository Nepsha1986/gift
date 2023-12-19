type Transformations = "camelToKebab" | "kebabToCamel" | "capitalize";
function camelToKebabCase(inputString: string): string {
  return inputString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function kebabToCamelCase(inputString: string): string {
  return inputString
    .replace(/-([a-z])/g, function (_, group) {
      return group.toUpperCase();
    })
    .replace(/^-/, "");
}

function capitalize(inputString: string): string {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

const transformationFunctions = new Map<
  Transformations,
  (inputString: string) => string
>([
  ["camelToKebab", camelToKebabCase],
  ["kebabToCamel", kebabToCamelCase],
  ["capitalize", capitalize],
]);

/**
 * Transforms a given string based on an array of transformation types.
 * @param {string} inputString - The input string to transform.
 * @param {Transformations[]} types - An array of transformation types to apply on the string.
 * @return {string} - The transformed string.
 */
function transformString(
  inputString: string,
  types: Transformations[],
): string {
  return types.reduce((acc, type) => {
    const transformFunc = transformationFunctions.get(type);
    return transformFunc ? transformFunc(acc) : "";
  }, inputString);
}

export { transformString };
