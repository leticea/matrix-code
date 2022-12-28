const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;

let charArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "А",
  "В",
  "Г",
  "Д",
  "Є",
  "Ѕ",
  "З",
  "И",
  "Ѳ",
  "І",
  "К",
  "Л",
  "М",
  "Н",
  "Ѯ",
  "Ѻ",
  "П",
  "Ч",
  "Р",
  "С",
  "Т",
  "Ѵ",
  "Ф",
  "Х",
  "Ѱ",
  "Ѿ",
  "Ц",
];

let maxCharCount = 1000;
let fallingCharArr = [];
let fontSize = 15;
let maxColumns = cw/fontSize;

canvas.width = cw;
canvas.height = ch;

let frames = 0;

class FallingChar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(context) {
    this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
    this.speed = Math.random() * fontSize * 3 / 4 + fontSize * 3 / 4;

    context.fillStyle = "rgba(0,255,0)";
    context.font = fontSize + "px san-serif";
    context.fillText(this.value, this.x, this.y);
    this.y += this.speed;
  }
}

let update = () => {
  if (fallingCharArr.length < maxCharCount) {
    let FallingChar = new FallingChar(Math.floor(Math.random() * maxColumns) * fontSize, Math.random() * ch / 2 - 50);
    fallingCharArr.push(FallingChar);
  }
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0,0,cw,ch);
  for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {

  }
};