var typeCustomer = document.getElementById("txt-type-customer");
var connect = document.getElementById("txt-connect");

typeCustomer.addEventListener("change", function (e) {
  connect.toggleAttribute("disabled");
  if (e.target.value == "1") {
    document.getElementById("txt-connect").value = "1";
  }
});

function customer(type, id, connect, channel) {
  this.type = type * 1;
  this.id = id;
  this.connect = connect * 1;
  this.channel = channel * 1;

  this.getProcessFee = function () {
    if (this.type == 1) {
      return 4.5;
    }
    return 15;
  };

  this.getServiceFee = function () {
    if (this.type == 1) {
      return 20.5;
    } else {
      if (this.connect <= 10) return 75;
      return 75 + (this.connect - 10) * 5;
    }
  };

  this.getChannelFee = function () {
    if (this.type == 1) {
      return 7.5 * this.channel;
    }
    return 50 * this.channel;
  };
}

function bt4_show() {
  var x = document.getElementsByName("array4[]");
  var data = [];
  for (var i = 0; i < x.length; i++) {
    data[i] = x[i].value;
  }
  var array = [],
    i = 0,
    n = 0;
  while (n < 1 && i <= data.length) {
    array[n] = new customer(data[i], data[i + 1], data[i + 2], data[i + 3]);
    n++;
    i += 4;
  }
  var sum =
    array[0].getProcessFee() +
    array[0].getServiceFee() +
    array[0].getChannelFee();
  document.getElementById("bt4-alert").style.display = "block";
  document.getElementById(
    "bt4-alert"
  ).innerText = `Tổng tiền cần thanh toán: ${sum}$`;
}
