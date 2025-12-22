function showSalary(users, age) {
  let salaryList = [];
  for (let user in users) {
    let value = users[user];
    if (value.age <= age) {
      salaryList.push(`${value.name}, ${value.balance}`);
    }
  }
  return salaryList.join("\n");
}
