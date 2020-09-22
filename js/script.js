var color = {};
color.primary = "#000000";
color.secondary = "#ffffff";

var invert = 0;
var getRandomInt = function () {
  return Math.floor(Math.random() * Math.floor(6));
};

function getRealRandomInt(min, max) {
  var byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);

  var range = max - min + 1;
  var max_range = 256;
  if (byteArray[0] >= Math.floor(max_range / range) * range)
    return getRandomInt(min, max);
  return min + (byteArray[0] % range);
}

var giveRandomColors = function () {
  var returnColor = {};
  returnColor.primary = "#";
  returnColor.secondary = "#";
  for (var i = 0; i < 6; i++) {
    var number = getRealRandomInt(0, 15);
    returnColor.primary += number.toString(16);
    returnColor.secondary += (15 - number).toString(16);
  }
  return returnColor;
};

var changeColors = function () {
  if (invert === 0) {
    color = giveRandomColors();
  }

  document.querySelector("body").style.backgroundColor = color.primary;
  document.querySelector(".color-info").style.color = color.primary;
  document.querySelectorAll("button")[0].style.backgroundColor = color.primary;
  document.querySelectorAll("button")[1].style.backgroundColor = color.primary;
  document.querySelectorAll("button")[2].style.backgroundColor = color.primary;
  document.querySelectorAll("button")[3].style.backgroundColor = color.primary;
  document.querySelector("textarea").style.backgroundColor = color.primary;
  document.querySelector("footer").style.color = color.primary;

  document.querySelector(".text").style.color = color.secondary;
  document.querySelector(".info").style.backgroundColor = color.secondary;
  document.querySelectorAll("button")[0].style.color = color.secondary;
  document.querySelectorAll("button")[1].style.color = color.secondary;
  document.querySelectorAll("button")[2].style.color = color.secondary;
  document.querySelectorAll("button")[3].style.color = color.secondary;
  document.querySelector("textarea").style.color = color.secondary;

  document.querySelector(".primary").textContent =
    "Background Color: " + color.primary;

  document.querySelector(".secondary").textContent =
    "Foreground Color: " + color.secondary;
};

var invertColors = function () {
  [color.primary, color.secondary] = [color.secondary, color.primary];
  invert = 1;
  changeColors();
  invert = 0;
};

var copyBack = function () {
  var input = document.createElement("input");
  input.setAttribute("value", color.primary);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  var message = "Copied to Clipboard " + color.primary;
  alert(message);
};

var copyFore = function () {
  var input = document.createElement("input");
  input.setAttribute("value", color.secondary);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  var message = "Copied to Clipboard " + color.secondary;
  alert(message);
};
