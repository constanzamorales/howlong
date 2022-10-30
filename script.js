const submitBtn = document.getElementById("submit-btn");
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const todayBtn = document.getElementById("today-btn");
const resultDisplay = document.getElementById("result");

todayBtn.addEventListener("click", (event) => {
	event.preventDefault();
	var DateTime = luxon.DateTime;
	let today = DateTime.now();
	today = today.toISODate();
	startInput.value = today;
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
