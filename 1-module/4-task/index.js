function checkSpam(str) {
  let newStr = str.toLowerCase()
  if (newStr.indexOf('1xbet') != -1 || newStr.indexOf('xxx') != -1){
    return true;
  } else {
    return false;
  }
}
