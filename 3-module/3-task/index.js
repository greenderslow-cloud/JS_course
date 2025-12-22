function camelize(str) {
  let splitStr = str.split("-");
  let newList = splitStr
    .slice(1)
    .map((item) => (item ? item[0].toUpperCase() + item.slice(1) : ""));
  newList.unshift(splitStr[0]);
  return newList.join("");
}
