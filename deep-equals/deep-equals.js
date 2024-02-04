/**
 * Compare any primitive and objects values
 * 
 * It's useful if you trying to deep compare any nested array or object
 * without using a third-party library
 * 
 * @param {*} valueOne 
 * @param {*} valueTwo 
 * @returns boolean
 */
function deepEquals(valueOne, valueTwo) {
  if (typeof valueOne !== typeof valueTwo) {
    return false;
  }

  if (typeof valueOne !== "object") {
    if (Number.isNaN(valueOne) && Number.isNaN(valueTwo)) {
      return true;
    }
    return valueOne === valueTwo;
  }

  if (valueOne === null || valueTwo === null) {
    return valueOne === valueTwo;
  }

  if (valueOne === valueTwo) {
    return true;
  }

  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) {
      return false;
    }
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) {
        return false;
      }
    }
    return true;
  }

  if (Array.isArray(valueOne) || Array.isArray(valueOne)) {
    return false;
  }

  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);
  if (valueOneKeys.length !== valueTwoKeys.length) {
    return false;
  }
  for (const key of valueOneKeys) {
    if (!valueTwo.hasOwnProperty(key)) {
      return false;
    }
    if (!deepEquals(valueOne[key], valueTwo[key])) {
      return false;
    }
  }
  return true;
}

console.log("Comparing Objects");
const obj1 = {
  animal: {
    felidae: {
      cats: {
        catBreeds: ["Siamese", "Bengal"],
        quantity: 50
      },
    },
  },
};

const obj2 = {
  animal: {
    felidae: {
      cats: {
        catBreeds: ["Siamese", "Bengal"],
        quantity: 50
      },
    },
  },
};
console.log(deepEquals(obj1, obj2));