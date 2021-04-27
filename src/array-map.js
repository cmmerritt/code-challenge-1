export function doubleNumbers(arr) {
  return arr.map(x => x * 2);
};

export function stringItUp(arr){
  return arr.map(String);
};

export function capitalizeNames(arr){
  return arr.map(x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase());
}

export function namesOnly(arr){
  return arr.map(x => x.name);
}

export function makeStrings(arr){
  return arr.map(x => {
    if (x.age > 18) {
      return `${x.name} can go to The Matrix`;
    } else {
      return `${x.name} is under age!!`;
    }
  })
}

export function readyToPutInTheDOM(arr){
  return arr.map(x => {
    return `<h1>${x.name}</h1><h2>${x.age}</h2>`;
  })
}
