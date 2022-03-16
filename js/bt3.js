function personal(name, income, person) {
  this.name = name;
  this.income = income * 1;
  this.person = person * 1;

  this.getIncomeTax = function () {
    return income - 4000000 - this.person * 1600000;
  };
}

function checkTax(n) {
  if (n <= 60) {
    return 0.05;
  } else if (n <= 120) {
    return 0.1;
  } else if (n <= 210) {
    return 0.15;
  } else if (n <= 384) {
    return 0.2;
  } else if (n <= 624) {
    return 0.25;
  } else if (n <= 960) {
    return 0.3;
  } else {
    return 0.35;
  }
}

function calculateTax(array) {
  var income = array[0].getIncomeTax();
  var sum = income * checkTax(income / 1000000);
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
