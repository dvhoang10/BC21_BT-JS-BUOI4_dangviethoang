function student(score1, score2, score3, object, area) {
  this.score1 = score1 * 1;
  this.score2 = score2 * 1;
  this.score3 = score3 * 1;
  this.object = object * 1;
  this.area = area * 1;

  this.getScoreofObject = function () {
    if (this.object == 1) {
      return 2;
    } else if (this.object == 2) {
      return 1;
    } else if (this.object == 3) {
      return 0.5;
    }
    return 0;
  };

  this.getScoreofArea = function () {
    if (this.area == 1) {
      return 2.5;
    } else if (this.area == 2) {
      return 1.5;
    } else if (this.area == 3) {
      return 1;
    }
    return 0;
  };

  this.getTotalScore = function () {
    return (
      this.score1 +
      this.score2 +
      this.score3 +
      this.getScoreofObject() +
      this.getScoreofArea()
    );
  };
}

function checkScore(array, score) {
  var totalScore = array[0].getTotalScore();
  document.getElementById("bt1-alert").style.display = "block";
  if (totalScore >= score) {
    document.getElementById(
      "bt1-alert"
    ).innerText = `Đậu | Tổng điểm: ${totalScore}`;
  } else {
    document.getElementById(
      "bt1-alert"
    ).innerText = `Rớt | Tổng điểm: ${totalScore}`;
  }
}

function bt1_show() {
  var officialScore = document.getElementById("txt-official-score").value * 1;
  var x = document.getElementsByName("array1[]");
  var data = [];
  for (var i = 0; i < x.length; i++) {
    data[i] = x[i].value;
  }
  var array = [],
    i = 0,
    n = 0;
  while (n < 1 && i <= data.length) {
    array[n] = new student(
      data[i],
      data[i + 1],
      data[i + 2],
      data[i + 3],
      data[i + 4]
    );
    n++;
    i += 5;
  }
  checkScore(array, officialScore);
}
