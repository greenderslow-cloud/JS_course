function sumSalary(salaries) {
  let salarys = 0;
  for (let value in salaries) {
    if (Number.isFinite(salaries[value])) {
      salarys += salaries[value];
    }
  }
  return salarys;     
}
