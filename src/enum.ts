export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = "#FF0000",
  GREEN = "#00FF00",
  BLUE = "#0000FF",
  WHITE = "#FFFFFF",
  BLACK = "#000000"
}

let green = COLORS.GREEN;
console.log({ green });

let white = COLORS.WHITE;
console.log({ white });

enum COLORS {
  YELLOW = "#FFF00"
}

COLORS.YELLOW;