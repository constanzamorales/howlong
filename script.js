var DateTime = luxon.DateTime;
let today = DateTime.now();
let format = { month: "long", day: "numeric", year: "numeric" };
today = today.setLocale("en-GB").toLocaleString(format);

console.log(today);

document.getElementById("date").innerHTML = today;
