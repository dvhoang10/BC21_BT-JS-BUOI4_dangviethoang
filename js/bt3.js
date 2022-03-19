function personal(name, income, person) {
  this.name = name;
  this.income = income * 1;
  this.person = person * 1;

  this.getIncomeTax = function () {
    return income - 4000000 - this.person * 1600000;
  };
}

function checkTax(n) {
  // if (n <= 60) {
  //   return 0.05;
  // } else if (n <= 120) {
  //   return 0.1;
  // } else if (n <= 210) {
  //   return 0.15;
  // } else if (n <= 384) {
  //   return 0.2;
  // } else if (n <= 624) {
  //   return 0.25;
  // } else if (n <= 960) {
  //   return 0.3;
  // } else {
  //   return 0.35;
  // }
  switch (n) {
    case 1:
      return 0.05;
    case 2:
      return 0.1;
    case 3:
      return 0.15;
    case 4:
      return 0.2;
    case 5:
      return 0.25;
    case 6:
      return 0.3;
    case 7:
      return 0.7;
  }
}

function calculateTax(array) {
  var income = array[0].getIncomeTax();
  var to60 = checkTax(1),
    from61to120 = checkTax(2),
    from121to210 = checkTax(3),
    from211to384 = checkTax(4),
    from385to624 = checkTax(5),
    from625to960 = checkTax(6),
    from961 = checkTax(7);
  var sum = 0,
    n = 1000000;
  sum += income * to60;
  if (income > 60 * n) {
    sum += (income - 60 * n) * (from61to120 - to60);
  }
  if (income > 120 * n) {
    sum += (income - 120 * n) * (from121to210 - from61to120);
  }
  if (income > 210 * n) {
    sum += (income - 210 * n) * (from211to384 - from121to210);
  }
  if (income > 384 * n) {
    sum += (income - 384 * n) * (from385to624 - from211to384);
  }
  if (income > 624 * n) {
    sum += (income - 624 * n) * (from625to960 - from385to624);
  }
  if (income > 960 * n) {
    sum += (income - 960 * n) * (from961 - from625to960);
  }
  document.getElementById("bt3-alert").style.display = "block";
  document.getElementById(
    "bt3-alert"
  ).innerText = `Khoản thuế cần thanh toán: ${Math.floor(sum)}đ`;
}

function bt3_show() {
  var x = document.getElementsByName("array3[]");
  var data = [];
  for (var i = 0; i < x.length; i++) {
    data[i] = x[i].value;
  }
  var array = [],
    i = 0,
    n = 0;
  while (n < 1 && i <= data.length) {
    array[n] = new personal(data[i], data[i + 1], data[i + 2]);
    n++;
    i += 3;
  }
  calculateTax(array);
}
