var color = {};
color.primary = "#000000";
color.secondary = "#ffffff";

var invert = 0;
var getRandomInt = function () {
  return Math.floor(Math.random() * Math.floor(6));
};

var giveRandomColors = function () {
  var returnColor = {};
  returnColor.primary = "#";
  returnColor.secondary = "#";
  for (var i = 0; i < 6; i++) {
    var number = getRandomInt();
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
  var message = "Copied to Clipboard" + color.primary;
  alert(message);
};

var copyFore = function () {
  var input = document.createElement("input");
  input.setAttribute("value", color.secondary);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  var message = "Copied to Clipboard" + color.primary;
  alert(message);
};
