// Enums are a set of named constants
enum Months {
  SUMMER, AUTUMN, WINTER, SPRING
}
const birthSeason = Months.AUTUMN
console.log(birthSeason);

// 24 below indicates starting number for the enum (Rosemary = 26)
enum Spices {
  Parsely = 24, Sage, Rosemary, Thyme
}
const goodWithLamb = Spices.Rosemary
console.log(goodWithLamb);

