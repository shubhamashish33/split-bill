$(document).ready(function () {
  $("#howmany").change(function () {
    $("#boxquantity input").remove();
    $("#boxquantity label").remove();
    // $("#r1 p").remove();

    for (i = 0; i < $("#howmany").val(); i++) {
      $("boxquantity").append('<label for="fname">First name:</label>');
      $("#boxquantity").append(
        '<label for="fname">Person ' +
          i +
          "</label>" +
          '<input type="number" id="boxid[' +
          i +
          ']" placeholder="Enter the contribution" style="margin: 10px; padding: 10px; width: 100%; border-radius: 5px;" name="array[]"/>'
      );
    }
  });
});

function run() {
  var n = document.getElementById("howmany").value;
  var result = document.getElementById("result");
  var instr = document.getElementById("instr");
  var bal = [];
  var spent_Val = [];
  var total = 0;
  for (var j = 0; j < n; j++) {
    var input = document.getElementsByName("array[]");
    var a = parseInt(input[j].value);
    spent_Val.push(a);
  }
  spent_Val.forEach((x) => {
    total += x;
  });
  total /= n;
  total = total.toFixed();
  for (var k = 0; k < n; k++) {
    var bal_value = spent_Val[k] - total;
    bal.push(bal_value);
  }

  for (var t = 0; t < bal.length; t++) {
    result.innerHTML += "Person " + t + " balance = " + bal[t] + ".<br />";
  }
  instr.innerHTML =
    "Note: The person with -ve balance has to pay to the person with +ve balance.";
}
