function getMinMax(str) {
  let splitStr = str.split(" ");
  let intList = [];
  for (let value of splitStr) {
    if (Number.isFinite(parseInt(value))) {
      intList.push(value);
    }
  }
  return {
    min: Math.min(...intList),
    max: Math.max(...intList),
  };
}
