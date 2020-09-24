var color = {
  primary: "#000000",
  secondary: "#ffffff",
};
const mode = {
  high: {
    pmin: 0,
    pmax: 1,
    smin: 0,
    smax: 2,
  },
  medium: {
    pmin: 0,
    pmax: 4,
    smin: 0,
    smax: 4,
  },
  light: {
    pmin: 2,
    pmax: 8,
    smin: 2,
    smax: 8,
  },
};
var invert = 0;
var primarySetting = {
  min: 0,
  max: 1,
};
var secondarySetting = {
  min: 0,
  max: 2,
};
var selectedMode = "high";

var getRandomInt = function () {
  return Math.floor(Math.random() * Math.floor(6));
};

var getRealRandomInt = function (min, max) {
  var byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);

  var range = max - min + 1;
  var max_range = 256;
  if (byteArray[0] >= Math.floor(max_range / range) * range)
    return getRandomInt(min, max);
  return min + (byteArray[0] % range);
};

var giveRandomColors = function (primarySetting, secondarySetting) {
  var returnColor = {};
  var number;
  returnColor.primary = "#";
  returnColor.secondary = "#";
  for (var i = 0; i < 3; i++) {
    number = getRealRandomInt(primarySetting.min, primarySetting.max);
    returnColor.primary += number.toString(16);
    number = getRealRandomInt(0, 15);
    returnColor.primary += number.toString(16);

    number = getRealRandomInt(secondarySetting.min, secondarySetting.max);
    returnColor.secondary += (15 - number).toString(16);
    number = getRealRandomInt(0, 15);
    returnColor.secondary += (15 - number).toString(16);
  }
  return returnColor;
};

var changeColors = function () {
  if (invert === 0) {
    color = giveRandomColors(primarySetting, secondarySetting);
  }

  document.querySelector("body").style.backgroundColor = color.primary;
  document.querySelector(".color-info").style.color = color.primary;
  document.querySelectorAll("button")[0].style.backgroundColor = color.primary;
  document.querySelectorAll("button")[1].style.backgroundColor = color.primary;
  document.querySelectorAll("button")[2].style.backgroundColor = color.primary;
  document.querySelectorAll("button")[3].style.backgroundColor = color.primary;
  document.querySelectorAll("label")[0].style.color = color.primary;
  document.querySelectorAll("label")[1].style.color = color.primary;
  document.querySelectorAll("label")[2].style.color = color.primary;
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

var changeContrast = function (var1) {
  selectedMode = var1;
  primarySetting.min = mode[selectedMode].pmin;
  primarySetting.max = mode[selectedMode].pmax;
  secondarySetting.min = mode[selectedMode].smin;
  secondarySetting.max = mode[selectedMode].smax;
};

var itsHigh = function () {
  changeContrast("high");
  changeColors();
};
var itsMedium = function () {
  changeContrast("medium");
  changeColors();
};
var itsLight = function () {
  changeContrast("light");
  changeColors();
};

document.querySelectorAll("input")[0].addEventListener("click", itsHigh);
document.querySelectorAll("input")[1].addEventListener("click", itsMedium);
document.querySelectorAll("input")[2].addEventListener("click", itsLight);
