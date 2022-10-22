var DateTime = luxon.DateTime;
let today = DateTime.now();
let format = { month: "long", day: "numeric", year: "numeric" };
today = today.setLocale("en-GB").toLocaleString(format);

console.log(today);

const submitBtn = document.getElementById("submit-btn");
const startDate = document.getElementById("start");

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("click");
	console.log(startDate.value);
});
