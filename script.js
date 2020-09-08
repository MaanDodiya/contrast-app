var color = {};
var invert = 0;
var getRandomInt = function () {
  return Math.floor(Math.random() * Math.floor(16));
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

  document.querySelector(".text").style.color = color.secondary;
  document.querySelector(".info").style.backgroundColor = color.secondary;
  document.querySelectorAll("button")[0].style.color = color.secondary;
  document.querySelectorAll("button")[1].style.color = color.secondary;

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
