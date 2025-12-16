function ucFirst(str) {
  if (str === '' || str === null){
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}
