function checkSpam(str) {
  let str = str.toLowerCase()
  if (str.indexOf('1xbet') != -1 || str.indexOf('xxx') != -1){
    return true;
  } else {
    return false;
  }
}
