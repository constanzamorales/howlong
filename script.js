const submitBtn = document.getElementById("submit-btn");
const startDate = document.getElementById("start");
const endDate = document.getElementById("end");
const todayBtn = document.getElementById("today-btn");

todayBtn.addEventListener("click", (event) => {
	event.preventDefault();
	var DateTime = luxon.DateTime;
	const today = DateTime.now();
	console.log(today.toISODate());
});

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(startDate.value);
	console.log(endDate.value);
});
