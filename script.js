const submitBtn = document.getElementById("submit-btn");
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const todayBtn = document.getElementById("today-btn");
const resultDisplay = document.getElementById("result");

/* TO-DO: Need to work on how to set today's date inside the date input */
todayBtn.addEventListener("click", (event) => {
	event.preventDefault();
	var DateTime = luxon.DateTime;
	const today = DateTime.now();
	console.log(today.toISODate());
});

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	var DateTime = luxon.DateTime;
	const startDate = DateTime.fromISO(startInput.value);
	const endDate = DateTime.fromISO(endInput.value);
	calculateResult(startDate, endDate);
});

const calculateResult = (start, end) => {
	const result = end.diff(start, ["months", "days"]).toObject();
	showResult(result, resultDisplay);
};

const showResult = (result, resultDisplay) => {
	resultDisplay.innerHTML = `${result.months} months and ${result.days} days.`;
};
