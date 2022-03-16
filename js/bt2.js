function home(name, numberKw) {
  this.name = name;
  this.numberKw = numberKw * 1;

  this.getName = function () {
    return this.name;
  };

  this.getNumberKw = function () {
    return this.numberKw;
  };
}

function getPriceKw(n) {
  switch (n) {
    case 1:
      return 500;
    case 2:
      return 650;
    case 3:
      return 850;
    case 4:
      return 1100;
    default:
      return 1300;
  }
}

function checkBill(array) {
  var numberKw = array[0].getNumberKw(),
    from50 = getPriceKw(1),
    from51to100 = getPriceKw(2),
    from101to200 = getPriceKw(3),
    from201to350 = getPriceKw(4),
    from351 = getPriceKw(0);
  console.log(numberKw);
  var sum = 0;
  //   if (numberKw <= 50) {
  //     sum = numberKw * from50;
  //   } else if (numberKw <= 100) {
  //     sum = 50 * from50 + (numberKw - 50) * from51to100;
  //   } else if (numberKw <= 200) {
  //     sum = 50 * from50 + 50 * from51to100 + (numberKw - 100) * from101to200;
  //   } else if (numberKw <= 350) {
  //     sum =
  //       50 * from50 +
  //       50 * from101to200 +
  //       100 * from101to200 +
  //       (numberKw - 200) * from201to350;
  //   } else {
  //     sum =
  //       50 * from50 +
  //       50 * from101to200 +
  //       100 * from101to200 +
  //       150 * from201to350 +
  //       (numberKw - 350) * from351;
  //   }
  sum = numberKw * 500;
  if (numberKw > 50) {
    sum += (numberKw - 50) * (from51to100 - from50);
  }
  if (numberKw > 100) {
    sum += (numberKw - 100) * (from101to200 - from51to100);
  }
  if (numberKw > 200) {
    sum += (numberKw - 200) * (from201to350 - from101to200);
  }
  if (numberKw > 350) {
    sum += (numberKw - 350) * (from351 - from201to350);
  }

  document.getElementById("bt2-alert").style.display = "block";
  document.getElementById("bt2-alert").innerText = `Tổng tiền: ${sum}đ`;
}

function bt2_show() {
  var x = document.getElementsByName("array2[]");
  var data = [];
  for (var i = 0; i < x.length; i++) {
    data[i] = x[i].value;
  }
  var array = [],
    i = 0,
    n = 0;
  while (n < 1 && i <= data.length) {
    array[n] = new home(data[i], data[i + 1]);
    n++;
    i += 2;
  }
  checkBill(array);
}
