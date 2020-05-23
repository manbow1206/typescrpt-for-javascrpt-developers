export {};

enum Months {
  January = 1,
  Februyary,
  March,
  April,
  May,
  Jun,
  july,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.May);
console.log(Months.January);
console.log(Months.December);

enum COLORS {
  RED = '#FF000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
  // YELLOW = '#FFFF00',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '',
}
COLORS.YELLOW;
