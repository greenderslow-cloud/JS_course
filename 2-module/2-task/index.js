function isEmpty(obj) {
  for (let value in obj)
  {if (typeof obj[value]) {
    return false;
  }}
  return true;
}

