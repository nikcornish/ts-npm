var Months;
(function (Months) {
    Months[Months["SUMMER"] = 0] = "SUMMER";
    Months[Months["AUTUMN"] = 1] = "AUTUMN";
    Months[Months["WINTER"] = 2] = "WINTER";
    Months[Months["SPRING"] = 3] = "SPRING";
})(Months || (Months = {}));
var birthSeason = Months.AUTUMN;
console.log(birthSeason);
var Spices;
(function (Spices) {
    Spices[Spices["Parsely"] = 24] = "Parsely";
    Spices[Spices["Sage"] = 25] = "Sage";
    Spices[Spices["Rosemary"] = 26] = "Rosemary";
    Spices[Spices["Thyme"] = 27] = "Thyme";
})(Spices || (Spices = {}));
var goodWithLamb = Spices.Rosemary;
console.log(goodWithLamb);
