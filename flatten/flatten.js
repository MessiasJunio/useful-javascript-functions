/**
 * Create a new array or object with all sub-array elements concatenated
 * 
 * It's useful if you trying to reduce a large nested array or object
 * @param {*} value 
 * @returns any
 */
function flatten(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return flattenArray(value);
  }

  return flattenObject(value);
}

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}

function flattenObject(object) {
  const flattenedObj = {};

  for (const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === "object" && value !== null && !Array.isArray(value);

    const flattenedValue = flatten(value);

    if (valueIsObject) {
      Object.assign(flattenedObj, flattenedValue);
    } else {
      flattenedObj[key] = flattenedValue;
    }
  }

  return flattenedObj;
}

const numbersArray = [1, [3, 45, [5, 3]]];
console.log("Array:", flatten(numbersArray));

const animalsObj = {
  animal: {
    felidae: {
      cats: {
        catBreeds: ["Siamese", "Bengal"],
      },
      lions: {
        lionBreeds: ["Asiatic", "Transvall"],
      },
    },
    dogs: {
      dogBreeds: ["Pitbull", "Poodle"],
    },
  },
};
console.log("Object:", flatten(animalsObj));
